// utility used for parsing and formatting URL query strings.

var querystring = require("querystring");
var q = querystring.parse("year=2017&month=february");
console.log(q.year);
console.log(q.month);
