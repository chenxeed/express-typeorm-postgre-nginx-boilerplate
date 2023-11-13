"use client"

import { client } from "@/apollo-client";
import React, { useEffect, useState } from "react";
import { GET_TODOS } from "./graph";
import { Todo } from "./types";

export const getTodos = (async () => {
  const { data } = await client.query({
    query: GET_TODOS,
  });

  return data.todos as Todo[];
})

export function ShowTodos() {
  
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (<div>
    {todos.map((datum: any) => (
      <div className="flex mb-4 items-center" key={datum.id}>
          <p className="w-full text-grey-darkest">{datum.title}</p>
          <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
          <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
      </div>
    ))}
  </div>);
}
  