import { Todo } from "./entity";

export const TodoSchema = `
extend type Query {
  todos: [Todo]
  todo(id: Int!): Todo!
}

extend type Mutation {
  createTodo(title: String!, description: String): Todo!
}

type Todo {
  id: ID!
  title: String!
  description: String
  isCompleted: Boolean
}
`;

export const TodoQueryResolver = {
  async todos() {
    const result = await Todo.find({
      order: {
        id: "DESC"
      }
    });
    return result;
  },
  async todo(_, { id }) {
    const result = await Todo.findOneBy({
      id
    });
    return result;
  },
};

export const TodoMutationResolver = {
  async createTodo(_, { title, description }) {
    const todo = Todo.create({
      title,
      description,
      isCompleted: false
    });
    await todo.save();
    return todo;
  }
};