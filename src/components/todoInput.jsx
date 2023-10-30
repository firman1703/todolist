
import React, { useState } from "react";

function TodoInput({ setTodos, editingTodo, setEditingTodo }) {
    const [inputText, setInputText] = useState("");

    function handleInput(e) {
        setInputText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!inputText) {
            return alert('Todo cannot be empty')
        }

        if (editingTodo) {
            const updatedTodos = setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === editingTodo.id ? { ...todo, text: inputText } : todo
                )
            );
            setEditingTodo(null);
        } else {
            setTodos((prevTodos) => [
                ...prevTodos,
                {
                    id: prevTodos.length + 1,
                    text: inputText,
                    isCompleted: false,
                },
            ]);
        }

        setInputText("");
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex items-center">
            <input
                type="text"
                value={inputText}
                onChange={handleInput}
                className="block w-[350px] rounded-md m-2 border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <button
                type="submit"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
                {editingTodo ? 'Update' : 'Add'}
            </button>
        </form>
    );
}

export default TodoInput;