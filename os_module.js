// The os module provide methods and properties related to the current operating system.

const os = require("os");

// Info about each Logical CPU

// os.cpus().forEach((cpu) => {
//   console.log(cpu);
// });

//CPU Architecture
// console.log(os.arch())

//OS Platform
// console.log(os.platform())

//OS Name
// console.log(os.type());

//Total Memory in bytes
// console.log(os.totalmem());

//Total Free Memory in bytes
console.log(os.freemem());

//System Uptime
console.log(os.uptime());
