<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Electle - Daily Parliament</title>
    
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏛️</text></svg>">

	<script src="https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
		<button class="back-btn" onclick="goToMenu()" title="Back to Menu">🏠</button>
		<h1>🏛️ ELECTLE</h1>
		<p class="subtitle">
			Guess the <b>country</b> and <b>election year</b> based on the parliamentary seating diagram.<br>
			(Lower house only)
		</p>
	</header>

    <div class="top-section">
        <div class="diagram-container">
            <img id="diagram-img" src="" alt="Parliament Diagram" referrerpolicy="no-referrer">
        </div>
    </div>

    <div class="map-wrapper">
        <div class="zoom-controls">
            <button class="zoom-btn" onclick="panZoom.zoomIn()">+</button>
            <button class="zoom-btn" onclick="panZoom.zoomOut()">-</button>
            <button class="zoom-btn" onclick="panZoom.reset()">↺</button>
        </div>

        <div id="map-placeholder"></div>
    </div>

    <div class="bottom-section">
        <div class="controls">
            <div class="status-text" id="selected-display">Selected: <span>—</span></div>
            <input type="number" id="year-input" placeholder="Year" value="">
            <button class="guess-btn" id="submit-btn" onclick="makeGuess()">GUESS</button>
        </div>
        <div class="history-log" id="history"></div>
        
        <div id="main-timer-box">
            <span style="color: #888; font-size: 0.8em;">NEXT PARLIAMENT IN:</span><br>
            <span class="countdown-text" style="font-size: 1.1em; font-weight: bold; font-family: monospace;">00:00:00</span>
        </div>
    </div>

    <div id="win-modal" class="modal-overlay">
        <div class="modal-content">
            <button class="close-btn" onclick="closeModal()">✕</button>
            <div class="modal-title">🎉 VICTORY!</div>
            <div class="modal-info">
                You identified <b style="color:var(--accent-blue)" id="win-country-name"></b><br>
                Election Year: <b style="color:var(--correct-green)" id="win-year-val"></b>
            </div>
            <div class="stats-container">
                <div class="stat-header">Attempts: <span id="attempt-count">0</span></div>
                <div id="win-history-list"></div>
            </div>
            <div style="font-size: 0.8em; text-transform: uppercase; color: #888; margin-top: 15px;">Next Game In</div>
            <div class="countdown-text" style="font-size: 1.5rem; font-weight: bold; font-family: monospace; margin-top: 5px;">00:00:00</div>
			<button id="share-btn" class="share-btn" onclick="shareResults()">📤 SHARE</button>
			<button id="next-round-btn" onclick="nextRound()">⏭ NEXT ROUND</button>
        </div>
    </div>

	<div id="main-menu">
		<div class="menu-title">🏛️ ELECTLE</div>
		<div class="menu-desc">Test your knowledge of parliamentary politics. Guess the country and election year based on the seating plan.</div>
		
		<button class="menu-btn primary" onclick="startGame('daily')">
			📅 Daily Mode
		</button>
		<button class="menu-btn" onclick="startGame('endless')">
			♾️ Endless Mode
		</button>
		<button class="menu-btn" onclick="startGame('easy')" style="background: #2a4d69; border-color: #4a90e2;">
			👶 Easy Mode
		</button>

        <a href="https://x.com/RedOtakuuu" target="_blank" class="social-link">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            @RedOtakuuu
        </a>
	</div>
	<script src="data.js"></script>
    <script>
		let target = null;
		let selectedId = null;
		let selectedName = null;
		let panZoom = null;
		let gameActive = false;
		let currentMode = 'daily';
		let countryGuessed = false;
		let easyDatabaseCache = null;

		const mobileEventsHandler = {
			haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
			init: function(options) {
				let instance = options.instance, initialScale = 1, pannedX = 0, pannedY = 0;
				
				this.hammer = new Hammer(options.svgElement, {
				  recognizers: [
					[Hammer.Pinch, { enable: true }],
					[Hammer.Pan, { direction: Hammer.DIRECTION_ALL }]
				  ]
				});

				this.hammer.on('panstart panmove', function(ev){
				  if (ev.type === 'panstart') { pannedX = 0; pannedY = 0; }
				  instance.panBy({x: ev.deltaX - pannedX, y: ev.deltaY - pannedY});
				  pannedX = ev.deltaX; pannedY = ev.deltaY;
				});

				this.hammer.on('pinchstart pinchmove', function(ev){
				  if (ev.type === 'pinchstart') {
					initialScale = instance.getZoom();
				  }
				  instance.zoomAtPoint(initialScale * ev.scale, {x: ev.center.x, y: ev.center.y});
				});
			},
			destroy: function(){
				this.hammer.destroy();
			}
		};
		
		function getEasyDatabase() {
			if (easyDatabaseCache) return easyDatabaseCache;
			
			const latestParliaments = {};
			
			for (let i = 0; i < database.length; i++) {
				const item = database[i];
				const countryKey = item.country;
				
				if (!latestParliaments[countryKey] || item.year > latestParliaments[countryKey].year) {
					latestParliaments[countryKey] = item;
				}
			}
			
			easyDatabaseCache = Object.values(latestParliaments);
			return easyDatabaseCache;
		}

		window.onload = function() {
			const container = document.getElementById('map-placeholder');
			if (container) {
				container.innerHTML = WORLD_MAP_SVG;
			}
			panZoom = svgPanZoom('#world-map', {
				zoomEnabled: true, 
				controlIconsEnabled: false, 
				fit: true, 
				center: true, 
				minZoom: 0.5, 
				maxZoom: 20, 
				preventMouseEventsDefault: false,
				
				dblClickZoomEnabled: false,
				customEventsHandler: mobileEventsHandler,
				beforePan: function(oldPan, newPan) {
					var sizes = this.getSizes();
					var gutterWidth = sizes.width, gutterHeight = sizes.height;
					var leftLimit = -((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) + gutterWidth / 2;
					var rightLimit = sizes.width - gutterWidth / 2;
					var topLimit = -((sizes.viewBox.y + sizes.viewBox.height) * sizes.realZoom) + gutterHeight / 2;
					var bottomLimit = sizes.height - gutterHeight / 2;
					return { x: Math.max(leftLimit, Math.min(rightLimit, newPan.x)), y: Math.max(topLimit, Math.min(bottomLimit, newPan.y)) };
				}
			});

			setInterval(updateCountdown, 1000);
			updateCountdown();

			setupMapEvents();
		};

		function startGame(mode) {
			currentMode = mode;
			
			document.getElementById('main-menu').classList.add('hidden');
			
			resetGameStateUI();

			if (mode === 'daily') {
				target = getDailyTarget();
				const todayStr = new Date().toISOString().split('T')[0];
				const lastWon = localStorage.getItem('electle_last_won');

				if (lastWon === todayStr) {
					gameActive = false;
					document.getElementById('diagram-img').src = target.img;
					showWinModal(true); 
					document.getElementById('main-timer-box').style.display = 'block';
				} else {
					gameActive = true;
					document.getElementById('diagram-img').src = target.img;
				}
			} else {
				nextRound();
			}
			
			setTimeout(() => panZoom.resize(), 350); 
		}

		function goToMenu() {
			document.getElementById('main-menu').classList.remove('hidden');
			closeModal();
		}

		function nextRound() {
			if (currentMode === 'daily') return;
			const activeDatabase = (currentMode === 'easy') ? getEasyDatabase() : database;
			
			const randomIndex = Math.floor(Math.random() * activeDatabase.length);
			target = activeDatabase[randomIndex];
			
			resetGameStateUI();
			gameActive = true;
			document.getElementById('diagram-img').src = target.img;
			
			console.log("New Round (" + currentMode + "):", target.country);
		}

		function getDailyTarget() {
			const epoch = new Date("2026-02-22");
			const today = new Date();
			today.setHours(0, 0, 0, 0); 
			
			const diffTime = Math.abs(today - epoch);
			const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
			const x = Math.sin(diffDays) * 10000;
			const pseudoRandom = x - Math.floor(x); 
			
			const index = Math.floor(pseudoRandom * database.length);
			return database[index];
		}

		function resetGameStateUI() {
			selectedId = null;
			countryGuessed = false;
			
			document.querySelectorAll('path').forEach(p => {
				p.classList.remove('correct', 'wrong', 'regional', 'selected', 'is-country-hover', 'is-region-hover');
			});

			const yearInput = document.getElementById('year-input');
			yearInput.value = ''; 
			yearInput.disabled = false;
			
			yearInput.style.borderColor = "";
			yearInput.style.color = "";
			yearInput.style.display = (currentMode === 'easy') ? 'none' : '';

			const statusText = document.getElementById('selected-display');
			statusText.innerHTML = "Selected: <span>—</span>";
			
			document.getElementById('submit-btn').disabled = false;
			document.getElementById('history').innerHTML = '';
			document.getElementById('win-modal').classList.remove('visible');
			
			document.getElementById('main-timer-box').style.display = 'none';
			
			if(panZoom) panZoom.reset();
		}

		function setupMapEvents() {
			const paths = document.querySelectorAll('path');
			paths.forEach(p => {
				p.addEventListener('click', () => handleCountrySelect(p));

				p.addEventListener('mouseenter', () => {
					if (!gameActive || countryGuessed) return;
					
					const countryId = p.id.toUpperCase();
					
					document.querySelectorAll(`path[id="${countryId}"]`).forEach(el => {
						el.classList.add('is-country-hover');
					});

					const isGray = !p.classList.contains('selected') && 
								   !p.classList.contains('regional') && 
								   !p.classList.contains('wrong') && 
								   !p.classList.contains('correct');

					if (isGray) {
						const region = getRegionByCountryId(p.id);
						if (region && regionMap[region]) {
							regionMap[region].forEach(id => {
								document.querySelectorAll(`path[id="${id.toUpperCase()}"]`).forEach(el => {
									el.classList.add('is-region-hover');
								});
							});
						}
					}
				});

				p.addEventListener('mouseleave', () => {
					document.querySelectorAll('.is-country-hover').forEach(el => {
						el.classList.remove('is-country-hover');
					});
					document.querySelectorAll('.is-region-hover').forEach(el => {
						el.classList.remove('is-region-hover');
					});
				});

				let startX, startY;
				p.addEventListener('touchstart', (e) => {
					if (e.touches.length > 1) return; 
					startX = e.touches[0].clientX; startY = e.touches[0].clientY;
				}, { passive: true });
				p.addEventListener('touchend', (e) => {
					if (!startX || !startY) return;
					const endX = e.changedTouches[0].clientX; const endY = e.changedTouches[0].clientY;
					if (Math.abs(endX - startX) < 10 && Math.abs(endY - startY) < 10) {
						e.preventDefault(); handleCountrySelect(p);
					}
					startX = null; startY = null;
				});
			});
		}
		
		function handleRegionHover(countryId, isHovering) {
			if (!gameActive || countryGuessed) return;
			
			const regionName = getRegionByCountryId(countryId);
			if (!regionName) return;

			const regionCountries = regionMap[regionName];
			if (regionCountries) {
				regionCountries.forEach(id => {
					const upperId = id.toUpperCase();
					document.querySelectorAll(`path[id="${upperId}"]`).forEach(el => {
						if (!el.classList.contains('correct') && 
							!el.classList.contains('wrong') && 
							!el.classList.contains('regional') && 
							!el.classList.contains('selected')) {
							
							if (isHovering) {
								el.classList.add('region-hover');
							} else {
								el.classList.remove('region-hover');
							}
						}
					});
				});
			}
		}

		function getRegionByCountryId(id) {
			const upperId = id.toUpperCase(); 
			for (const [region, countries] of Object.entries(regionMap)) {
				if (countries.includes(upperId)) return region;
			}
			return null;
		}

		function handleCountrySelect(el) {
			if (!gameActive || countryGuessed) return;
			if (el.classList.contains('correct') || el.classList.contains('wrong')) return;

			if (selectedId) {
				const oldPieces = document.querySelectorAll(`path[id="${selectedId}"]`);
				oldPieces.forEach(piece => piece.classList.remove('selected'));
			}

			selectedId = el.id;
			selectedName = el.getAttribute('name') || el.id;
			
			const newPieces = document.querySelectorAll(`path[id="${selectedId}"]`);
			newPieces.forEach(piece => piece.classList.add('selected'));

			document.getElementById('selected-display').innerHTML = `Selected: <span>${selectedName}</span>`;
		}

		function makeGuess() {
			if (!gameActive) return;

			const yearInput = document.getElementById('year-input');
			const statusText = document.getElementById('selected-display');
			const userYear = (currentMode === 'easy') ? target.year : parseInt(yearInput.value);

			if (!selectedId) { statusText.innerHTML = "<span style='color:#ff5555'>⚠ Select a country!</span>"; return; }
			if (!userYear) { statusText.innerHTML = "<span style='color:#ff5555'>⚠ Enter year!</span>"; return; }

			let rawIds = target.ids ? target.ids : [target.id];
			const correctIds = rawIds.map(id => id.toUpperCase());
			
			const currentSelectedUpper = selectedId.toUpperCase();

			const isCountryCorrect = correctIds.includes(currentSelectedUpper);
			
			const userRegion = getRegionByCountryId(selectedId);
			const isRegionCorrect = (userRegion === target.region);
			const yearDiff = Math.abs(userYear - target.year);

			document.querySelectorAll(`path[id="${selectedId}"]`).forEach(el => el.classList.remove('selected'));

			if (isCountryCorrect) {
				countryGuessed = true; 
				
				correctIds.forEach(id => {
					document.querySelectorAll(`path[id="${id}"]`).forEach(el => {
						el.classList.remove('wrong', 'regional'); 
						el.classList.add('correct');
					});
				});
				
				selectedName = target.country; 
				
			} else if (isRegionCorrect) {
				const regionCountries = regionMap[target.region];
				if (regionCountries) {
					regionCountries.forEach(countryId => {
						const upperId = countryId.toUpperCase();
						document.querySelectorAll(`path[id="${upperId}"]`).forEach(el => {

							if (el.id !== selectedId && !el.classList.contains('correct')) {
								el.classList.add('regional');
							}
						});
					});
				}
				document.querySelectorAll(`path[id="${selectedId}"]`).forEach(el => el.classList.add('wrong'));
			} else {
				document.querySelectorAll(`path[id="${selectedId}"]`).forEach(el => el.classList.add('wrong'));
			}

			let yearIcon = yearDiff === 0 ? "✅" : (userYear < target.year ? "↑" : "↓");
			let rowClass = "history-row";
			if (isCountryCorrect && yearDiff === 0) rowClass += " win";
			else if (isCountryCorrect || isRegionCorrect) rowClass += " close";
			let icon = isCountryCorrect ? "🌍✅" : (isRegionCorrect ? "🌍🟡" : "🌍❌");

			const historyLog = document.getElementById('history');
			const row = document.createElement('div');
			row.className = rowClass;
			let rightSideContent = (currentMode === 'easy') 
				? icon 
				: `${icon} | ${userYear} ${yearIcon}`;

			row.innerHTML = `<div>${selectedName}</div><div>${rightSideContent}</div>`;
			historyLog.prepend(row);

			if (isCountryCorrect && yearDiff === 0) {
				gameActive = false;
				statusText.innerHTML = "<span style='color:#538d4e'>VICTORY!</span>";
				if (currentMode === 'daily') {
					localStorage.setItem('electle_last_won', new Date().toISOString().split('T')[0]);
					document.getElementById('main-timer-box').style.display = 'block'; 
				}
				setTimeout(() => showWinModal(false), 1500);
			} else if (isCountryCorrect) {
				statusText.innerHTML = `<span style='color:#538d4e'>Correct! Now fix the Year (${yearIcon})</span>`;
				yearInput.select();
			} else {
				selectedId = null;
				statusText.innerHTML = "Selected: <span>—</span>";
				if (yearDiff !== 0) {
					yearInput.value = "";
				} else {
					yearInput.style.borderColor = "var(--correct-green)";
					yearInput.style.color = "var(--correct-green)";
				}
			}
		}
		function showWinModal(instant) {
			document.getElementById('win-country-name').innerText = target.country;
			document.getElementById('win-year-val').innerText = target.year;
			document.getElementById('submit-btn').disabled = true;
			document.getElementById('year-input').disabled = true;

			const historyRows = document.querySelectorAll('.history-row');
			document.getElementById('attempt-count').innerText = historyRows.length;
			const listContainer = document.getElementById('win-history-list');
			listContainer.innerHTML = '';
			for (let i = 0; i < historyRows.length; i++) {
				const miniRow = document.createElement('div');
				miniRow.className = 'mini-row';
				miniRow.innerHTML = historyRows[i].innerHTML;
				listContainer.appendChild(miniRow);
			}

			const timerEls = document.querySelectorAll('.countdown-text');
			const nextBtn = document.getElementById('next-round-btn');
			const timerLabel = document.querySelector('.modal-content div[style*="text-transform: uppercase"]');
			const shareBtn = document.getElementById('share-btn');

			if (currentMode === 'endless' || currentMode === 'easy') {
				nextBtn.style.display = 'block';
				if(shareBtn) shareBtn.style.display = 'none';
				timerEls.forEach(el => el.style.display = 'none');
				if(timerLabel) timerLabel.style.display = 'none';
			} else {
				nextBtn.style.display = 'none';
				shareBtn.style.display = 'block';
				timerEls.forEach(el => el.style.display = 'block');
				if(timerLabel) timerLabel.style.display = 'block';
			}
			
			const modal = document.getElementById('win-modal');
			modal.classList.add('visible');
			if(instant) modal.style.transition = 'none';
		}

		function closeModal() {
			document.getElementById('win-modal').classList.remove('visible');
		}

		function updateCountdown() {
			const now = new Date();
			const tomorrow = new Date(now);
			tomorrow.setDate(tomorrow.getDate() + 1);
			tomorrow.setHours(0, 0, 0, 0);
			const diff = tomorrow - now;
			const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
			const s = Math.floor((diff % (1000 * 60)) / 1000);
			const timeStr = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
			document.querySelectorAll('.countdown-text').forEach(t => t.innerText = timeStr);
		}
		function shareResults() {
			try {
				const epoch = new Date("2026-02-21");
				const today = new Date();
				const diffDays = Math.floor(Math.abs(today - epoch) / (1000 * 60 * 60 * 24));

				const historyRows = document.querySelectorAll('#win-history-list .mini-row');
				let emojis = [];
				
				for (let i = historyRows.length - 1; i >= 0; i--) {
					const rowDivs = historyRows[i].querySelectorAll('div');
					if (rowDivs.length >= 2) {
						const rowText = rowDivs[1].innerText; 
						const parts = rowText.split(' | ');
						
						if (parts.length === 2) {
							const icon = parts[0].trim(); 
							const yearIcon = parts[1].trim().split(' ')[1] || ''; 
							emojis.push(`${icon} ${yearIcon}`);
						}
					}
				}

				const textToShare = `🏛️ Electle #${diffDays}\n\n${emojis.join('\n')}\n\nPlay at: https://electle.fun\n#electle`;
				const btn = document.getElementById('share-btn');

				const showSuccess = () => {
					btn.innerText = "✅ COPIED!";
					btn.style.background = "var(--correct-green)";
					setTimeout(() => {
						btn.innerText = "📤 SHARE";
						btn.style.background = "";
					}, 2000);
				};

				const fallbackCopy = () => {
					const textArea = document.createElement("textarea");
					textArea.value = textToShare;
					textArea.style.position = "fixed"; 
					textArea.style.opacity = "0"; 
					document.body.appendChild(textArea);
					textArea.focus();
					textArea.select();
					try {
						document.execCommand('copy');
						showSuccess();
					} catch (err) {
						alert("Copy your result:\n\n" + textToShare);
					}
					document.body.removeChild(textArea);
				};

				if (navigator.share && /mobile|android|iphone|ipad/i.test(navigator.userAgent)) {
					navigator.share({
						title: 'My Electle Result',
						text: textToShare
					}).catch(err => console.log("Sharing canceled"));
				} 
				else {
					if (navigator.clipboard && window.isSecureContext) {
						navigator.clipboard.writeText(textToShare)
							.then(showSuccess)
							.catch(() => fallbackCopy());
					} else {
						fallbackCopy();
					}
				}
			} catch (error) {
				console.error("Sharing error: ", error);
			}
		}
    </script>
</body>
</html>
