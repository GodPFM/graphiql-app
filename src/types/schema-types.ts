import generated from './graphql.schema.json';

export const schemaParams = generated;

export type Schema = typeof schemaParams;
