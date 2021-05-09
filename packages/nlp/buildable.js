const core = require('@nlpjs/core');
const nlp = require('@nlpjs/nlp');
const langenmin = require('@nlpjs/lang-zh');
const requestrn = require('@nlpjs/request-rn');
const Corpus = require('./corpus-zh');
window.nlpjs = { ...core, ...nlp, ...langenmin, ...requestrn };
window.Corpus = Corpus;