import axios from "axios";

 
const baseURL = "https://social-network.samuraijs.com/api/1.1";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1",
    withCredentials: true,
    headers: {
       'API-KEY': "a8d9924c-0a09-4a81-9c01-6763abfe8005"
    }
 });

 type GetTodoLIstApiType = {
     id: string
     title: string
     addedDate: string
     order: string
 }

 export const todoListApi = {
     getTodoLists() {          
         return instance.get<Array<GetTodoLIstApiType>>("/todo-lists");
     },
     createTodoList() {
         return instance.post("/todo-lists", {title: "NewTodoList1"});
     },
     updateTodoList() {
         const id = "dfe37d1e-27e0-4d15-89e8-e6a0589c4b42"; 
         return instance.put(`/todo-lists/${id}`, {title: "MyTodoList2"});
     },
     deleteTodoList() {
        const id = "dfe37d1e-27e0-4d15-89e8-e6a0589c4b42"; 
         return instance.delete(`/todo-lists/${id}`);
     }
 }