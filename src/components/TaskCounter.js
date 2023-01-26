import React from 'react';
import '../styles/TaskCounter.css';
import { TaskContext } from './TaskContext';

function TaskCounter() {
    const { totalTasks, completedTasks } = React.useContext(TaskContext)
    const progress = (completedTasks / totalTasks) * 100
    const style = {
        'width': Math.round(progress) + '%'
    }
    return (
        <React.Fragment>
            <h1>Your Tasks</h1>
            <h2 className = "TaskCounter">You've completed {completedTasks} of {totalTasks} tasks</h2>
            <div className='ProgressBar'>
                <div className='ProgressBar-filled' style={style}>
                </div>
            </div>
        </React.Fragment>
    )
}

export { TaskCounter };