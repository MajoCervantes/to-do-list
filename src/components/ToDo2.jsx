import React, { useState } from "react"

//Icons
import { RiCloseCircleLine } from "react-icons/ri"
import { TiEdit } from "react-icons/ti"
import { BsCheck2All } from "react-icons/bs"
import { BiReset } from "react-icons/bi"

//Components
import ToDoForm from "./ToDoForm"

const ToDo2 = ({
	todo,
	index,
	deletedTodos,
	completeTodo,
	removeTodo,
	updateTodo,
}) => {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	})

	const submitUpdate = (value) => {
		updateTodo(edit.id, value)
		setEdit({
			id: null,
			value: "",
		})
	}

	if (edit.id) {
		return (
			<ToDoForm
				edit={edit}
				onSubmit={submitUpdate}
			/>
		)
	}

	return (
		<div
			className={
				todo.isComplete
					? "todo-row complete"
					: "todo-row"
			}
			key={index}>
			<div key={todo.id} className='tasks'>
				{todo.text}
			</div>
			<div className='icons-container'>
				{todo.isComplete ? (
					<>
						<BiReset
							onClick={() =>
								completeTodo(todo.id)
							}
							className='edit-icon'
						/>
					</>
				) : (
					<>
						<BsCheck2All
							onClick={() =>
								completeTodo(todo.id)
							}
							className='edit-icon'
						/>
					</>
				)}
				<RiCloseCircleLine
					onClick={() => removeTodo(todo.id)}
					className='delete-icon'
				/>
				<TiEdit
					onClick={() =>
						setEdit({
							id: todo.id,
							value: todo.text,
						})
					}
					className='edit-icon'
				/>
			</div>
		</div>
	)
}

export default ToDo2
