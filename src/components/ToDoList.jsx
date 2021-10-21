import React, { useState, useEffect } from "react"

//Components
import ToDoForm from "./ToDoForm"
import ToDo from "./ToDo"
import ToDo2 from "./ToDo2"
import ToDo3 from "./ToDo3"
import Buttons from "./Buttons"

const ToDoList = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: "Sacar la basura",
			isComplete: false,
		},
	])
	const [todos2, setTodos2] = useState([])
	const [todos3, setTodos3] = useState([])
	const [deletedTodos, setDeletedTodos] =
		useState()
	const [view, setView] = useState(true)
	const [view2, setView2] = useState(false)

	useEffect(() => {
		let data = localStorage.getItem("tasks")
		if (data !== null) {
			setTodos(JSON.parse(data))
		} else {
			setTodos([
				{
					id: 1,
					text: "Sacar la basura",
					isComplete: false,
				},
			])
		}
	}, [])

	useEffect(() => {
		localStorage.setItem(
			"tasks",
			JSON.stringify(todos)
		)
	}, [todos])

	useEffect(() => {
		let data = localStorage.getItem("trash")
		if (data !== null) {
			setDeletedTodos(JSON.parse(data))
		} else {
			setDeletedTodos([
				{
					id: 2,
					text: "Pasear perros",
					isComplete: true,
				},
			])
		}
	}, [])

	useEffect(() => {
		localStorage.setItem(
			"trash",
			JSON.stringify(deletedTodos)
		)
	}, [deletedTodos])

	const addTodo = (todo) => {
		if (
			!todo.text ||
			todos.map((t) => t.text === todo.text) ||
			/^\s*$/.test(todo.text)
		) {
			alert("No has ingresado texto")
			return
		}

		const newTodos = [todo, ...todos]

		setTodos(newTodos)
	}

	const updateTodo = (todoId, newValue) => {
		if (
			!newValue.text ||
			/^\s*$/.test(newValue.text)
		) {
			return
		}

		setTodos((prev) =>
			prev.map((item) =>
				item.id === todoId ? newValue : item
			)
		)
	}

	const removeTodo = (id) => {
		const deletedItems = todos.find(
			(t) => t.id === id
		)
		setDeletedTodos([
			...deletedTodos,
			deletedItems,
		])
		const removeTest = [...todos].filter(
			(todo) => todo.id !== id
		)
		setTodos(removeTest)
	}

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete
			}
			return todo
		})
		setTodos(updatedTodos)
	}

	const changeView = () => {
		setView(true)
	}

	const changeView2 = () => {
		setTodos2(
			todos.filter(
				(todo) => todo.isComplete === false
			)
		)
		setView(false)
		setView2(true)
	}

	const changeView3 = () => {
		setTodos2(
			todos.filter(
				(todo) => todo.isComplete === true
			)
		)
		setView(false)
		setView2(true)
	}

	const changeView4 = () => {
		setTodos3(deletedTodos)
		setView(false)
		setView2(false)
	}
	console.log(todos3)

	return (
		<>
			<div className='global-container'>
				<h1>Tu lista de tareas</h1>
				<h3 className='completed-todos'>
					{
						todos.filter((t) => t.isComplete)
							.length
					}
					/ {todos.length}
				</h3>

				<ToDoForm
					onSubmit={addTodo}
					todos={todos}
				/>

				{view ? (
					todos.map((todo, index) => (
						<ToDo
							todo={todo}
							index={index}
							key={todo.id}
							completeTodo={completeTodo}
							removeTodo={removeTodo}
							updateTodo={updateTodo}
						/>
					))
				) : view2 ? (
					todos2.map((todo, index) => (
						<ToDo2
							todo={todo}
							index={index}
							key={todo.id}
							deletedTodos={deletedTodos}
							completeTodo={completeTodo}
							removeTodo={removeTodo}
							updateTodo={updateTodo}
						/>
					))
				) : (
					<ToDo3
						// key={dt.id}
						// dt={dt}
						deletedTodos={deletedTodos}
						setDeletedTodos={setDeletedTodos}
					/>
				)}
			</div>
			<div className='global-buttons-container'>
				<Buttons
					changeView={changeView}
					changeView2={changeView2}
					changeView3={changeView3}
					changeView4={changeView4}
				/>
			</div>
		</>
	)
}

export default ToDoList
