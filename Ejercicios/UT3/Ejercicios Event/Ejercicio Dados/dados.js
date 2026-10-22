// VARIABLES GLOBALES a UTILIZAR
let nombre_j1,nombre_j2;

let tiradas_j1 =0 
let tiradas_j2=0;

let puntos_j1=0
let puntos_j2=0;

let contador_partidas=0;
let infoPartida=null;

let ganador=null;
let perdedor=null;

let horas = window.setInterval(hora,1000)

function hora() {
	let fecha = new Date()
	//Cogemos el id de la hora, incrustamos la hora y con la variable de arriba se actualiza cada segundo
	document.getElementById("idReloj").innerHTML =`Hora: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
}

function iniciar(){

	if(validarInformacionInicial()==false){		
		return false;
	}

	//Iniciamos contador de partidas
	contador_partidas = contador_partidas+1 
	ganador=null;
	perdedor=null;
	document.getElementById("idBotonIniciar").setAttribute('disabled',"true");
	document.getElementById("dadoJ1").src = "0.png";
	document.getElementById("dadoJ2").src = "0.png";
	puntos_j1=puntos_j2=0;

	// Recogida de valores
	nombre_j1=document.getElementById("idInputNombreJ1").value;
	nombre_j2=document.getElementById("idInputNombreJ2").value;
	tiradas_j1=document.getElementById("idNumTiradas").value;
	tiradas_j2=tiradas_j1;

	document.getElementById("idPuntuacionJ1").innerHTML="PUNTUACIÓN: - 00 -";
	document.getElementById("idPuntuacionJ2").innerHTML="PUNTUACIÓN: - 00 -";
	
	//Empieza el juego!!!
	// Cargar información en el tablero de los jugadores
	document.getElementById("idTablero").classList.remove('ocultar');
	
	document.getElementById("idNombreJ1").innerHTML = `JUGADOR 1 : ${nombre_j1}`;
	document.getElementById("idNombreJ2").innerHTML = `JUGADOR 2 : ${nombre_j2}`;

	document.getElementById("idBotonTirarJ1").removeAttribute('disabled');
	document.getElementById("idBotonTirarJ2").removeAttribute('disabled');

	document.getElementById("tiradasJ1").innerHTML="TE QUEDAN " + tiradas_j1 + " TIRADAS";
	document.getElementById("tiradasJ2").innerHTML="TE QUEDAN " + tiradas_j2 + " TIRADAS";


}

function tiradaJ1(){
	// Actualizar Dado
	let aleatorio = generarNumeroAleatorio();
	document.getElementById("dadoJ1").src = `${aleatorio}.png`;
	puntos_j1 = puntos_j1 + aleatorio;

	//Actualizar puntuación
	document.getElementById("idPuntuacionJ1").innerHTML=`PUNTUACIÓN: ${puntos_j1}`;
	
	//Actualizar número de tiradas
	tiradas_j1 = parseInt(tiradas_j1) - 1;
	document.getElementById("tiradasJ1").innerHTML=`TE QUEDAN ${tiradas_j1} TIRADAS`; 
	
	// Comprobar si existe algún ganador
	comprobarGanador();
}

function tiradaJ2(){
	// Actualizar Dado
	let aleatorio = generarNumeroAleatorio();
	document.getElementById("dadoJ2").src =`${aleatorio}.png`;
	
	//Actualizar puntuación
	puntos_j2 = puntos_j2 + aleatorio;
	document.getElementById("idPuntuacionJ2").innerHTML=`PUNTUACIÓN: ${puntos_j2}`;
	
	//Actualizar número de tiradas
	tiradas_j2 = tiradas_j2 - 1;
	document.getElementById("tiradasJ2").innerHTML=`TE QUEDAN ${tiradas_j2} TIRADAS`; 
	
	// Comprobar si existe algún ganador
	comprobarGanador();
}


function comprobarGanador(){
	
	if (tiradas_j1 == 0){											// ¿Ha terminado jugador 1?
		document.getElementById("idBotonTirarJ1").setAttribute('disabled', "true");
	}

	if (tiradas_j2 == 0){											// ¿Ha terminado jugador 2?
		document.getElementById("idBotonTirarJ2").setAttribute('disabled', "true");
	}

	if (tiradas_j2 == 0 && tiradas_j1 == 0) {						// ¿Han terminado ambos jugadores?
		document.getElementById("idBotonIniciar").removeAttribute('disabled')
		if (puntos_j1 > puntos_j2){				
			
			alert(`Partida Finalizada, ¡¡¡ Vencedor ${nombre_j1} !!! ${puntos_j1} puntos`)
			
			ganador=document.getElementById("idNombreJ1").value
			perdedor=document.getElementById("idNombreJ2").value	
							;
		} else if (puntos_j1 < puntos_j2) {				
			alert(`Partida Finalizada, ¡¡¡ Vencedor ${nombre_j2} !!! ${puntos_j2} puntos`)
			
			ganador=document.getElementById("idNombreJ1").value
			perdedor=document.getElementById("idNombreJ2").value
			
		} else{
			
			alert(`Partida Finalizada, ¡¡¡EMPATEEEE!!! ${puntos_j1} puntos`)
		}

		document.getElementById("idBotonIniciar").removeAttribute('disabled')
		
		gestionJugadores();

		gestionPuntuacion();
		
	}	
	
}
/********************************************************
*  APARTADO 1 : Implementar reloj del juego
	-> Mostrar en la parte superior del juego la fecha actual del sistema. Debe ser actualizada cada segundo. 
*******************************************************/


 /********************************************************
*  APARTADO 2 : generarNumeroAleatorio
	-> Implementar la función para generar un número que simule el lanzamiento de un dado. 
*******************************************************/

function generarNumeroAleatorio(){
	return parseInt((Math.random()*6)+1);
 }

 /********************************************************
*  APARTADO  3  : Listado de jugadores	
*******************************************************/

 

 /********************************************************
*  APARTADO  4  : Mostrar resultados	
*******************************************************/




/*************************************************************
 ***********************************************************
 ***********************************************************/
 function validarInformacionInicial(){
	if(document.getElementById("idInputNombreJ1").value == false){		
		
		alert('Debes indicar el nombre del Jugador 1!')
		return false;
	}
	if(document.getElementById("idInputNombreJ2").value == false){
		
		alert('Debes indicar el nombre del Jugador 2!');		  
		return false;
	}

	if(document.getElementById("idNumTiradas").value == false){		
	
		alert('Debes indicar el Número de tiradas!')
		return false;
	}

	let tiradas = parseInt(document.getElementById("idNumTiradas").value);
	if( isNaN(tiradas) || (!isNaN(tiradas) && (tiradas<=0))){		
		
		alert('el número de tiradas debe ser superior a 0!')
		return false;

	}

	return true;
}

function gestionPuntuacion() {
	//Usando funciones del DOM
	let padreTr = document.createElement("tr")
	let hijoTd1 = document.createElement("td")
	let hijoTd2 = document.createElement("td")

	hijoTd1.innerHTML=`${puntos_j1}-${puntos_j2}`
}
