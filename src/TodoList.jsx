const TodoList = ({ todos, handleToggle }) => {

	const todosLeft = todos.filter(todo => !todo.isCompleted).length;
	return (
		<>
			<div>you have {todosLeft} todos left</div>
			<ul>
				{
					todos.map(todo => (
						<li
							style={{
								listStyle: 'none',
								padding: 5,
								background: todo.isCompleted ? '#5de07e' : 'tomato',
								borderRadius: 10,
								margin: 5,
								color: 'white',
								cursor: 'pointer',
							}}
							onClick={() => handleToggle(todo.id)}
							key={todo.id}>
							{todo.value}
						</li>
					)
					)
				}
			</ul>
		</>
	);
}


export default TodoList;