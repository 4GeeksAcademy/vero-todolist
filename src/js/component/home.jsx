import React, { useState } from "react";


//create your first component
const Home = () => {
	//declaracion de estados
	let [tarea, setTarea] = useState("")
	let [lista, setLista] = useState([])


	const agregarTarea = () => {
		if (tarea.trim() !== "") {
			const nuevaLista = {
				id: tarea.length + 1,
				texto: tarea,
				completada: false
			};

			setLista([...lista, nuevaLista]);
			setTarea("");
		}
	}
	const eliminarTarea = (id) => {
		setLista(lista.filter(elemento => elemento.id !== id));

	}

	return (


		<div className="container">
			<div className="text-center">
				<label htmlFor="inputValue" className="form-label fs-1 text-secondary">todos</label>
				<div className="d-flex">
					<input type="text" id="inputValue" className="form-control fs-3" value={tarea} onChange={(e) => setTarea(e.target.value)} onKeyDown={(e) => e.key == "Enter" && agregarTarea()} />
					<button type="button" className="btn btn-primary" onClick={agregarTarea}>Agrgar a la lista</button>

				</div>
				<div id="passwordHelpBlock" className="form-text">
					<ul>
						{lista.map(item => (
							<li key={item.id}>
								<span >{item.texto}</span>
								<button className="btn btn-ligth" onClick={() => eliminarTarea(item.id)}>x</button>

							</li>
						))}


					</ul>
				</div>

			</div>
		</div>
	);
};

export default Home;
