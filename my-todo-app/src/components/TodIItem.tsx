import React, { useState } from "react";

export default function TodIItem({
  id,
  title,
  completed,
  onToggle,
  removeTodo,
}: {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number) => void;
  removeTodo: (id: number) => void;
}) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }
  return (
    <div className="w-full flex justify-between items-center p-2 broder-2">
      <label
        htmlFor="title"
        className={`w-full p-2 cursor-pointer border-b-2 shadow-lg rounded-lg ${
          isExpanded
            ? "overflow-visible texovoerflow-clip whitespace-normal"
            : "overflow-hidden text-overflow-ellipsis whitespace-nowrap"
        }`}
        onClick={toggleExpand}
      >
        {title}
      </label>
      <span className="flex  p-2 gap-2 self-start">
        <button onClick={() => onToggle(id)} className="self-start">
          {completed ? "Redo" : "Done"}
        </button>
        <button onClick={() => removeTodo(id)} className="self-start">
          Delete
        </button>
      </span>
    </div>
  );
}
