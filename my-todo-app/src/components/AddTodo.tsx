export default function AddTodo({
  addTodo,
  setTodoTextHandler,
  todoText,
}: {
  addTodo: () => void;
  setTodoTextHandler: (text: string) => void;
  todoText: string;
}) {
  return (
    <div className="flex justify-center m-2 p-2 border-2 rounded-lg drop-shadow-lg">
      <input
        className="border-2 rounded-s-lg w-full"
        value={todoText}
        type="text"
        onChange={(e) => {
          setTodoTextHandler(e.target.value);
        }}
      />
      <button onClick={addTodo} className="border-2 rounded-e-lg px-9">
        Add
      </button>
    </div>
  );
}
