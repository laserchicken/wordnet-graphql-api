const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const hmac = require("hmac-auth-express");
const schema = require("./schema");
const Wordnet = require("./Wordnet");

const environment = process.env.NODE_ENV;

var root = {
  getWordnet: () => {
    return new Wordnet();
  },
};

var app = express();

if (environment === "production") {
  //body parsing, hmac middleware uses req.body
  app.use(express.json());
  app.use(hmac(process.env.HMAC_SECRET, { minInterval: 200 }));
}

app.use(
  "/wordnet",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: environment !== "production",
  })
);
app.listen(process.env.PORT);
