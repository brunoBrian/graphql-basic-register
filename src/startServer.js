import { ApolloServer, PubSub } from 'apollo-server';
import mongoose from 'mongoose';

const startServer = (typeDefs, resolvers) => {
  mongoose.connect('mongodb://brunobrian:cabelera10@ds145380.mlab.com:45380/petitapetshop_graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  const pubsub = new PubSub();
  const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub } });
  server.listen().then(({ url }) => console.log(`Server is running at ${url}` )).catch(err => console.log(err));
}

export default startServer;