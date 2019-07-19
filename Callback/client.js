const url = "http://127.0.0.1:5000";
const http = require('http');
const numOfCalls = 10;



const clientRequest = (reqNum) => {

  http.get(url, (res) => {

    let chunks_of_data = [];

    // A chunk of data has been recieved.
    res.on('data', (chunk) => {
      chunks_of_data.push(fragments);
    });

    // The whole response has been received. Print out the result.
    res.on('end', () => {
      console.log("client's request number " + reqNum + " ended.");
      if (chunks_of_data.length > 0) {
        console.log(chunks_of_data);
      }
    });


  }).on("error", (error) => {
    console.log("Error: " + error.message);
  });

};

//this function make 10 calls to client's request function
const makeRequests = () => {
  for (let i = 0; i < numOfCalls; i++) {
    console.log("ready for start request number " + (i + 1));
    clientRequest(i + 1);
  }
}


module.exports.makeRequests = makeRequests;
