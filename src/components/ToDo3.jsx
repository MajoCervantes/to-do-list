import React from "react"

//Icons
import { RiCloseCircleLine } from "react-icons/ri"

const ToDo3 = ({
	deletedTodos,
	setDeletedTodos,
}) => {
	const eraseTodo = (id) => {
		const removeTest = [...deletedTodos].filter(
			(todo) => todo.id !== id
		)
		setDeletedTodos(removeTest)
	}
	return deletedTodos.map((dt, index) => (
		<div className={"todo-row"} key={index}>
			<div className='icons-container'>
				{dt.text}
			</div>
			<RiCloseCircleLine
				className='delete-icon'
				onClick={() => eraseTodo(dt.id)}
			/>
		</div>
	))
}

export default ToDo3
