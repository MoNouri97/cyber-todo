import { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    const todo = {
      value: newTodo,
      id: Math.random() * 1000,
      isCompleted: false,
    };

    setTodos([...todos, todo]);
  }
  const handleToggle = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo;
    });



    setTodos(updatedTodos);
  }

  useEffect(() => {
    if (!todos.length) {
      return;
    }

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos') ?? []));
    // [] means on mount, on start
  }, []);

  // useEffect(() => {
  //   return () => {
  //     // this will be executed on unmount / on exit
  //   }
  // }, []);


  return (
    <>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleToggle={handleToggle} />
    </>
  )
}

export default App;
