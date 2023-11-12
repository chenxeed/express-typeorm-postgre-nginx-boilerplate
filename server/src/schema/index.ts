import Base from './base';
import { GraphQLSchema, buildSchema } from "graphql";
import { TodoSchema, TodoQueryResolver, TodoMutationResolver } from "../modules/Todo/resolver";
import { IResolvers } from '@graphql-tools/utils';

export function generateSchema (): GraphQLSchema {
  const schemaQuery = [Base, TodoSchema].join('\n');
  return buildSchema(schemaQuery);
}

export function generateResolvers (): IResolvers<any, any> {
  return {
    Query: {
      ...TodoQueryResolver
    },
    Mutation: {
      ...TodoMutationResolver
    }
  }
}