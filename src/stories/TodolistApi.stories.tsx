import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { todoListApi } from '../api/todoListApi';

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
      todoListApi.getTodoLists().then((res) => {setState(res.data)});
   }, [])

   return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
   const [state, setState] = useState<any>(null);

   useEffect(() => {
      todoListApi.createTodoList().then((response) => {
         setState(response.data);
      });
   }, [])

   return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
   const [state, setState] = useState<any>(null);

   useEffect(() => {
      todoListApi.deleteTodoList().then((response) => {
         setState(response.data);
      });
   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      todoListApi.updateTodoList().then((responce) => {
         setState(responce.data);
      });
   }, [])

   return <div> {JSON.stringify(state)}</div>
}
