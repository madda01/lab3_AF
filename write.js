const fs= require('fs');

fs.writeFile('file.text', 'Hello World!', function(err){
    if(err) throw err;
    console.log('File saved!');
});