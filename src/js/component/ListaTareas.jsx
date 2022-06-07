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
	return (
		<>
			<div className="container-componente-formulario">
				<FormularioTarea publicar={publicar}></FormularioTarea>
			</div>
			<div className="container-componente-tarea">
				{tareas.map((tarea) => {
					return (
						<Tarea
							key={tarea.id}
							id={tarea.id}
							label={tarea.label}
							done={tarea.done}
							eliminar={eliminar}
							completarTarea={completar}
						/>
					);
				})}
			</div>
		</>
	);
};

export default ListaTareas;
