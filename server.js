import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = 8000;
// Get current path since __filename and __dirname are directly not supported in ES Module
const __filename = url.fileURLToPath(import.meta.url);
// Get current directory
const __dirname = path.dirname(__filename);

console.log('filename: ', __filename);
console.log('dirname: ', __dirname);

const server = http .createServer(async (req, res) => {

    try {
        // Check if GET Request
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html'); // each argument will be part of the file path.
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Not found');
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
        res.end('Server error');
    }
});

// Listen to the port. Do something after it connects

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});





