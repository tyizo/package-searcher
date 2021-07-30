const { Search } = require("../dist");
const search = new Search();
search.npm("nodemon").then((package) => console.log(package));
search.pip("autopager").then((package) => console.log(package));
