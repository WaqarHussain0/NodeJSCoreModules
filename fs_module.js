// The file system module opens the doors to interacting with the file system of your device.
// In this scenario, we will see how to read from a file and how to write to a file using the
// file system module. To read and write there are two types of methods asynchronous/non-blocking
// way which we will be discussed and synchronous/blocking way.

const fs = require("fs");

fs.readFile("./os_module.js", (error, data) => {
  if (error) {
    console.log(error);
  }
  else {
    console.log(data.toString())
  }
});

fs.writeFile("./text.txt", "Hello World of NODE JS", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Data has been written");
  }
});
