import '@graphql-codegen/testing';
import { parse } from 'graphql';
import { buildModule } from '../src/builder';

const testDoc = parse(/* GraphQL */ `
  type Article {
    id: ID!
    title: String!
    text: String!
    author: User!
    comments: [Comment!]
  }

  extend type User {
    articles: [Article!]
  }

  extend type Query {
    articles: [Article!]
    articleById(id: ID!): Article
    articlesByUser(userId: ID!): [Article!]
  }
`);

test('should include import statement', () => {
  const output = buildModule(testDoc, {
    importPath: '../types',
    importNamespace: 'core',
  });

  expect(output).toBeSimilarStringTo(`
    import * as core from "../types";
  `);
});

test('should pick fields from defined and extended objects', () => {
  const output = buildModule(testDoc, {
    importPath: '../types',
    importNamespace: 'core',
  });

  expect(output).toBeSimilarStringTo(`
    type DefinedFields = {
      Article: 'id' | 'title' | 'text' | 'author' | 'comments';
      Query: 'articles' | 'articleById' | 'articlesByUser';
      User: 'articles';
    };
  `);
});

test('should reexport used types but not defined in module', () => {
  const output = buildModule(testDoc, {
    importPath: '../types',
    importNamespace: 'core',
  });

  expect(output).toBeSimilarStringTo(`
    export type User = core.User;
  `);
  expect(output).toBeSimilarStringTo(`
    export type Comment = core.Comment;
  `);
});

test('should export partial types, only those defined in module or root types', () => {
  const output = buildModule(testDoc, {
    importPath: '../types',
    importNamespace: 'core',
  });

  expect(output).toBeSimilarStringTo(`
    export type Article = Pick<core.Article, DefinedFields['Article']>;
  `);
  expect(output).toBeSimilarStringTo(`
    export type Query = Pick<core.Query, DefinedFields['Query']>;
  `);
});

test('should use and export resolver signatures of types defined or extended in a module', () => {
  const output = buildModule(testDoc, {
    importPath: '../types',
    importNamespace: 'core',
  });

  expect(output).toBeSimilarStringTo(`
    export type ArticleResolvers = Pick<core.ArticleResolvers, DefinedFields['Article']>;
  `);
  expect(output).toBeSimilarStringTo(`
    export type QueryResolvers = Pick<core.QueryResolvers, DefinedFields['Query']>;
  `);
  expect(output).toBeSimilarStringTo(`
    export type UserResolvers = Pick<core.UserResolvers, DefinedFields['User']>;
  `);
});

test('should not generate resolver signatures of types that are not defined or extened by a module', () => {
  const output = buildModule(testDoc, {
    importPath: '../types',
    importNamespace: 'core',
  });

  expect(output).not.toContain('CommentResolvers');
});

test('should generate an aggregation of individual resolver signatures', () => {
  const output = buildModule(testDoc, {
    importPath: '../types',
    importNamespace: 'core',
  });

  expect(output).toBeSimilarStringTo(`
    export type Resolvers = {
      Article: ArticleResolvers;
      Query: QueryResolvers;
      User: UserResolvers;
    };
  `);
});
