const fs = require('fs');

function jsonFile(fileName,data){
    fs.writeFile(`${__dirname}/${fileName}.json`,JSON.stringify(data),function(err){
        if(err){
            throw err;
        }else{
            console.log(`file ${fileName}.json successfully created`);
            
            fs.unlink(`${__dirname}/${fileName}.json`,function(err){
                if(err){
                    throw err;
                }else{
                    console.log(`${fileName}.json successfully deleted`);
                }
            });
        }
    });

}

module.exports = {jsonFile};