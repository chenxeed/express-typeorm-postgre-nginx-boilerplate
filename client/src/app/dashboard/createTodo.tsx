"use client"

import { client } from "@/apollo-client";
import { useMutation } from "@apollo/client";
import React, { FormEvent } from "react";
import { CREATE_TODO, GET_TODOS } from "./graph";
import { Todo } from "./types";

export function CreateTodo() {
  
  const [createTodo] = useMutation(CREATE_TODO, {
    client,
    refetchQueries: [GET_TODOS, 'GetTodos'],
  });
  
  async function onSubmitTodo (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);
    const result = await createTodo({ variables: { title: formData.get('title'), description: '' } });
    if (result.data) {
      currentTarget.reset();
    }
  }

  return (<div className="mb-4">
      <h1 className="text-grey-darkest">Todo List</h1>
      <div className="flex mt-4">
        <form className="flex w-full" onSubmit={onSubmitTodo}>
          <input className="flex-grow shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" name="title" />
          <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit">Add</button>
        </form>
      </div>
  </div>);
}
  