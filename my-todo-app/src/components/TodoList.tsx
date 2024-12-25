import { TodoInterface } from "@/app/types/ITodo";
import TodoItem from "@/components/TodIItem";
import React from "react";

export default function TodoList({
  todos,
  selectedtab,
  onToggle,
  removeTodo,
}: {
  todos: TodoInterface[];
  selectedtab: string;
  onToggle: (id: number) => void;
  removeTodo: (id: number) => void;
}) {
  const filteredTodos =
    selectedtab === "All"
      ? todos
      : selectedtab === "Completed"
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed);
  return (
    <div>
      {filteredTodos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            onToggle={onToggle}
            removeTodo={removeTodo}
          />
        );
      })}
    </div>
  );
}
