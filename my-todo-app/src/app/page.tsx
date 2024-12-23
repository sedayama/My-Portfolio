"use client";
import React, { useState } from "react";
import { TodoInterface } from "./types/ITodo";

export default function Home() {
  const [todos, setTodos] = useState<TodoInterface[]>([
    { id: 1, title: "Todo 1", completed: false },
  ]);
  const [todoText, setTodoText] = useState<string>("");

  function addTodo() {
    setTodos([...todos, { id: Date.now(), title: todoText, completed: false }]);
    setTodoText("");
  }

  function toggleCompleted(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function removeTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return <div>Home</div>;
}
