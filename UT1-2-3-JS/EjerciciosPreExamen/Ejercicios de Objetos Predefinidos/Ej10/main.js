const tareas = ["Estudiar JavaScript", "Hacer ejercicio", "Comprar víveres", "Llamar al médico", "Limpiar la casa"];
/* Realiza las siguientes operaciones utilizando los métodos de ordenación: */
/* • [ sort ] Orden alfabético: Ordena las tareas en orden alfabético (A-Z) */

const tareasOrdenadas = tareas.sort()


/* • [ reverse ] Orden inverso: Invierte el orden de la lista original de tareas */

const tareasAlReves = tareas.reverse()


/* • [ sort + reverse ] Orden Z-A: Ordena las tareas en orden alfabético inverso (Z-A) */

const tareasOrdenadasAlReves = tareas.sort().reverse()

/* • [ sort +??? ] Orden por longitud: Ordena las tareas por longitud del texto (de más corto a más largo) */

const longitudTareas = tareas.sort((a, b) => a.length - b.length);

/* • [ sort + ??? ] Orden por longitud descendente: Ordena las tareas por longitud del texto (de más largo a más) */

const longitudTareas1 = tareas.sort((a, b) => a.length - b.length);