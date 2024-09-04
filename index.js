// const {generateRandomNumber, celsiusToFahrenheit} = require('./utils');
import {generateRandomNumber, celsiusToFahrenheit} from "./utils.js";
console.log(`Random number : ${generateRandomNumber()}`);
console.log(`Celsius to fahrenheit:  ${celsiusToFahrenheit(0)}`)

import {getPosts} from "./postController.js";

import {getPostsLength} from "./postController.js";

console.log(getPosts());

console.log(`The number of posts are: ${getPostsLength()}`);


