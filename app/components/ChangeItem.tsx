//components\ChangeTodo.tsx
import { todoStatus } from "@/app/actions/route";
import Form from "@/app/components/Form";
import { todoType } from "@/app/types/todoTypes";
 
const ChangeItem = ({ item }: { item: todoType }) => {
  return (
    <Form action={todoStatus}>
      <input
        name="inputId"
        value={item.id}
        className="border-gray-700 border"
        type="hidden"
      />
      <button type="submit" className="btn btn-info">Done</button>
    </Form>
  );
};
 
export default ChangeItem;