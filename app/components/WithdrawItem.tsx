//components\EditTodo.tsx
"use client";
 
import { edit } from "@/app/actions/route";
import Form from "@/app/components/Form";
import { useState } from "react";
import { todoType } from "@/app/types/todoTypes";
 
const WithdrawItem = ({ item }: { item: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);
 
  const handleEdit = () => {
    setEditTodo(!editTodo);
  };
 
  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
     <div className="flex gap-5 items-center">
       <button onClick={handleEdit} className="btn btn-success">Edit </button>
 
      {editTodo ? (
         <Form action={edit} onSubmit={handleSubmit}>
           <input
            name="inputId"
            value={item.id}
            type="hidden"
          />
           <div className="flex justify-center">
             <input type="text" placeholder="Item Code..." 
              name="item"
              className="input input-bordered input-success w-full max-w-xs" />
             <input type="text" placeholder="amount..."
             name="amaunt"
             className="input input-bordered input-success w-full max-w-xs" />
             <button type="submit" className="btn btn-success">Save </button>
           </div>
         </Form>
      ) : null}
     </div>
  );
};
 
export default WithdrawItem;