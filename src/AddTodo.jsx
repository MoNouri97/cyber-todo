import { useState } from 'react';

const AddTodo = ({ handleAddTodo }) => {
	const [state, setState] = useState('');

	const handleChange = (event) => {
		setState(event.currentTarget.value);
	};

	return (
		<div style={{ padding: 10 }}>
			<input
				name='todo'
				value={state}
				onChange={handleChange}
			/>
			<button
				style={{
					padding: 5,
					background: 'tomato',
					color: 'white',
					borderRadius: '5px',
					border: 'none',
					marginLeft: 5,
				}}
				onClick={() => {
					handleAddTodo(state);
					setState('');
				}}
			>
				Add
			</button>
		</div>
	)
}

export default AddTodo;