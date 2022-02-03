import React from 'react';
import './App.css';
import {ObjectofArray, TodoList} from './TodoList';

function App() {
    const tasks1:Array<ObjectofArray> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: true},
    ]
    const tasks2:Array<ObjectofArray> = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false},
    ]
    return (
        <div className="App">
            <TodoList title = {"what is"} tasks={tasks1}/>
            <TodoList title = {"this is"} tasks={tasks2}/>
        </div>
    );
}

export default App;
