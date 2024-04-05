import { PrismaClient } from "@prisma/client";
import NoteModal from "@/app/components/modal";
import Todo from "@/app/components/Todo";
import ChangeTodo from "@/app/components/ChangeItem";
import { CompactTable } from '@table-library/react-table-library/compact';
import DeleteTodo from "./components/DeleteItem";
import EditTodo from "./components/WithdrawItem";
import AddItem from "./components/AddItem";
import * as React from 'react';
import { DataGrid,GridToolbar} from "@mui/x-data-grid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { object, string, TypeOf } from "zod";
import Modal from "@/app/components/modal";
const prisma = new PrismaClient();
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "ItemCode",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "name",
      headerName: "Product Name",
      flex: 1,
    },
    {
      field: "price",
      headerName: "price",
      flex: 1,
    },
   
    {
      field: "amount",
      headerName: "quantity",
      flex: 1,
    },
  ];

async function getData() {
 // const data = await prisma.product.findMany({
  const data=await prisma.product.findMany({
    select: {
      title: true,
      id: true,
      name:true,
      price:true,
      amount:true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
 
  return data;
}
const Home = async () => {
  const data = await getData();
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <h1 className=" text-3xl font-extrabold mb-5" color="blue">
        
      Sample crud for Inventory Mgmt System
      </h1>
 
      <div className="flex justify-center flex-col items-center w-[1000px] ">
        <AddItem />
         
        <div className=" flex flex-col gap-5 items-center justify-center mt-10 w-full">
        <table  class="d">
          <tr>
          <td>SN</td>
          <td>ItemCode</td>
          <td>Item Name</td>
          <td>Price</td>
          <td>Amaunt</td>
          <td>Action</td>
          </tr>
          {data.map((item, id) => (
                  <tr><td>{item.id}</td>
                  <td>{item.title}</td>
                  {/* <td><AddTodo/> */}
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.amount}</td>
                  {/* </td> */}
                  <td><Todo item={item}/></td>
                    </tr>
          ))}
          </table>
          {/* <DataGrid   rows={data} columns={columns} /> */}
       
        </div>
      </div>
    </div>
  );
};
 
export default Home;