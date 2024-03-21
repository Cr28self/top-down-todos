import { useState } from "react";

type TodoCellProps = {

  key:number;
        id: number;
        title: string;
        completed: boolean;
        children: false|TodoCellProps[];
};
const TodoCell = ({ todoTree }: TodoCellProps) => {
  const [open, setOpen] = useState(false);

  console.log(todoTree)
  const openHandler = () => {
    if (open) {
      console.log("open");
    } else {
      console.log("not open");
    }
    setOpen(!open);
  };
  return (
    <>
      <div
        className="group/item p-2  rounded-lg hover:opacity-25 hover:bg-slate-200 flex justify-between"
        onClick={openHandler}
      >
        {todoTree.title}
        <button className="invisible group-hover/item:visible">xss</button>
      </div>
      {/*{open && <TodoCell text={"2nd"} />}*/}
    </>
  );
};

export default TodoCell;
