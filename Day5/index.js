const crypto = require("crypto");


// 1. RandomBytes 

const randomvaluse = crypto.randomBytes(8);

console.log(randomvaluse.toString("hex"))

// 2. createHash
const hasvalue  = crypto.createHash("sha256").update("suraj").digest("hex");
const inputValue = "Suraj"
const mathValue = crypto.createHash("sha256").update(inputValue).digest("hex");  

if(hasvalue === mathValue){
    console.log("you can login ")

}
else{

    console.log("Something went wrong")
}
//3. 