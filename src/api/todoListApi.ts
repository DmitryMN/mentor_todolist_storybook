import axios from "axios";

 
const baseURL = "https://social-network.samuraijs.com/api/1.1";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1",
    withCredentials: true,
    headers: {
       'API-KEY': "a8d9924c-0a09-4a81-9c01-6763abfe8005"
    }
 });

 type TodolistType = {
     id: string
     title: string
     addedDate: string
     order: number
 }

 type ResponseType<T> = {
     data: T
     messages: Array<string>
     fieldsErrors: Array<string>
     resultCode: number
 }

 export const todoListApi = {
     getTodoLists() {        
         return instance.get<Array<TodolistType>>("/todo-lists");
     },
     createTodoList() {
         return instance.post<ResponseType<{item: TodolistType}>>("/todo-lists", {title: "NewTodoList1"});
     },
     updateTodoList() {
         const id = "a1e2aaa6-2ab6-4819-917c-0996e5967c02"; 
         return instance.put<ResponseType<{}>>(`/todo-lists/${id}`, {title: "MyTodoList2"});
     },
     deleteTodoList() {
        const id = "a1e2aaa6-2ab6-4819-917c-0996e5967c02"; 
         return instance.delete<ResponseType<{}>>(`/todo-lists/${id}`);
     }
 }