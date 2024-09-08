import path from 'path';

import url from 'url';

const filePath = './dir1/dir2/test.txt';

//basename() --> returns last portion of a path
console.log(path.basename(filePath)); //prints test.txt

//dirname()
console.log(path.dirname(filePath)); //prints ./dir1/dir2

//extname()
console.log(path.extname(filePath)); // prints .txt

//parse()
console.log(path.parse(filePath)); // gives an object  with all the stuff above

const __filename = url.fileURLToPath(import.meta.url);
console.log('__filename is: ' + __filename);
const __dirname = path.dirname(__filename);
console.log('__dirname is: ' + __dirname);

//join()
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'index2.html');
console.log(filePath2); // /Users/aayushbasnyat/IdeaProjects/learnNodeJs/dir1/dir2/index.html

// resolve()
const filePath3 = path.join(__dirname, 'dir2', 'dir3', 'index3.html');
console.log(filePath3); // /Users/aayushbasnyat/IdeaProjects/learnNodeJs/dir2/dir3/index3.html
