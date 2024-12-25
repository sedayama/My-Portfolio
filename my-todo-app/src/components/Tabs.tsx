import { TodoInterface } from "@/app/types/ITodo";
import React from "react";

export default function Tabs({
  selectedtab,
  handleSelectTab,
  todos,
}: {
  selectedtab: string;
  handleSelectTab: (tab: string) => void;
  todos: TodoInterface[];
}) {
  const tabs = ["All", "Active", "Completed"];

  return (
    <div className="flex justify-around  border-b-2 md:justify-normal">
      {tabs.map((tab) => {
        const numberOfTodos =
          tab === "All"
            ? todos.length
            : todos.filter((todo) =>
                tab === "Active" ? !todo.completed : todo.completed
              ).length;
        return (
          <button
            onClick={() => handleSelectTab(tab)}
            key={tab}
            className={`w-full md:w-32 drop-shadow-md ${
              selectedtab === tab ? "bg-gray-400 font-semibold" : "bg-gray-200"
            }`}
          >
            {tab} ({numberOfTodos})
          </button>
        );
      })}
    </div>
  );
}
