//app/actions/route.ts
"use server";
//import { revalidatePath } from "next/cache";
import  {prisma}  from "@/app/utils/prisma";
 
export async function create(formData: FormData) {
  const input = formData.get("input") as string;
  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const amount = formData.get("amount") as string;
//   const input = formData.get("input") as string;
 
  if (!input.trim()) {
    return;
  }
  const rest=await prisma.product.findFirst({where:{title:input}});
  if(!rest){
  await prisma.product.create({
    data: {
      title: input,
     name:name,
      price:parseFloat(price),
      amount:parseInt(amount),
    },
  });
}else{
  const am=rest.amount+parseInt(amount);
  await prisma.product.update({
    where: {
      id: rest.id,
    },
    data: {
  
      amount:am,
    },
  });

}
  //revalidatePath("/");
}
 
export async function edit(formData: FormData) {
  const input = formData.get("item") as string;
  const inputId = formData.get("inputId") as string;
  const amount = formData.get("amaunt") as string;
 
  const id = parseInt(inputId);
 const rest=await prisma.product.findUnique({where:{id:id}});
 if(rest){
 const am=rest.amount-parseInt(amount);
  await prisma.product.update({
    where: {
      id: id,
    },
    data: {
      title: input,
      amount:am,
    },
  });
}else{
    console.log("no record")
}
 
  //revalidatePath("/");
}
 
export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;
 
  const id = parseInt(inputId);
 
  await prisma.product.delete({
    where: {
      id: id,
    },
  });
 
}
 
 
export async function todoStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const id = parseInt(inputId);
  const result = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  if (!result) {
    return;
  }
 
  const updatedStatus = !result.isCompleted;
 
  await prisma.product.update({
    where: {
      id: id,
    },
    data: {
      isCompleted: updatedStatus,
    },
  });
 
  //revalidatePath("/");
 
  return updatedStatus;
}