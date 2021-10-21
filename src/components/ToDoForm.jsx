import React, {
	useState,
	useEffect,
	useRef,
} from "react"

const ToDoForm = ({ onSubmit, edit, todos }) => {
	const [input, setInput] = useState(
		edit ? edit.value : ""
	)

	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	})

	//Funciones
	const handleChange = (e) => {
		setInput(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
			isComplete: false,
		})
		setInput("")
	}

	return (
		<form
			className='todo-form'
			onSubmit={handleSubmit}>
			{edit ? (
				<>
					<input
						type='text'
						placeholder='Modificar tarea'
						value={input}
						name='text'
						onChange={handleChange}
						ref={inputRef}
						className='todo-input edit'
						autoComplete='off'
					/>
					<button
						onClick={handleSubmit}
						className='todo-button edit'>
						Modificar
					</button>
				</>
			) : (
				<>
					<input
						type='text'
						placeholder='Agregar tarea'
						value={input}
						name='text'
						onChange={handleChange}
						ref={inputRef}
						className='todo-input'
						autoComplete='off'
					/>
					<button
						onClick={handleSubmit}
						className='todo-button'>
						Agregar
					</button>
				</>
			)}
		</form>
	)
}

export default ToDoForm
