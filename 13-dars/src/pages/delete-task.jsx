import React from "react";  
import { useParams } from "react-router-dom";
import { TodoContextProvider } from "../context/todo-context/todo-context";

import { todoAction } from "../context/todo-context/todo-reducer";



export const DeleteTask = () => {
    const  {id} = useParams()
    const {data, dispatch } = React.useContext(TodoContextProvider);

    
    dispatch({
      type:todoAction.DELETE_TODO,
      value:{id}
    })
    return (
        <div>
          <h1>{data.todoList.map((item) => item.title)}</h1>
        </div>
      );
}