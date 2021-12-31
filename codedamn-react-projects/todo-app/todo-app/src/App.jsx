import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";

let globalId = 0;

function App() {
	const [task, setTask] = useState("");
	const [todos, setTodos] = useState([]);

	function createTodo(event) {
		event.preventDefault();
		setTodos((oldTodos) => {
			setTask("");
			return [...oldTodos, { todo: task, id: globalId++ }];
		});
	}
	function deleteItem(itemId) {
		setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemId));
	}
	// function tryToCheckForEnterKey(e) {
	// 	if (e.keyCode === 13) {
	// 		createTodo();
	// 	}
	// }

	return (
		<div>
			<h1>To Do App</h1>
			{/* <input
				onKeyDown={tryToCheckForEnterKey}
				type="text"
				value={task}
				onChange={(event) => {
					setTask(event.target.value);
				}}
			/>
			<button onClick={createTodo}>Create Todo</button> */}
			<form onSubmit={createTodo}>
				<input
					type="text"
					value={task}
					onChange={(event) => {
						setTask(event.target.value);
					}}
				/>
				<button type="submit">Create Todo</button>
			</form>
			<ul>
				{todos.map((item) => {
					return (
						<div key={item.id}>
							<li>{item.todo}</li>
							<button onClick={() => deleteItem(item.id)}>Delete</button>
						</div>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
