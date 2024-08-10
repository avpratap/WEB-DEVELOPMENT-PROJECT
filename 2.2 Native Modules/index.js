const fs = require("fs");

/*fs.writeFile("message.text", "Hello from NodeJS!", err => {
    if (err) throw err;
      console.log("This file have been saved!!");
}); */


fs.readFile("./message.text","utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });