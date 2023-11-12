"use client"

import { getClient } from "@/apollo-client";
import { useMutation } from "@apollo/client";
import React, { FormEvent } from "react";
import { CREATE_USER, GET_USERS } from "./graph";

export function CreateTodo() {
  
  const [createUser] = useMutation(CREATE_USER, {
    client: getClient(),
    refetchQueries: [GET_USERS],
  });
  
  async function onSubmitTodo (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await createUser({ variables: { firstName: formData.get('todo'), lastName: '' } });
    if (result.data) {
      e.currentTarget.reset();
    }
  }

  return (<div className="mb-4">
      <h1 className="text-grey-darkest">Todo List</h1>
      <div className="flex mt-4">
        <form onSubmit={onSubmitTodo}>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" name="todo" />
          <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit">Add</button>
        </form>
      </div>
  </div>);
}
  