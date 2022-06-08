import React from "react";
import { AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";

function Tarea({ id, label, done, eliminar, completarTarea }) {
	return (
		<div
			className={
				done ? `container-tarea estaCompletada` : `container-tarea`
			}
			id={id}>
			<div className="container">
				<div className="row tarea-row">
					<div className="col-8 col-lg-10">
						<div className="texto-tarea">{label}</div>
					</div>
					<div className="col-2 col-lg-1">
						<div
							className="container-icono-tarea d-flex justify-content-center align-items-center"
							onClick={() => completarTarea(id)}>
							<AiOutlineCheck className="icono-tarea" />
						</div>
					</div>
					<div className="col-2 col-lg-1">
						<div
							className="container-icono-tarea d-flex justify-content-center align-items-center"
							onClick={() => eliminar(id)}>
							<AiOutlineDelete className="icono-tarea" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tarea;
