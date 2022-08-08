import {changeTodoStatus, createTodo, deleteTodo, getTodoDetails, getTodos} from "../../components/todoApi";

export const SET_TODOS = '[ToDo] set todos';
export const ADD_TODO = '[ToDo] add todo';
export const DELETE_TODO = '[ToDo] delete todo';
export const UPDATE_TODOS = '[ToDo] update todos';

export function setTodosAction(todos) {
    return {
        type: SET_TODOS,
        payload: todos,
    }
}

export function addTodoAction(todo) {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}

export function deleteTodoAction(id) {
    return {
        type: DELETE_TODO,
        payload: id,
    }
}

export function updateTodosAction(todos) {
    return {
        type: UPDATE_TODOS,
        payload: todos,
    }
}


// Thunk creator
export function fetchTodosAction() {
    return async function (dispatch) {
        try {
            const todos = await getTodos();

            dispatch(setTodosAction(todos));
        } catch (e) {
            console.warn(e);
        }
    }
}

export function deleteTodoRequestAction(id) {
    return async function (dispatch) {
        try {
            await deleteTodo(id);

            dispatch(deleteTodoAction(id));
        } catch (e) {
            console.warn(e);
        }
    }
}

export function addTodoRequestAction(todo) {
    return async function (dispatch) {
        try {
            const newTodo = await createTodo(todo);

            dispatch(addTodoAction(newTodo));
        } catch (e) {
            console.warn(e);
        }
    }
}

export function changeTodoStatusRequestAction(id) {
    return async function (dispatch, getState) {
        try {
            const {todos} = getState();
            const todo = todos.find(todo => todo.id === id);
            const updatedTodo = {...todo, status: !todo.status}

            await changeTodoStatus(id, updatedTodo);
            dispatch(updateTodosAction(updatedTodo));
        } catch (e) {
            console.warn(e);
        }
    }
}

export function getTodoDetailsAction(id) {
    return async function () {
        try {
            return getTodoDetails(id);
        } catch (e) {
            console.warn(e);
        }
    }
}