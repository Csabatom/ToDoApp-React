import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoCard({todos, completeTodo}) {
    return todos.map((todo, index) => (
        <div className="todo-background col-sm-12 mt-3 px-2 py-3 w-100" key={index}>
            <div className="verticallyAlignedCheckbox">
                <span><input id="checkbox" className="form-check-input" type="checkbox" value={todo.isComplete} key={todo.id} onClick={() => completeTodo(todo.id)}></input></span>
                <label className="form-check-label ps-2" htmlFor="checkbox" style={{opacity: todo.isComplete ? 0.6 : 1, textDecoration: todo.isComplete ? 'line-through' : ''}}>
                    {todo.text}
                </label>
            </div>
        </div>
    ))
}

export default TodoCard