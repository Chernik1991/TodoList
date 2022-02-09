import React from "react";
import {FilterType} from './App';

type TodoListType ={
    title : string;
    tasks : Array<ObjectofArray>
    removeTask:(taskID:number)=>void
    filteredtasks:(filterValue:FilterType)=>void
}
type ObjectofArray = {
    id : number,
    title: string,
    isDone: boolean

}

export const TodoList = (props: TodoListType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((m: ObjectofArray, index) => {
                    return (
                            <li key={m.id}>
                                <button onClick={(event)=>props.removeTask(m.id)}>X</button>
                                <input type="checkbox" checked={m.isDone}/> <span>{m.title}</span></li>
                        )
                    })}
            </ul>
            <div>

                <button onClick={()=>props.filteredtasks('ALL')}>All</button>
                <button onClick={()=>props.filteredtasks('Active')}>Active</button>
                <button onClick={()=>props.filteredtasks('Completed')}>Completed</button>

            </div>
        </div>
    );
}
