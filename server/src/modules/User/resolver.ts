import { User } from "./entity";

export const UserSchema = `
extend type Query {
  users: [User]
  user(id: Int!): User!
}

extend type Mutation {
  createUser(name: String!): User!
}

type User {
  id: ID!
  name: String!
  todos: [Todo]!
}
`;

export const UserQueryResolver = {
  async users() {
    const result = await User.find({
      order: {
        id: "DESC"
      }
    });
    return result;
  },
  async user(_, { id }) {
    const result = await User.findOneBy({
      id
    });
    return result;
  },
};

export const UserTodoResolver = {
  async user(parent) {
    const result = await User.findOneBy({ id: parent.userId });
    return result;
  }
}

export const UserMutationResolver = {
  async createUser(_, { name }) {
    const user = User.create({
      name
    });
    await user.save();
    return user;
  }
};