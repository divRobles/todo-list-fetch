import React, { useState, useEffect } from "react";
// import Foto4Geeks from "../src/imgs/Foto4Geeks.png";
import ListaTareas from "./ListaTareas.jsx";
import BotonBorrar from "./BotonBorrar.jsx";
import "../../styles/Home.css";
import uniqid from "uniqid";
import { AiOutlineDelete } from "react-icons/ai";

const Home = () => {
	// Estados: tareas y estado para saber si se ha borrado el servidor.

	const [tareas, setTareas] = useState([]);
	const [borrado, setBorrado] = useState(false);

	// Fetch API.

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jesus2", {
			method: "GET",
			ContentType: "application/json",
		})
			.then((resp) => resp.json())
			.then((data) => {
				data = data.map((tarea) => tarea.label);
				data = data.map((tarea) => {
					tarea = {
						id: uniqid("tarea-"),
						label: tarea,
						done: false,
					};
					return tarea;
				});
				setTareas(data);
			});
	}, []);

	useEffect(() => {
		console.log("post");
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jesus2", {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.catch((error) => console.error("Error:", error))
			.then((response) => console.log("Success:", response));
	}, []);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jesus2", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([...tareas]),
		})
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
			});
	}, [tareas]);

	// Fin Fetch API.

	// Funciones tareas: publicar, eliminar (solo una), completarla (tarea.done = true), borrar lista completa.

	const publicarTarea = (tarea) => {
		if (tarea.label && tarea.label.trim()) {
			setTareas([tarea, ...tareas]);
		}
	};
	console.log("iji");
	const eliminarTarea = (id) => {
		const tareasActualizadass = tareas.filter((tarea) => tarea.id !== id);
		setTareas(tareasActualizadass);
		setTareas(tareas.filter((tarea) => tarea.id !== id));
	};

	const completar = (id) => {
		const tareasActualizadas = tareas.map((tarea) => {
			if (tarea.id === id) {
				tarea.done = !tarea.done;
			}
			return tarea;
		});
		setTareas((tarea) => (tarea = tareasActualizadas));
	};

	const borrarLista = () => {
		setBorrado(!borrado);
		console.log(borrado);
		borrado || setTareas([]);
	};

	// Fin funciones tareas.

	return (
		<div className="App">
			<div className="container-img-cabecera"></div>

			{/* Condición para borrar lista del servidor */}
			{borrado ? <BotonBorrar tareas={tareas} /> : null}

			{/* Div basura y lista de tareas  */}
			<div className="basura-y-lista">
				<div className="row">
					{/* Basura */}
					<div className="col-1 columna-borrar-servidor">
						<div className="borrar" onClick={borrarLista}>
							<AiOutlineDelete className="icono-borrar-todo" />
						</div>
					</div>

					{/* Lista de tareas */}
					<div className="col-11 columna-añadir-tarea">
						<div className="container-lista-tareas">
							<ListaTareas
								tareas={tareas}
								publicar={publicarTarea}
								eliminar={eliminarTarea}
								completar={completar}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
