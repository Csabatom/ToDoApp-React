import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            isComplete: false
        });

        setInput('');
    };

    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
            <div className="col-sm-8 m-1">
                <div className="input-group">
                    <form className="todo-form input-group" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Feladat leírása" value={input} className="todo-input form-control" onChange={handleChange}></input>
                        <button className="todo-submit btn btn-primary">Létrehozás</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default TodoForm
