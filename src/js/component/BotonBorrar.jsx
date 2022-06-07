import React, { useEffect } from "react";

const BotonBorrar = ({ tareas }) => {
	// const borrar = () => {
	// console.log("pppp");
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jesus2", {
			method: "DELETE",
			ContentType: "application/json",
		});
	}, []);
	// };
	return <div className=""></div>;
	// return { borrar };
};
export default BotonBorrar;
