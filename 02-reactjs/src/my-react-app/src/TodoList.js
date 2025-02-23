import React, { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    
    const addTodo = () => {
        if (newTodo.trim() === "") return; 
        setTodos([...todos,newTodo]);
        setNewTodo(""); 
    };

    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };
    
    return (
        <div>
            <h2>Daftar Tugas</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Tambahkan tugas baru"
            />
            <button onClick={addTodo}>Tambah</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)} style={{ marginLeft: "10px" }}>
                            Hapus
                        </button>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default TodoList;
