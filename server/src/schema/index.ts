import Base from './base';
import { GraphQLSchema, buildSchema } from "graphql";
import { TodoSchema, TodoQueryResolver, TodoUserResolver, TodoMutationResolver } from "../modules/Todo/resolver";
import { UserSchema, UserQueryResolver, UserTodoResolver, UserMutationResolver } from "../modules/User/resolver";
import { IResolvers } from '@graphql-tools/utils';

export function generateSchema (): GraphQLSchema {
  const schemaQuery = [Base, TodoSchema, UserSchema].join('\n');
  return buildSchema(schemaQuery);
}

export function generateResolvers (): IResolvers<any, any> {
  return {
    Query: {
      ...TodoQueryResolver,
      ...UserQueryResolver,
    },
    User: {
      ...TodoUserResolver,
    },
    Todo: {
      ...UserTodoResolver,
    },
    Mutation: {
      ...TodoMutationResolver,
      ...UserMutationResolver,
    }
  }
}