const http = require("http");

const server = http.createServer((req, res)=>{

    res.end("Hello server is up")

})


server.listen (8080, ()=>{
    
    console.log("sever is connected at", 8080)
})