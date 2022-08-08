import React, {useEffect, useState} from 'react';
import {Link as RouterLink, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getTodoDetailsAction} from '../../store/actions';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

function TodoDetails() {
    const [todo, setTodo] = useState({});
    let {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        async function getTodoInfo() {
            const todoInfo = await dispatch(getTodoDetailsAction(id));
            setTodo(todoInfo);
        }

        getTodoInfo();
    }, [id])

    return (
        <>
            <Container maxWidth="sm">
                <Link component={RouterLink} to="/" color="black" underline="black">BACK</Link>
                <h2>Details</h2>
                <p><strong>Task:</strong> {todo.task}</p>
                <p><strong>Status:</strong> {todo.status ? 'done' : 'not completed'}</p>
            </Container>
        </>
    )
}

export default TodoDetails;