import crypto from 'crypto';

// createHash();
const hash = crypto.createHash('sha256');
hash.update('password1234');
console.log(hash.digest('hex')); // we want it to be in hex

//random bytes
crypto.randomBytes(32, (err, data) => {
    if (err) throw err;
    console.log(data.toString('hex'));
})

// createCipheriv & createDecipheriv
const algorithm = 'aes-256-ctr';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipher(algorithm, key, iv);
let encrypted = cipher.update('Hello, this is a secret message', 'utf-8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);