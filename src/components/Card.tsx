
import TodoCell from "components/TodoCell.tsx";
import todos from "mock/todos.json";

const Card = () => {
  console.log(todos);

  return (
    <div className="w-full max-w-2xl mx-auto  flex flex-col gap-1 bg-white bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 min-h-80 rounded-lg p-4">
      {todos.map((todoTree)=>{
      return <TodoCell key={todoTree.id} todoTree={todoTree} />

      })}
    </div>
  );
};

export default Card;
