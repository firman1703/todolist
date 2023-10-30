// TodoListFilters.jsx
import React from "react";

function TodoListFilters({ filter, setFilter }) {
    return (
        <div className="flex gap-6 mx-2">
            <button className={` w-full  ${filter === 'all' ? ' border-b-2 border-black' : ''}`} onClick={() => setFilter("all")}>All</button>
            <button className={`w-full  ${filter === 'active' ? 'border-b-2 border-black' : ''}`} onClick={() => setFilter("active")}>Active</button>
            <button className={`w-full  ${filter === 'completed' ? 'border-b-2 border-black' : ''}`} onClick={() => setFilter("completed")}>Completed</button>
        </div>
    );
}

export default TodoListFilters;