var m = require('../../').module('test-circular',['m1']);
m.config('root',__dirname);
m.server();

console.log('No circular founded, should reach here');