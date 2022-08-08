import {useState} from 'react';
import './TodoForm.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TodoForm({onAddTodo}) {
    const [todo, setTodo] = useState({
        task: '',
        status: false,
    });

    function changeTodo(e) {
        setTodo({
                ...todo,
                [e.target.name]: e.target.value
            }
        )
    }

    function submitForm(e) {
        e.preventDefault();

        onAddTodo(todo);

        setTodo({
            task: '',
            status: false,
        });
    }

    return (
        <form onSubmit={submitForm}>
            <div className="input-area">
                <TextField
                    sx={{
                        marginRight: 2,
                    }}
                    id="outlined-name"
                    label="Write task"
                    color="success"
                    name="task"
                    type="text"
                    value={todo.task}
                    onChange={changeTodo}/>
                <Button variant="contained" color="success" type="submit">
                    Add Task
                </Button>
            </div>
        </form>
    )
}

export default TodoForm;