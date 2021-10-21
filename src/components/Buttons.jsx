import React from "react"

const Buttons = ({
	changeView,
	changeView2,
	changeView3,
	changeView4,
}) => {
	return (
		<div className='buttons-container'>
			<button
				className='todos-buttons'
				onClick={changeView}>
				Todas las tareas
			</button>
			<button
				className='todos-buttons'
				onClick={changeView2}>
				Tareas incompletas
			</button>
			<button
				className='todos-buttons'
				onClick={changeView3}>
				Tareas completadas
			</button>
			<button
				className='todos-buttons'
				onClick={changeView4}>
				Basura
			</button>
		</div>
	)
}

export default Buttons
