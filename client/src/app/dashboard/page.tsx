import { CreateTodo } from './createTodo';
import { ShowTodos } from './showTodos';

export default async function Page() {

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <CreateTodo />
        <ShowTodos />
      </div>
    </div>
  );
}