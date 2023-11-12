import { CreateTodo } from './createTodo';
import { getClient } from "@/apollo-client";
import { gql } from "@apollo/client";
import { GET_USERS } from './graph';

type Repo = {
  firstName: string
  id: number
}

export const getUsers = (async () => {
  const client = getClient();
  const { data } = await client.query({
    query: GET_USERS,
  });

  return data.users as Repo[];
})

export default async function Page() {

  const users = await getUsers();

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <CreateTodo />
        <div>
          {users.map((datum: any) => (
            <div className="flex mb-4 items-center" key={datum.id}>
                <p className="w-full text-grey-darkest">{datum.firstName}</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
            </div>
          ))}
          </div>
        </div>
    </div>
  );
}