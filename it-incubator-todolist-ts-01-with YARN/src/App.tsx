import React, {useState} from 'react';
import './App.css';
import {TodoList} from './TodoList';

export type FilterType="ALL" |'Active'|'Completed'

function App() {
    // const tasks1 = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "React", isDone: false},
    // ]
    const [tasks, setTask] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ])

    const removeTask = (taskID: number) => {
        setTask(tasks.filter(f => f.id !== taskID))
    }

    const [filter, setFilter] = useState<FilterType>('ALL')

    const filteredtasks = (filterValue: FilterType) => {
        setFilter(filterValue)

    }
    let filteredT = tasks
    if (filter === 'Active') {
        filteredT=tasks.filter(f => !f.isDone)
    }
    if (filter === 'Completed') {
        filteredT=tasks.filter(f => f.isDone)
    }

    return (
        <div className="App">
            <TodoList title={'what is'} tasks={filteredT} removeTask={removeTask} filteredtasks={filteredtasks}/>
        </div>
    );
}
////ffffffff
export default App;
