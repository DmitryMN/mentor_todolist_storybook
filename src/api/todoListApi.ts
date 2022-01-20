import axios from "axios";
 
const baseURL = "https://social-network.samuraijs.com/api/1.1";

const settings = {
    withCredentials: true,
    headers: {
       'API-KEY': "a8d9924c-0a09-4a81-9c01-6763abfe8005"
    }
 }

 export const todoListApi = {
     getTodoLists() {
         return axios.get(baseURL + "/todo-lists", settings);
     },
     createTodoList() {
         return axios.post(baseURL + "/todo-lists", {title: "NewTodoList1"}, settings);
     },
     updateTodoList() {
         const id = "122670fa-dbef-4f2e-9a4f-bd14755d1f89"; 
         return axios.put(baseURL + `/todo-lists/${id}`, {title: "MyTodoList"}, settings);
     },
     deleteTodoList() {
        const id = "122670fa-dbef-4f2e-9a4f-bd14755d1f89"; 
         return axios.delete(baseURL + `/todo-lists/${id}`, settings);
     }
 }