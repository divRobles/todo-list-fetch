// import React, { useEffect } from "react";
// Hola

const BotonBorrar = ({ tareas }) => {
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jesus2", {
			method: "DELETE",
			ContentType: "application/json",
		});
	}, []);

	return <div className=""></div>;
};
export default BotonBorrar;
