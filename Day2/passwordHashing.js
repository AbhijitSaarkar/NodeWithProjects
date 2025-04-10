

process.env.UV_THREDPOOL_SIZE = 5;
let start = Date.now();
const crypto = require("crypto")

crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{

    console.log(`${Date.now()- start}ms Done`)
})
crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{

    console.log(`${Date.now()- start}ms Done`)
})
crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{

    console.log(`${Date.now()- start}ms Done`)
})
crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{

    console.log(`${Date.now()- start}ms Done`)
})
crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{

    console.log(`${Date.now()- start}ms Done`)
})