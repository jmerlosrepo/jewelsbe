const fs = require('fs');

module.exports = fileOps = {
    readFile: () => {
        return new Promise((resolve, reject) => {
            fs.readFile('./data/data.JSON', (err, data) => {
                if(! err){
                    resolve(JSON.parse(data));
                }   
                else{
                    reject(err);
                }
            })
        });
    },
    updateFile: (jsonData) => {
        return new Promise((resolve, reject) => {
            fs.writeFile('./data/data.JSON', JSON.stringify(jsonData), error => {
                if (error) {
                    reject(error);
                    return;
                }else{
                    resolve(true);
                }
            })
        });
    }
}
