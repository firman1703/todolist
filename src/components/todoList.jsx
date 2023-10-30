// TodoList.jsx
import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "./todoProvider";
import TodoInput from "./todoInput";
import TodoListItems from "./TodoListItems"; // Import komponen baru
import TodoListFilters from "./TodoListFilters"; // Import komponen baru

function TodoList() {
    const { todos, setTodos } = useContext(TodoContext);
    const [editingTodo, setEditingTodo] = useState(null);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        document.title = "todoList by Firman";
    }, []);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, [setTodos]);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function handleEdit(todo) {
        setEditingTodo(todo);
    }

    function handleDelete(todo) {
        const updatedTodos = todos.filter((tod) => tod.id !== todo.id);
        setTodos(updatedTodos);
        setEditingTodo(null);
    }

    function handleCheckboxChange(todo) {
        const updatedTodos = todos.map((t) =>
            t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
        );
        setTodos(updatedTodos);
    }

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') {
            return !todo.isCompleted;
        } else if (filter === 'completed') {
            return todo.isCompleted;
        } else {
            return true;
        }
    });

    return (
        <div className="flex-col space-y-7 p-10  my-16 mx-auto w-[500px] bg-purple-200 rounded-md shadow-md border-collapse border-2 border-brown shadow-2xl shadow-purple-600">
            <div className="flex justify-center text-3xl font-bold text-gray-500 hover:text-black cursor-default animate-bounce">
                <h1>todoList</h1>
            </div>
            <TodoInput setTodos={setTodos} editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
            <TodoListFilters filter={filter} setFilter={setFilter} />
            <TodoListItems
                todos={filteredTodos}
                handleCheckboxChange={handleCheckboxChange}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default TodoList;