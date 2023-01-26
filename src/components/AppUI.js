import React from 'react';
import { TaskContext } from './TaskContext';
import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskList';
import { TaskItem } from './TaskItem';
import { CreateTaskButton } from './CreateTaskButton';
import { Modal } from './Modal';
import { TaskForm } from './TaskForm';

function AppUI() {
    const {
        error,
        loading,
        style,
        searchedTasks,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal
    } = React.useContext(TaskContext)
    return (
        <React.Fragment>
            <TaskCounter />
            <TaskSearch />
            <TaskList>
                {error && <h3 style={style}>Something went wrong :(</h3>}
                {loading && <h3 style={style}>Loading your tasks, sit tight!</h3>}
                {(!loading && !searchedTasks.length) && <h3 style={style}>Add your first task!</h3>}
                {(!loading && searchedTasks.length) && <h3 style={style}>Time to complete your tasks!</h3>}
                
                {searchedTasks.map(task => (
                    <TaskItem
                        key = {task.text}
                        text = {task.text}
                        isCompleted = {task.completed}
                        completeTask = {() => completeTask(task.text)}
                        deleteTask = {() => deleteTask(task.text)}
                    />
                ))}
            </ TaskList>
            {openModal && (
                <Modal>
                    <TaskForm />
                </Modal>
            )}
            <CreateTaskButton 
                setOpenModal = {setOpenModal}
                openModal = {openModal}
            />
        </React.Fragment>
    )
}

export { AppUI };