const http = require("http");
const fs = require("fs");
const {Transform,pipeline} = require("stream");

const server = http.createServer((req, res)=>{
    // ------1-------
    // downloading file in a bad way
    // const file = fs.readFileSync("sample.txt");
    // res.end(file);

    // ------2-------
    // downloading file in a good way
    // const readableStream = fs.createReadStream("sample.txt");
    // readableStream.pipe(res);

    // ------3-------
    // const file = fs.readFileSync("sample.txt");
    // fs.writeFileSync("output.txt", file)
    // res.end()

    // const readStream =  fs.createReadStream("sample.txt");
    // const writeStream = fs.createWriteStream("output.txt");

    // readStream.on("data", (chunk)=>{
    //     console.log("CHUNK:", chunk)
    //     writeStream.write(chunk);
    // })

    // ----4 ------- String Processing 
    // sample.txt all word into uppercase and every ipsm word into Abhi
    const readStream = fs.createReadStream("sample.txt");
    const writeStream = fs.createWriteStream("output.txt");
    const transformStream = new Transform({
        transform(chunk, encoding, callback){
// transform is readable and writable both

            const modifiedWord = chunk.toString().toUpperCase().replaceAll("IPSUM", "ABHI");
            callback(null, modifiedWord)
            
        }
    })

//     readStream.on("data", (chunk)=>{
//         const modifiedWord = chunk.toString().toUpperCase().replaceAll("IPSUM", "ABHI");
//         writeStream.write(modifiedWord);
//     });

    // readStream.pipe(transformStream).pipe(writeStream);
    

    pipeline(readStream, transformStream, writeStream, (err)=>{
        if(err){
            console.log(err)
        }
    })
//     // Add this to end the response when file processing is complete
//     readStream.on("end", () => {
//         res.end("File processing complete");
  });
    
//     // Handle errors
//     readStream.on("error", (err) => {
//         res.end("Error processing file: " + err.message);
//     });
// });

server.listen(8010, ()=>{
    console.log("server is connected at", 8010)
});