import { PluginFunction } from '@graphql-codegen/plugin-helpers';
import {
  printSchema,
  parse,
  visit,
  ListTypeNode,
  DocumentNode,
  FieldDefinitionNode,
  concatAST,
  InputValueDefinitionNode,
  StringValueNode,
} from 'graphql';
import { DEFAULT_SCALARS, RawDocumentsConfig } from '@graphql-codegen/visitor-plugin-common';

const transformScalar = (scalar: string) => {
  if (DEFAULT_SCALARS[scalar] === undefined) {
    return scalar;
  }

  return DEFAULT_SCALARS[scalar];
};

const createDocBlock = (lines: Array<string>) => {
  const typedef = [
    '/**',
    ...lines
      .filter(t => t && t !== '')
      .reduce((prev, t) => [...prev, ...t.split('\n')], [] as string[])
      .map(line => ` * ${line}`),
    ' */',
  ];
  const block = typedef.join('\n');

  return block;
};

const createDescriptionBlock = (nodeWithDesc: any | { description?: StringValueNode }): string => {
  if (nodeWithDesc?.description?.value) {
    return `@description ${nodeWithDesc.description.value}`;
  }

  return '';
};

export const plugin: PluginFunction<RawDocumentsConfig> = (schema, documents) => {
  const parsedSchema = parse(printSchema(schema));
  const mappedDocuments = documents.map(document => document.document).filter(document => document !== undefined);
  const ast = concatAST([parsedSchema, ...(mappedDocuments as Array<DocumentNode>)]);

  const schemaTypes: Array<string> = visit(ast, {
    Document: {
      leave(node) {
        return node.definitions;
      },
    },
    ObjectTypeDefinition: {
      leave(node: unknown) {
        const typedNode = node as { name: string; fields: Array<string> };

        return createDocBlock([
          `@typedef {Object} ${typedNode.name}`,
          createDescriptionBlock(node),
          ...typedNode.fields,
        ]);
      },
    },
    InputObjectTypeDefinition: {
      leave(node: unknown) {
        const typedNode = node as { name: string; fields: Array<string> };

        return createDocBlock([
          `@typedef {Object} ${typedNode.name}`,
          createDescriptionBlock(node),
          ...typedNode.fields,
        ]);
      },
    },
    InterfaceTypeDefinition: {
      leave(node: unknown) {
        const typedNode = node as { name: string; fields: Array<string> };

        return createDocBlock([
          `@typedef {Object} ${typedNode.name}`,
          createDescriptionBlock(node),
          ...typedNode.fields,
        ]);
      },
    },
    UnionTypeDefinition: {
      leave(node) {
        if (node.types !== undefined) {
          return createDocBlock([`@typedef {(${node.types.join('|')})} ${node.name}`, createDescriptionBlock(node)]);
        }

        return node;
      },
    },
    Name: {
      leave(node) {
        return node.value;
      },
    },
    NamedType: {
      leave(node: unknown) {
        return transformScalar((node as { name: string }).name);
      },
    },
    NonNullType: {
      leave(node, _, parent) {
        if (parent === undefined) {
          return node;
        }

        return node.type;
      },
    },
    FieldDefinition: {
      enter(node) {
        if (node.type.kind === 'NonNullType') {
          return { ...node, nonNullable: true };
        }

        return node;
      },
      leave(node: FieldDefinitionNode & { nonNullable?: boolean }) {
        const fieldName = node.nonNullable ? node.name : `[${node.name}]`;

        return `@property {${node.type}} ${fieldName}${
          node.description && node.description.value ? ` - ${node.description.value}` : ''
        }`;
      },
    },
    InputValueDefinition: {
      enter(node) {
        if (node.type.kind === 'NonNullType') {
          return { ...node, nonNullable: true };
        }

        return node;
      },
      leave(node: InputValueDefinitionNode & { nonNullable?: boolean }) {
        const fieldName = node.nonNullable ? node.name : `[${node.name}]`;

        return `@property {${node.type}} ${fieldName}${
          node.description && node.description.value ? ` - ${node.description.value}` : ''
        }`;
      },
    },
    ListType: {
      enter(node) {
        if (node.type.kind === 'NonNullType') {
          return { ...node, nonNullItems: true };
        }

        return node;
      },
      leave(node: ListTypeNode & { nonNullItems?: boolean }) {
        const type = node.nonNullItems ? node.type : `(${node.type}|null|undefined)`;

        return `Array<${type}>`;
      },
    },
    ScalarTypeDefinition: {
      leave(node) {
        return createDocBlock([`@typedef {*} ${node.name}`, createDescriptionBlock(node)]);
      },
    },
    EnumTypeDefinition: {
      leave(node) {
        return createDocBlock([
          `@typedef {String} ${node.name}`,
          '@readonly',
          createDescriptionBlock(node),
          ...(node.values || []).map(
            v =>
              `@property {String} ${v.name}${v.description && v.description.value ? ` - ${v.description.value}` : ''}`
          ),
        ]);
      },
    },
  });

  return schemaTypes.join('\n\n');
};
