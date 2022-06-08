import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

const FormularioTarea = ({ publicar }) => {
	const input = document.querySelector(".input-tarea");

	const [textoTarea, setTexto] = useState("");

	const esCribiendoInput = (e) => {
		setTexto(e.target.value);
	};
	const enviarConEnter = (e) => {
		if (e.key === "Enter") {
			enviarTarea();
		}
	};

	const enviarTarea = (e) => {
		const tareaNueva = {
			id: uniqid(`tarea-`),
			label: textoTarea,
			done: false,
		};
		setTexto((texto) => (texto = ""));
		publicar(tareaNueva);
		input.value = "";
	};

	return (
		<div className="row d-flex justify-content-center w-100 p-0">
			<div className="container-formulario-tarea">
				<div className="col-9">
					<input
						type="text"
						className="input-tarea"
						placeholder="Escribe lo que no vas a hacer"
						onChange={esCribiendoInput}
						onKeyDown={enviarConEnter}
					/>
				</div>

				<div className="col-3">
					<div
						className="boton-formulario-tarea"
						onClick={enviarTarea}>
						Enviar
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormularioTarea;
