import React from 'react';
import { TaskContext } from './TaskContext';
import '../styles/TaskForm.css';

function TaskForm() {
    const [ newTaskValue, setNewTaskValue ] = React.useState('');
    const {
        addTask,
        setOpenModal
    } = React.useContext(TaskContext)
    
    const onChange = (event) => {
        setNewTaskValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Create a new task!</label>
            <textarea
                value={newTaskValue}
                onChange={onChange}
                placeholder='Write your new task'
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type='submit'
                    className="TodoForm-button TodoForm-button--add"
                >Add Task</button>
                <button
                    type='button'
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >Cancel</button>
            </div>
        </form>
    )
}

export { TaskForm };