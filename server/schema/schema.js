const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//  dummy data
var books = [
  { name: "The Essential Rumi", genre: "Existentialist fiction", id: 1 },
  { name: "Fihi Ma Fihi", genre: "Novel of ideas", id: 2 },
  { name: "The pocket Rumi", genre: "Philosophy", id: 3 }
];

//  Book Model
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

//  RootQuery
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        //  get data from db or any other source
        return _.find(books, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
