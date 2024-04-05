//components\Todo.tsx
import ChangeTodo from "./ChangeItem";
import EditTodo from "./WithdrawItem";
import DeleteTodo from "./DeleteItem";
import { todoType } from "@/app/types/todoTypes";
 
const Todo = ({ item }: { item: todoType }) => {
  
  return (
    <div
      className="w-full  flex items-center justify-between py-3 px-20 rounded-2xl"
      
    >
      {/* <h2 className="card-title">{todo.title}</h2> */}
      <div className="flex items-center gap-5">
        {/* <ChangeTodo item={item} /> */}
        <EditTodo item={item} />
        <DeleteTodo item={item} />
      </div>
    </div>
  );
};
 
export default Todo;