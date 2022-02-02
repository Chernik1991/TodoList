import React from "react";

type PropsType = {
    title: string;
    tasks: Array<TaskType>
    removeTasks:(taskId:number)=>void
}
type TaskType = {
    id: number,
    title: string,
    isDone: boolean

}
export const TodoList = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((m, index) => {
                    return (
                        <li key={m.id}>
                            <button onClick={(event)=>props.removeTasks(m.id)}>X</button>
                            <input type="checkbox" checked={m.isDone}/>
                            <span>{m.title}</span>
                        </li>
                    )
                })}

                {/*    <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
                {/*    <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                {/*    <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>

    )
}

