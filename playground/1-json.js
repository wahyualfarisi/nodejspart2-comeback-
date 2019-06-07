const fs = require('fs');

const bufferData = fs.readFileSync('1-json.json');
const parse = JSON.parse(bufferData);

parse.name = 'isyana alfarisi';
parse.age = 25;
parse.address = 'bekasi';
fs.writeFileSync('1-json.json', JSON.stringify(parse))
