import React from "react";

import Tarea from "./Tarea.jsx";
import FormularioTarea from "./FormularioTarea.jsx";

const ListaTareas = ({ tareas, publicar, eliminar, completar }) => {
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
