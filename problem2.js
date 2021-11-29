const fs = require('fs');

function fsCallback(filename){
    fs.readFile(`${__dirname}/${filename}`,'utf8',(err,data)=>{
        if(err){
            throw err;
        }else{
            let upperCaseText = data.toUpperCase();
            fs.writeFile(`${__dirname}/upperCase.txt`,upperCaseText,(err,upperCaseFile)=>{
                if(err){
                    throw err
                }else{
                    fs.appendFile(`${__dirname}/fileNames.txt`, 'upperCase.txt ',(err,fileNames)=>{
                        if(err){
                            throw err
                        }else{
                            console.log('upperCase.txt is added to filenames.txt');
                        }
                    });
                    fs.readFile(`${__dirname}/upperCase.txt`,'utf8',(err,upperCase)=>{
                        if(err){
                            throw err;
                        }else{
                            let lowerCase = upperCase.toLowerCase().split('.');
                            for(let i=0;i<lowerCase.length;i++){
                                fs.appendFile(`${__dirname}/lowerCase.txt`,lowerCase[i]+".\n",(err,lowerCaseFile)=>{
                                    if(err){
                                        throw err;
                                    }else{
                                        if((i+1)==lowerCase.length){
                                            fs.appendFile(`${__dirname}/fileNames.txt`, 'lowerCase.txt ',(err,fileNames)=>{
                                                if(err){
                                                    throw err
                                                }else{
                                                    console.log('lowerCase.txt is added to filenames.txt');
                                                }
                                            });
                                            fs.readFile(`${__dirname}/lowerCase.txt`,'utf8',(err,lowerCaseFile)=>{
                                                if(err){
                                                    throw err;
                                                }else{
                                                    let array = lowerCaseFile.split('.\n');
                                                    let sortedString = array.sort();
                                                    let flag=0;
                                                    sortedString.forEach(element => {
                                                        fs.appendFile(`${__dirname}/sortedFile.txt`, element+".\n", (err, sortedFile)=>{
                                                            if (err){
                                                                throw err;
                                                            }else{
                                                                flag++;
                                                                if(flag==sortedString.length){
                                                                    fs.appendFile(`${__dirname}/fileNames.txt`,'sortedFile.txt',(err,names)=>{
                                                                        if(err){
                                                                            throw err;
                                                                        }else{
                                                                            console.log('sortedFile.txt is added to filenames.txt');
                                                                            fs.readFile(`${__dirname}/fileNames.txt`, 'utf8', (err, files)=>{
                                                                                if (err){
                                                                                    throw err;
                                                                                }else{
                                                                                    console.log(files);
                                                                                    let fileName = files.split(' ');
                                                                                    let count = 0;
                                                                    
                                                                                    fileName.forEach((element)=>{
                                                                                        
                                                                                        fs.unlink(`${__dirname}/${element}`, (err) => {
                                                                                            if (err) {
                                                                                                throw err;
                                                                                            }else{
                                                                                                count++;
                                
                                                                                                if (count == fileName.length){
                                                                                                    fs.writeFile(`${__dirname}/fileNames.txt`, '',(err, newFile)=>{
                                                                                                        if (err){
                                                                                                            throw err;
                                                                                                        }else{
                                                                                                            console.log('content of filename is cleared')
                                                                                                        }
                                                                                                    } );
                                                                                                }
                                                                                            }
                                                                                        });
                                                                                    
                                                                                    });
                                                                                }
                                                                            });
                                                                        }
                                                                    });
                                                                }
                                                            }
                                                        });
                                                    });
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        }

                    });
                }
            });
        }
    });
}

module.exports = {fsCallback};