import React, { useState, useEffect } from "react";

import Tarea from "./Tarea.jsx";
import FormularioTarea from "./FormularioTarea.jsx";

import uniqid from "uniqid";

const ListaTareas = ({
	tareas,
	tareasImportadas,
	publicar,
	eliminar,
	completar,
}) => {
	// const [tareas, setTareas] = useState([]);

	// const enviarTareasImportadas = tareasImportadas.map((tarea) => {
	// 	let tareaNueva = {
	// 		id: uniqid("tarea-"),
	// 		texto: tarea,
	// 		completada: false,
	// 	};
	// });

	// const publicarTarea = (tarea) => {
	// 	if (tarea.texto && tarea.texto.trim()) {
	// 		setTareas([tarea, ...tareas]);
	// 	}
	// };

	// const eliminarTareaa = (id) => {
	// 	const tareasActualizadass = tareas.filter((tarea) => tarea.id !== id);
	// 	setTareas(tareasActualizadass);

	// 	setTareas(tareas.filter((tarea) => tarea.id !== id));
	// };

	// const completar = (id) => {
	// 	const tareasActualizadas = tareas.map((tarea) => {
	// 		if (tarea.id === id) {
	// 			tarea.estaCompletada = !tarea.estaCompletada;
	// 		}
	// 		return tarea;
	// 	});
	// 	setTareas((tarea) => (tarea = tareasActualizadas));
	// };

	return (
		<>
			<div className="container-componente-formulario">
				<FormularioTarea publicar={publicar}></FormularioTarea>
			</div>
			<div className="container-componente-tarea">
				{tareas.map((tarea) => (
					<Tarea
						key={tarea.id}
						id={tarea.id}
						texto={tarea.texto}
						estaCompletada={tarea.estaCompletada}
						eliminar={eliminar}
						completarTarea={completar}
					/>
				))}
				{/* {enviarTareasImportadas.map((tarea) => {
					return (
						<Tarea
							key={uniqid("tarea-")}
							id={uniqid("tarea-")}
							texto={tarea.texto}
							estaCompletada={tarea.completada}
							eliminar={eliminarTareaa}
							completarTarea={completar}
						/>
					);
				})} */}
				{/* {tareasImportadas.map((tarea) => (
					<Tarea
						key={uniqid("tarea-")}
						id={uniqid("tarea-")}
						texto={tarea}
						estaCompletada={false}
						eliminar={eliminarTareaa}
						completarTarea={completar}
					/>
				))} */}
			</div>
		</>
	);
};

export default ListaTareas;
