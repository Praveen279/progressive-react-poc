// import setupClient from 'apollo-client-mock'
import { SchemaLink } from 'apollo-link-schema';
import schema from './mockSchema'
import ApolloClient from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();

export default new ApolloClient({
  link: new SchemaLink({ schema }),
  cache
});
