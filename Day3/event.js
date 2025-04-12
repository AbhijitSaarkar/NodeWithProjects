const EventEmitter = require('events');


const emitter = new EventEmitter();

// on(eventName, Listener)---create 

emitter.on("GREET", (args)=>{

    console.log(`Hello ${args.username} your id is ${args.id}`)
})

// emit (eventName, [args])--- execute

emitter.emit("GREET",{
    username:"suraj",
    id:123
});