// argv
console.log(process.argv);
console.log(process.argv[3]); // prints -s

//process.env
console.log(process.env);

// pid - id of the node js process
console.log(process.pid); // prints 34320

// current working directory -
console.log(process.cwd()); ///Users/aayushbasnyat/IdeaProjects/learnNodeJs

// title
console.log(process.title);

//memory usage
console.log(process.memoryUsage());

//update()
console.log(process.uptime());

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
})

// exit - exit the process
process.exit(0); //success
console.log('Hello from after exit'); // this does not get logged since we already exited.

