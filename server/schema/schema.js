const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

//  dummy data
var books = [
  {
    name: "The Essential Rumi",
    genre: "Existentialist fiction",
    id: "1",
    authorId: "1"
  },
  { name: "Fihi Ma Fihi", genre: "Novel of ideas", id: "2", authorId: "2" },
  { name: "The pocket Rumi", genre: "Philosophy", id: "3", authorId: "3" },
  { name: "Masnavi", genre: "Philosophy", id: "4", authorId: "3" },
  { name: "Illuminated Rumi", genre: "Philosophy", id: "5", authorId: "2" },
  { name: "The Sufi Path", genre: "Novel of Ideas", id: "6", authorId: "3" }
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
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authors, { id: parent.authorId });
      }
    }
  })
});

//  Author Model
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorId: parent.id });
      }
    }
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
