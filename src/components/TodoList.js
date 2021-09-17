import React, {useState} from 'react'
import TodoCard from './TodoCard';
import TodoForm from './TodoForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }
    
    return (
        <div>
            <TodoForm onSubmit={addTodo} />
            <div id="content" className="mt-4 px-4">
                <TodoCard todos={todos} completeTodo={completeTodo} />
            </div>
        </div>
    )
}

export default TodoList
