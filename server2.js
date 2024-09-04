import {createServer} from 'http';
const PORT = 8080;

const users = [
    {id: 1 , name : 'John Doe'},
    {id:2, name : 'Jane Doe'},
    {id: 3, name: 'Dug Doe'}
];

const server = createServer((req, res)=>{
    //give me all users
    if (req.url === '/api/users/' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.write(JSON.stringify(users));
        res.end();
    }
    // give me a single user
    else if (req.url.match(/\api\/users\/([0-9]+)/) && req.method === 'GET') { // regex needs to match /api/users and any number
        const id = req.url.split('/')[3];
        console.log(id);
        const user = users.find((user)=> user.id === parseInt(id));
        res.setHeader('Content-Type', 'application/json');
        if (user) {
            res.statusCode = 200;
            res.write(JSON.stringify(user));
            res.end();
        } else  {
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'User not found'}));
            res.end();
        }
    }
    else {
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'Route not found'}));
        res.end();
    }

});

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});