import http from 'http';
import dotenv from 'dotenv';
import fs from 'fs/promises';
dotenv.config();
import url from 'url';
import path from 'path';

//Get current path
//__filename //not available with ES Modules
//__dirname //not available with ES Modules
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('__filename: ' +__filename);
console.log('__dirname: ' +__dirname);


const PORT = process.env.PORT;
console.log('PORT is: ' + PORT);

const server = http.createServer(async (req, res) => {
    try {
        // Check if Get request
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Not allowed');
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end('Server Error');
    }
});

server.listen(8080, ()=>{
    console.log(`Server running on port ${PORT}`)
});


