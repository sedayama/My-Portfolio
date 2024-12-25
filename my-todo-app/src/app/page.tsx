"use client";
import React, { use, useEffect, useState } from "react";
import { TodoInterface } from "./types/ITodo";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";

export default function Home() {
  const [todos, setTodos] = useState<TodoInterface[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [{ id: 1, title: "Todo 1", completed: false }];
  });
  const [todoText, setTodoText] = useState<string>("");
  const [selectedtab, setSelectedTab] = useState<string>("All");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  function handleSetTodoText(todoText: string) {
    setTodoText(todoText);
  }
  function handleSelectTab(tab: string) {
    setSelectedTab(tab);
  }

  function addTodo() {
    setTodos([...todos, { id: Date.now(), title: todoText, completed: false }]);
    setTodoText("");
  }

  function onToggle(id: number) {
    console.log("toggle", id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function removeTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="md:w-[900px] md:min-w-96 flex flex-col mx-auto border-2 border-gray-600">
      <Header totalTodos={todos.length} />
      <Tabs
        selectedtab={selectedtab}
        handleSelectTab={handleSelectTab}
        todos={todos}
      />
      <TodoList
        todos={todos}
        selectedtab={selectedtab}
        onToggle={onToggle}
        removeTodo={removeTodo}
      />
      <hr className="shadow-sm" />
      <AddTodo
        addTodo={addTodo}
        todoText={todoText}
        setTodoTextHandler={handleSetTodoText}
      />
    </div>
  );
}
