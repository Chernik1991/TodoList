import React from 'react';
import './App.css';
import {TodoList} from './TodoList';

function App() {
    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]

    const removeTasks = (taskId:number)=>{
        console.log(taskId)
    }
    return (
        <div className="App">
            <TodoList
                title={"what is"}
                tasks={tasks1}
                removeTasks={removeTasks}/>
        </div>
    );
}

export default App;
