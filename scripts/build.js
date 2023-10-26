"use strict";

const fs = require("fs");

const text = fs.readFileSync("robots.txt");

const template = `"use strict";

const robotsTxt = \`${text}\`;

module.exports = robotsTxt;`;

// eslint-disable-next-line no-console
console.log(template);
