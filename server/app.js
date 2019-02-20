const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const app = express();

//  Setup middleware
app.use("/graphql", graphqlHTTP({ schema, graphiql: true })); //    or app.use("/graphql", graphqlHTTP({ schema: schema }));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port} ........`);
});
