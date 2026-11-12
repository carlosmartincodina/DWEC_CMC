/* Tienes un array simple con nombres de futbolistas: */
const futbolistas = [ "Messi", "Ronaldo", "Neymar", "Mbappé", "Haaland", "Lewandowski",
"Benzema", "Salah", "De Bruyne", "Modrić"
];
/* Realiza las siguientes operaciones utilizando Array Functions:
• [ forEach ] - Muestra cada futbolista con su posición en el array */

futbolistas.forEach((elemento,index) => {
    console.log(index+" "+elemento)
})

/* • [ every ] - Verifica si todos los nombres tienen más de 3 caracteres */
let masDeTres = futbolistas.every((num) => num.length > 3)

/* • [ some ] - Comprueba si hay algún futbolista cuyo nombre empiece con "M" */

let algunNombreConM = futbolistas.some((futbolista) => futbolista.charAt(0) === "M")

/* • [ map ] - Crea un nuevo array con cada nombre en mayúsculas */

let futbolistasMap = futbolistas.map((futbolista) => futbolista.toUpperCase())

/* • [ findIndex ] - Encuentra la posición del primer futbolista con más de 8 caracteres */

let posicionMas8caracteres = futbolistas.findIndex((futbolista) => futbolista.length > 8)

/* • [ find ] - Encuentra el primer futbolista que contiene la letra "z" */

let futbolistaZ = futbolistas.find((futbolista) => futbolista.includes("z"))