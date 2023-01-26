import React from 'react';
import '../styles/TaskList.css';

function TaskList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TaskList };