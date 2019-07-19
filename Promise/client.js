const http = require('http');
const url = "http://127.0.0.1:5000";
const numOfCalls = 10;

// function returns a Promise
function clientRequest(reqNum) {
	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			let chunks_of_data = [];

			// A chunk of data has been recieved.
			res.on('data', (chunk) => {
				chunks_of_data.push(fragments);
			});

			// The whole response has been received. Print out the result.
			res.on('end', () => {
				console.log("client's request number " + reqNum + " ended");
				if (chunks_of_data.length > 0) {
					console.log(chunks_of_data);
				}
			});

			res.on('error', (error) => {
				reject(error);
			});
		});
	});
}

// async function which will wait for the HTTP request to be finished
async function asyncReq(reqNum) {
	try {
		await clientRequest(reqNum);
	}
	catch (error) {
		// Promise rejected
		console.log(error);
	}
}


// call the async function
const makeRequests = () => {
	for (let i = 0; i < numOfCalls; i++) {
		console.log("ready for start request number " + (i+1));
		asyncReq(i + 1);
	}
}

module.exports.makeRequests = makeRequests;


// this code will be executed only when waiting for "makeSynchronousRequest" is finished
// some code