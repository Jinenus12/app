//components\AddTodo.tsx
import { create } from "@/app/actions/route";
import Form from "@/app/components/Form";
 
const AddItem = () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <div className="loginCont">
        
      <input type="text" name="input" placeholder="Item code." className="input input-bordered input-success w-full max-w-xs" required/><br/>
       <input type="text" name="name" placeholder="Item Name ..." className="input input-bordered input-success w-full max-w-xs" required/><br/>
      <input type="number" name="price" placeholder="price..." className="input input-bordered input-success w-full max-w-xs" required/><br/>
      <input type="number" name="amount" placeholder="amount..." className="input input-bordered input-success w-full max-w-xs" /><br/>
        <button className="add" color="#bef264"
        >Add Item</button>
      </div>
    </Form>
  );
};
 
export default AddItem;