const os = require('os');

// 1. get os platform and user info
console.log("OS PLATFORM", os.platform());
console.log("USER INFO", os.userInfo());

// 2. Get the OS CPU core info

console.log("CPU Core info", os.cpus().length)


// 3. Get the free memory 

console.log("Free Memory", os.freemem())

//4. Get he OS CPU architecture

console.log("CPU Architecture:", os.arch());


// 5. Get the total memory of the system

console.log("Total Memory", os.totalmem(),"bytes");

// 6. Get he home directory of the user 
console.log("Home Directory", os.homedir());