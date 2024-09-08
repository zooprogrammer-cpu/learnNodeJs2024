// import fs from 'fs';
//
// //readFile() - async version - callback
// fs.readFile('./test.txt', 'utf8', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// });

//readFileSync() - Synchronous version. It is blocking.
// If it is a giant file that you are reading, it will stop the rest of the code
// Normally, you want to use the async version but if you want to do something quick, you can use this.
// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);

// readFIle() - async - Promise Version
// import fs from "fs/promises";
//
// fs.readFile('./test.txt', 'utf-8')
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// readFile() - async/await

import fs from "fs/promises";

const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

readFile();