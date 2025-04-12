// !Objective 
// Create a program using Node-JS eventemitter that:

// ? Listens for Multiple types of user events (E.G Login, Logout, Purchase, And Profile Update)
// ? Tracks How many Times Each Event is Emitted 
// ? Logs A summary of all events occurrences when a special summary event is triggered 


// !Requirement 

// ? create at least four custom events 
// ? emit these events multiple times with different arguments (e.g username, item purchased)
// ? tracks and store the count of each event type.
// ? define a summary events that logs a detailed report of how many times each event was triggered  




const fs = require("fs");
const EventEmitter = require('events');


const userEmitter = new EventEmitter();

const eventCounts = {
    login: 0,
    logout: 0,
    purchase: 0,
    profileUpdate: 0
};

const LogFile = "eventlog.json"

if(fs.existsSync(LogFile)){

    const data = fs.readFileSync(LogFile,"utf-8");
    Object.assign(eventCounts, JSON.parse(data))
}

function saveCount(){
    fs.writeFileSync(LogFile, JSON.stringify(eventCounts, null, 2))
}

// Events 

 
userEmitter.on("LOGIN", (username)=>{

    eventCounts.login++;
    console.log(`${username}Logged in Successfully`)
    saveCount();
})
userEmitter.on("LOGOUT", (username)=>{
    eventCounts.logout++;
    console.log(`${username}LoggedOut in Successfully`)
    saveCount();
})
userEmitter.on("PURCHASE", (username, item)=>{
    eventCounts.purchase++;
    console.log(`${username} purchased ${item}`)
    saveCount();
})
userEmitter.on("PROFILE_UPDATE", (username, field)=>{
    eventCounts.profileUpdate++;
    console.log(`${username} updated their profile field: ${field}`)
    saveCount();
})

userEmitter.on("SUMMARY", ()=>{
    console.log("\n Event Summary");
    console.log(`Login: ${eventCounts.login}`);
    console.log(`Logout: ${eventCounts.logout}`);    
    console.log(`Purchase: ${eventCounts.purchase}`);
    console.log(`Profile Update: ${eventCounts.profileUpdate}`);
})

// emit event with different arguements

userEmitter.emit("LOGIN", "Abhi ")
userEmitter.emit("LOGOUT", "Abhi ")
userEmitter.emit("PURCHASE", "Abhi", "laptop")
userEmitter.emit("PROFILE_UPDATE", "Abhi ", "email")

userEmitter.emit("SUMMARY")