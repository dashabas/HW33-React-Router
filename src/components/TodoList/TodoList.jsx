import TodoItem from '../TodoItem/TodoItem';
import List from '@mui/material/List';

function TodoList({todos, onChangeStatus, onDelete}) {
    return (
        <>
            <List>
                {
                    todos.map((todo) => {
                        return <TodoItem
                            todo={todo}
                            key={todo.id}
                            onDelete={onDelete}
                            onChangeStatus={onChangeStatus}/>
                    })
                }
            </List>
        </>
    )
}

export default TodoList;