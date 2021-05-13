const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type PosResult {
    nouns: [String],
    verbs: [String],
    adjectives: [String],
    adverbs: [String],
    rest: [String]
  }

  type LookupResult {
    gloss: String
    def: String
    exp: [String]
    pos: String
    synonyms: [String]
  }

  type Wordnet {
    getPos(text: String!): PosResult
    getNouns(text: String!): [String]
    getVerbs(text: String!): [String]
    getAdjectives(text: String!): [String]
    getAdverbs(text: String!): [String]

    isNoun(word: String!): Boolean!
    isVerb(word: String!): Boolean!
    isAdjective(word: String!): Boolean!
    isAdverb(word: String!): Boolean!

    lookup(word: String!): [LookupResult]
    lookupNoun(word: String!): String
    lookupVerb(word: String!): String
    lookupAdjective(word: String!): String
    lookupAdverb(word: String!): String
  }
 
  type Query {
    getWordnet: Wordnet
  }
`);

module.exports = schema;
