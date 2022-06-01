import React from "react";
// import Foto4Geeks from "../src/imgs/Foto4Geeks.png";
import ListaTareas from "./ListaTareas.jsx";
import "../../styles/Home.css";
//create your first component
const Home = () => {
	return (
		<div className="App">
			<div className="container-img-cabecera"></div>

			<div className="container-lista-tareas">
				<ListaTareas></ListaTareas>
			</div>
		</div>
	);
};

export default Home;
