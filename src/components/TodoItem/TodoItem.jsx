import './TodoItem.css';
import {Link} from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';

function TodoItem({todo, onChangeStatus, onDelete}) {
    return (
        <li className={todo.status ? 'done' : ''}>
            <Link className="todo-item" to={`todo-details/${todo.id}`}>
                <span>{todo.task}</span>
            </Link>
            <div className="btn-group">
                <ListItemButton type="button" onClick={() => onChangeStatus(todo.id)}>Change status</ListItemButton>
                <ListItemButton type="button" onClick={() => onDelete(todo.id)}>Delete</ListItemButton>
            </div>
        </li>
    )
}

export default TodoItem;