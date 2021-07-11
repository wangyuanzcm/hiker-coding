const docgen = require("react-docgen-typescript");

const options = {
  savePropValueAsString: true,
};

// Parse a file for docgen info
docgen.parse("./path/to/component", options);