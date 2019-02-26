const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const path = require("path");

const cors = require("cors");
const app = express();

//  activate cors
app.use(cors());

//  connect to db
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://nkhorasi:noor1211@clusterm0-ebmx7.mongodb.net/mern-graphql-full-stack?retryWrites=true",
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

//  Setup middleware
app.use("/graphql", graphqlHTTP({ schema, graphiql: true })); //    or app.use("/graphql", graphqlHTTP({ schema: schema }));

app.use(express.static(path.join(__dirname, "public")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port} ........`);
});
