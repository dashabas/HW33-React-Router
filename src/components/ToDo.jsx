import React, {useEffect} from 'react';
import TodoList from './TodoList/TodoList';
import TodoForm from './TodoForm/TodoForm';
import {useDispatch, useSelector} from 'react-redux';
import {
    addTodoRequestAction,
    changeTodoStatusRequestAction,
    deleteTodoRequestAction,
    fetchTodosAction,
} from '../store/actions';
import Container from '@mui/material/Container';

function ToDo() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodosAction());
    }, []);

    async function deleteTodoItem(id) {
        dispatch(deleteTodoRequestAction(id));
    }

    async function changeStatus(id) {
        dispatch(changeTodoStatusRequestAction(id));
    }

    async function addTodoItem(todo) {
        dispatch(addTodoRequestAction(todo));
    }

    return (
        <>
            <Container maxWidth="sm">
                <TodoForm onAddTodo={addTodoItem}/>
                <TodoList todos={todos} onChangeStatus={changeStatus} onDelete={deleteTodoItem}/>
            </Container>
        </>
    )
}

export default ToDo;