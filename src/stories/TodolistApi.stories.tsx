import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default {
   title: 'API'
}

const baseUrl = "https://social-network.samuraijs.com/api/1.1";
const settings = {
   withCredentials: true,
   headers: {
      'API-KEY': "a8d9924c-0a09-4a81-9c01-6763abfe8005"
   }
}

export const GetTodolists = () => {
   const [state, setState] = useState<any>(null);

   useEffect(() => {
      axios.get(baseUrl + "/todo-lists", settings).then((res) => {setState(res.data)});
   }, [])

   return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
   const [state, setState] = useState<any>(null);

   useEffect(() => {
      axios.post(baseUrl + "/todo-lists", {title: "myTodoList1"}, settings).then((response) => {
         setState(response.data);
      });
   }, [])

   return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
   const [state, setState] = useState<any>(null);

   useEffect(() => {
      axios.delete(baseUrl+`/todo-lists/${"2b2f1845-fa3f-4218-ac30-059fc2eea76c"}`, settings).then((response) => {
         setState(response.data);
      });
   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
   }, [])

   return <div> {JSON.stringify(state)}</div>
}
