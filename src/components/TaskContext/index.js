import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TaskContext = React.createContext()

function TaskProvider(props) {
    const {
        item: tasks,
        saveItem: saveTasks,
        loading,
        error
    } = useLocalStorage('TASKS_V1', []);
    const [ searchValue, setSearchValue ] = React.useState('');
    const [ openModal, setOpenModal ] = React.useState(false);


    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    
    const addTask = (text) => {
        const newTasks = [...tasks]
        newTasks.push({
            completed: false,
            text
        });
        saveTasks(newTasks);
    }

    const completeTask = (text) => {
        saveTasks(
            tasks.map(task => {
                if (task.text === text) {
                    task.completed ? task.completed = false : task.completed = true
                }
                return task
            })
        )
    }

    const deleteTask = (text) => {
        saveTasks(tasks.filter(task => task.text !== text))
    }

    let searchedTasks = [];
    if (searchValue.length < 1) {
        searchedTasks = tasks;
    } else {
        searchedTasks = tasks.filter(task => {
            const TaskText = task.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
            
            return TaskText.includes(searchText);
        })
    }

    const style = {
        color: 'white'
    }

    return (
        <TaskContext.Provider value={{
            loading,
            error,
            style,
            tasks,
            totalTasks,
            addTask,
            completedTasks,
            searchValue,
            setSearchValue,
            searchedTasks,
            completeTask,
            deleteTask,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}


export { TaskContext, TaskProvider };