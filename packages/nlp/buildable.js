const core = require('@nlpjs/core');
const nlp = require('@nlpjs/nlp');
const langenmin = require('@nlpjs/lang-en-min');
const requestrn = require('@nlpjs/request-rn');
const Corpus = require('./corpus-en');
window.nlpjs = { ...core, ...nlp, ...langenmin, ...requestrn };
window.Corpus = Corpus;