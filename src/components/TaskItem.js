import React from 'react';
import '../styles/TaskItem.css';

function TaskItem({ text, isCompleted, completeTask, deleteTask }) {
    return (
        <li className='TaskItem'>
            <span className={`Icon Icon-check ${isCompleted && 'Icon-check--active'}`}>
                <i className="large material-icons" onClick={completeTask}>done</i>
            </span>
            <p className={`TaskItem-p ${isCompleted && 'TaskItem-p--complete'}`}>{text}</p>
            <span className='Icon Icon-delete'>
                <i className="large material-icons" onClick={deleteTask}>delete</i>
            </span>
        </li>
    )
};

export { TaskItem };