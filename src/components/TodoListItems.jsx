import React from "react";

function TodoListItems({ todos, handleCheckboxChange, handleEdit, handleDelete }) {
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id} className="w-full flex items-center space-y-3 border-b-[1px] text-black justify-between">
                    <div>
                        <input
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => handleCheckboxChange(todo)}
                        />
                        <span className={`text-left ml-6 text-3xl  ${todo.isCompleted ? 'text-gray-500 line-through' : ''}`}>
                            {todo.text}
                        </span>
                    </div>
                    <div className="space-x-3">
                        <button className="text-xl" onClick={() => handleEdit(todo)}>✏️</button>
                        <button className="text-xl" onClick={() => handleDelete(todo)}>❎</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoListItems;