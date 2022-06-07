import React, { useState, useEffect } from "react";
// import Foto4Geeks from "../src/imgs/Foto4Geeks.png";
import ListaTareas from "./ListaTareas.jsx";
import "../../styles/Home.css";
import uniqid from "uniqid";
//create your first component

const Home = () => {
	const [tareasFetch, setTareasFetch] = useState([]);
	const [tareas, setTareas] = useState([]);
	const [tareas2, setTareas2] = useState([]);

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

	let e = { id: "ijiji", label: "aprender a usar la vida", done: false };
	let a = tareas.map((tareas) => tareas);

	console.log("a", a);
	console.log("e", e);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jesus2", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([
				{ label: "aprender a usar React", done: false },
				{ label: "aprender a usar Fetch", done: false },
				{ label: "aprender a usar la vida", done: false },
				a,
			]),
		})
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
			});
	}, []);

	console.log("oi", a);

	const publicarTarea = (tarea) => {
		if (tarea.label && tarea.label.trim()) {
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
				tarea.done = !tarea.done;
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
