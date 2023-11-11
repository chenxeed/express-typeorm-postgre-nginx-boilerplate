import { User } from "./entity";

export const UserSchema = `
extend type Query {
  users: [User]
  user(id: Int!): User!
}

extend type Mutation {
  createUser(firstName: String!, lastName: String!, address: String): User!
}

type User {
  id: ID!
  firstName: String!
  lastName: String!
  address: String
}
`;

export const UserQueryResolver = {
  async users() {
    console.log('finding nemo!');
    const result = await User.find();
    return result;
  },
  async user(_, { id }) {
    const result = await User.findOneBy({
      id
    });
    return result;
  },
};

export const UserMutationResolver = {
  async createUser(_, { firstName, lastName, address }) {
    const user = User.create({
      firstName,
      lastName,
      address
    });
    await user.save();
    return user;
  }
};