const problem2 = require('../problem2.js');

try{
    problem2.fsCallback('lipsum.txt');
}catch(error){
    console.error(error.message);
}
