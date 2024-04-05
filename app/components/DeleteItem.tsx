"use client";
 
import { deleteTodo } from "@/app/actions/route";
//import Form from "@/components/Form";

import Form from "@/app/components/Form";
import { todoType } from "@/app/types/todoTypes";
 
const DeleteItem = ({ item }: { item: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <input type="hidden" name="inputId" value={item.id} />
      <button type="submit" className="btn btn-error">Delete</button>
    </Form>
  );
};
 
export default DeleteItem;