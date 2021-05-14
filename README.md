[Wordnet](https://wordnet.princeton.edu/) graphql express.js api, because why not? It utilizes [wordpos](https://github.com/moos/wordpos) package.

## Example client
```javascript
const axios = require("axios");

const query = `{
  getWordnet{
    getPos(text: "The angry bear chased the frightened little squirrel.") {
      nouns
      verbs
      adjectives
      adverbs
    }
    lookup(word: "bear") {
      gloss
      synonyms
      def
      exp
      pos
    }
  }
}`;

axios({
  url: "http://localhost:4000/wordnet",
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  data: { query },
}).then((result) => {
  console.log(result.data);
}).catch((data) => {
  console.log(data.response.data);
});

```

In production add `Authentication` and `Date` headers:

```javascript
const time = Date.now().toString();

const authHeader = () => {
  const hmac = crypto.createHmac("sha256", "secret");

  hmac.update(time);
  hmac.update("POST");
  hmac.update("/wordnet");

  const contentHash = crypto.createHash("md5");
  contentHash.update(JSON.stringify({ query }));
  hmac.update(contentHash.digest("hex"));

  return `HMAC ${time}:${hmac.digest("hex")}`;
};

axios({
  url: "http://localhost:4000/wordnet",
  method: "post",
  headers: {
    "Content-Type": "application/json",
    Authentication: authHeader(),
    Date: time,
  },
  data: { query },
}).then((result) => {
  console.log(result.data);
})
```
