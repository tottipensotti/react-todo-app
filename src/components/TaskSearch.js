import React from 'react';
import '../styles/TaskSearch.css';
import { TaskContext } from './TaskContext';

function TaskSearch() {
    const { searchValue, setSearchValue } = React.useContext(TaskContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }
    
    return (
        <React.Fragment>
        <div className="SearchBarContainer">
            <input
                className="TaskSearch"
                placeholder="Search task..."
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </div>
        </React.Fragment>
    )
};
export { TaskSearch };