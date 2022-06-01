import React, { useState } from "react";

import Tarea from "./Tarea.jsx";
import FormularioTarea from "./FormularioTarea.jsx";

const ListaTareas = () => {
	const [tareas, setTareas] = useState([]);

	const publicarTarea = (tarea) => {
		console.log(tarea);
		if (tarea.texto && tarea.texto.trim()) {
			setTareas([tarea, ...tareas]);
		}
		console.log(tarea);
	};

	const eliminarTareaa = (id) => {
		const tareasActualizadass = tareas.filter((tarea) => tarea.id !== id);
		setTareas(tareasActualizadass);
		console.log(tareasActualizadass);

		setTareas(tareas.filter((tarea) => tarea.id !== id));
		console.log(tareas.filter((tarea) => console.log(tarea.id, id, "eh")));
		console.log(tareas);
	};

	const completar = (id) => {
		const tareasActualizadas = tareas.map((tarea) => {
			if (tarea.id === id) {
				tarea.estaCompletada = !tarea.estaCompletada;
			}
			return tarea;
		});
		setTareas((tarea) => (tarea = tareasActualizadas));
	};

	return (
		<>
			<div className="container-componente-formulario">
				<FormularioTarea onChange={publicarTarea}></FormularioTarea>
			</div>
			<div className="container-componente-tarea">
				{tareas.map((tarea) => (
					<Tarea
						key={tarea.id}
						id={tarea.id}
						texto={tarea.texto}
						estaCompletada={tarea.estaCompletada}
						eliminar={eliminarTareaa}
						completarTarea={completar}
					/>
				))}
			</div>
		</>
	);
};

export default ListaTareas;
