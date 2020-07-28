import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

const typesArr = fileLoader(path.join(__dirname, 'modules', '**', '*.gql'));
const typeDefs = mergeTypes(typesArr);

export default typeDefs;