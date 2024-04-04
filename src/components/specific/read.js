const fs = require("node:fs");
const data = fs.readFile(
  "C:UsersASUSDesktopIm shashikanth.txt",
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("data");
  }
);
