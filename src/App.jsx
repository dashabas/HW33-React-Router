import React from 'react';
import ToDo from './components/ToDo';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TodoDetails from './components/TodoDetails/TodoDetails';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<ToDo />} />
                <Route path="/todo-details/:id" element={<TodoDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;