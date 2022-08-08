import {ADD_TODO, DELETE_TODO, SET_TODOS, UPDATE_TODOS} from "../actions";

const initialState = {
    todos: [],
}

export default function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case SET_TODOS:
            return {...state, todos: payload}
        case ADD_TODO:
            return {...state, todos: [...state.todos, payload]}
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== payload)}
        case UPDATE_TODOS:
            return {
                ...state, todos: state.todos.map((todo) => {
                    if (todo.id === payload.id) {
                        return payload;
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}