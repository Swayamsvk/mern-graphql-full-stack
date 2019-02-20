const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

//  connect to db
mongoose.connect(
  "mongodb+srv://nkhorasi:noor1211@clusterm0-ebmx7.mongodb.net/mern-graphql-full-stack?retryWrites=true",
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

//  Setup middleware
app.use("/graphql", graphqlHTTP({ schema, graphiql: true })); //    or app.use("/graphql", graphqlHTTP({ schema: schema }));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port} ........`);
});
