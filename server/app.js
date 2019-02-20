const express = require("express");
const graphqlHTTP = require("express-graphql");

const app = express();

//  Setup middleware
app.use("/graphql", graphqlHTTP({
    
}));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port} ........`);
});
