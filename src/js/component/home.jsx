import React, { useState, useEffect } from "react";
// import Foto4Geeks from "../src/imgs/Foto4Geeks.png";
import ListaTareas from "./ListaTareas.jsx";
import "../../styles/Home.css";
//create your first component

const Home = () => {
	const [tareasFetch, setTareasFetch] = useState([]);
	const [tareas, setTareas] = useState([]);

	useEffect(() => {
		//codigo que voy a ejecutar
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jesus2", {
			method: "GET",
			ContentType: "application/json",
		})
			.then((resp) => resp.json())
			.then((data) => {
				data = data.map((tarea) => tarea.label);
				setTareasFetch(data);
				setTareas(data);
			});
	}, []);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jesus2", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([
				{ label: "aprender a usar React", done: false },
				{ label: "aprender a usar Fetch", done: false },
			]),
		})
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
			});
	}, []);

	const publicarTarea = (tarea) => {
		if (tarea.texto && tarea.texto.trim()) {
			setTareas([tarea, ...tareas]);
		}
	};

	const eliminarTarea = (id) => {
		const tareasActualizadass = tareas.filter((tarea) => tarea.id !== id);
		setTareas(tareasActualizadass);

		setTareas(tareas.filter((tarea) => tarea.id !== id));
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
		<div className="App">
			<div className="container-img-cabecera"></div>

			<div className="container-lista-tareas">
				{/* <ListaTareas></ListaTareas> */}
				<ListaTareas
					tareas={tareas}
					tareasImportadas={tareasFetch}
					publicar={publicarTarea}
					eliminar={eliminarTarea}
					completar={completar}
				/>
			</div>
		</div>
	);
};

export default Home;
