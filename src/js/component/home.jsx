import React, { useState, useEffect } from "react";
// import Foto4Geeks from "../src/imgs/Foto4Geeks.png";
import ListaTareas from "./ListaTareas.jsx";
import "../../styles/Home.css";
//create your first component

const Home = () => {
	const [tareasFetch, setTareasFetch] = useState([]);

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
				// data = data.map((tarea) => tarea.label);
				setTareasFetch(data);
			});
	}, []);

	return (
		<div className="App">
			<div className="container-img-cabecera"></div>

			<div className="container-lista-tareas">
				{/* <ListaTareas></ListaTareas> */}
				<ListaTareas tareasImportadas={tareasFetch}></ListaTareas>
			</div>
		</div>
	);
};

export default Home;
