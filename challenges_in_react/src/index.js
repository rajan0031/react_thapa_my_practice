import { createRoot } from 'react-dom/client';
import React from 'react';
// import CssModules from './components/css Modeules/CssModules';
// import TodoList from './components/TodoList';
// import { StrictMode } from 'react';
// import "."
import './index.css'
// import ReactIcons from './components/react icons/ReactIcons';
// import "./components/css Modeules"
// import Calc from './components/calculoter/Calc';
import Form from './components/Form/Form';
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Form />
    </React.StrictMode>
);