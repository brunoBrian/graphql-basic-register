import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';

const resolversArr = fileLoader(path.join(__dirname, 'modules', '**', 'resolvers.js'));
const resolvers = mergeResolvers(resolversArr);

export default resolvers;