const request = require('request');
const fs = require('fs');

let incomingURL = process.argv[2];
let filePath = process.argv[3];

const fetcher = function (incomingURL, filePath) {
  request(incomingURL, function (error,response, body) {
    if (error) {
      console.log("Error: " + error);
      return;
    }

    fs.writeFile(filePath, body, (error) => {
      if (error) {
        console.log("Failed to write Error: " + error);
        return;
      }
      else {

        console.log("Downloaded and Saved");
      }
    });
  });
};


fetcher(incomingURL, filePath);

