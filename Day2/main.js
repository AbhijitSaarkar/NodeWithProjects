

// const fs = require("fs")

// console.log(__dirname, __filename)

// fs.writeFileSync("write.txt","Hello world this is suraj", (err )=>{

//     if(err){
//         console.log(err)
//     }
// })


// setTimeout(()=>{

//     console.log("Hello I am from global ")

// },2000)


// let count = 0;

// const interval = setInterval(() => {
    
//     console.log(`Interval count: ${++count}`)

//     if(count===4){
//         clearInterval(interval)
//     }
    
// }, 2000);


// // module function wrapper


console.log(Object.getOwnPropertyNames(global))