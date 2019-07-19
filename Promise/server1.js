const http = require('http');
const ms = 2000;


//setting up server
const init = () => {
    http.createServer((req,res) => {
        
        sleep(ms); //call sleep function
      
        res.end(); //ending the response
    }).listen(5000, () => {
        console.log("server running...");
    });
}

//sleep function
function sleep(ms) {
    console.log("Sleep for 2 seconds..");
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,ms);
    console.log("Woke up.");
}

module.exports.init = init;