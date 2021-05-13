const WordPOS = require("wordpos");
const wordpos = new WordPOS();

class Wordnet {
  getPos({ text }) {
    return wordpos.getPOS(text);
  }
  getNouns({ text }) {
    return wordpos.getNouns(text);
  }
  getVerbs({ text }) {
    return wordpos.getVerbs(text);
  }
  getAdjectives({ text }) {
    return wordpos.getAdjectives(text);
  }
  getAdverbs({ text }) {
    return wordpos.getAdverbs(text);
  }

  isNoun({ word }) {
    return wordpos.isNoun(word);
  }
  isVerb({ word }) {
    return wordpos.isVerb(word);
  }
  isAdjective({ word }) {
    return wordpos.isAdjective(word);
  }
  isAdverb({ word }) {
    return wordpos.isAdverb(word);
  }

  lookup({ word }) {
    return wordpos.lookup(word);
  }
  lookupNoun({ word }) {
    return wordpos.lookupNoun(word);
  }
  lookupVerb({ word }) {
    return wordpos.lookupVerb(word);
  }
  lookupAdjective({ word }) {
    return wordpos.lookupAdjective(word);
  }
  lookupAdverb({ word }) {
    return wordpos.lookupAdverb(word);
  }
}

module.exports = Wordnet;
