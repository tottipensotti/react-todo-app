import React from 'react';
import '../styles/CreateTaskButton.css'

function CreateTaskButton({ openModal, setOpenModal }) {
    const onClickButton = () => {
        setOpenModal(prevState => !prevState)
    }
    
    
    return (
        <button className="CreateTaskButton" onClick={onClickButton}>
            +
        </button>
    )
};

export { CreateTaskButton };