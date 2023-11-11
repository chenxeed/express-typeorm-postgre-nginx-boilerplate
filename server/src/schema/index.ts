import Base from './base';
import { GraphQLSchema, buildSchema } from "graphql";
import { UserSchema, UserQueryResolver, UserMutationResolver } from "../modules/User/resolver";
import { IResolvers } from '@graphql-tools/utils';

export function generateSchema (): GraphQLSchema {
  const schemaQuery = [Base, UserSchema].join('\n');
  return buildSchema(schemaQuery);
}

export function generateResolvers (): IResolvers<any, any> {
  return {
    Query: {
      ...UserQueryResolver
    },
    Mutation: {
      ...UserMutationResolver
    }
  }
}