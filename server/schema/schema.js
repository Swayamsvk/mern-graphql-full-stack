const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;

//  dummy data
var books = [
  { name: "The Essential Rumi", genre: "Existentialist fiction", id: "1" },
  { name: "Fihi Ma Fihi", genre: "Novel of ideas", id: "2" },
  { name: "The pocket Rumi", genre: "Philosophy", id: "3" }
];
var authors = [
  { name: "Coleman Barks", age: 55, id: "1" },
  { name: "Rumi", age: 90, id: "2" },
  { name: "Mevlana Rumi", age: 95, id: "3" }
];

//  Book Model
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

//  Author Model
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

//  RootQuery
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        //  get data from db or any other source
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        //  get data from db or any other source
        return _.find(authors, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
