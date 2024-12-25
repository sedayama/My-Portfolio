import React from "react";

export default function Header({ totalTodos }: { totalTodos: number }) {
  return (
    <header className="w-full text-center py-4 flex flex-col gap-2">
      <h1 className="text-3xl md:text-4xl xl:text-6xl">My Todo Application</h1>
      <p className="text-md md:text-base xl:text-lg">
        You have {totalTodos} todos
      </p>
    </header>
  );
}
