import { User } from "../User/entity";
import { Todo } from "./entity";

export const TodoSchema = `
extend type Query {
  todos: [Todo]
  todo(id: Int!): Todo!
}

extend type Mutation {
  createTodo(userId: Int!, title: String!, description: String): Todo!
}

type Todo {
  id: ID!
  title: String!
  description: String
  isCompleted: Boolean
  user: User
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

export const TodoUserResolver = {
  async todos(parent) {
    const result = await Todo.find({
      where: {
        user: {
          id: parent.id,
        },
      }
    })
    return result;
  }
}

export const TodoMutationResolver = {
  async createTodo(_, { userId, title, description }) {
    const user = await User.findOneBy({ id: userId });
    const todo = Todo.create({
      title,
      description,
      isCompleted: false,
      user: user,
    });
    await todo.save();
    return todo;
  }
};