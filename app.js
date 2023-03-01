const fs = require('fs');

fs.readFile('file.text', 'utf8', function(err,data){
    if(err) throw err;
    console.log(data);
});