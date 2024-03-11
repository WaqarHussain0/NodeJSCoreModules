var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'


// Define the URL components
const urlObject = {
    protocol: 'http',
    hostname: 'localhost',
    port: 3000,
    pathname: '/pathname',
    query: { search: 'test' },
    hash: '#hash'
  };
  
  // Construct the URL
  const myURL = url.format(urlObject);
  console.log(myURL); 