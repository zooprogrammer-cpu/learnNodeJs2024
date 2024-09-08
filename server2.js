import { createServer } from 'http';
const PORT = 8080;

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Dug Doe' }
];

// Logger middleware - logs the method and url being called
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();  // this denotes that this middleware is done and let's move to the next middleware
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
        res.statusCode = 200;
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User not found' }));
    }
    res.end();
}

// Route handler for POST /api/users
const createUserHandler = (req, res)=>{
    let body = '';
    // Listen for th data
    req.on('data', (chunk)=>{
        body += chunk.toString();
    });
    req.on('end', ()=>{
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}

// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end();
}

// to use the middleware, we run it and wrap everything in the callback
// invoking the logger middleware and jsonMiddleware
const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            console.log(`Handling request for ${req.url} with method ${req.method}`);
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler(req, res);
            } else if (req.url.match(/^\/api\/users\/\d+$/) && req.method === 'GET') {
                getUserByIdHandler(req, res);
            }
            else if (req.url === '/api/users' && req.method === 'POST') {
                createUserHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});