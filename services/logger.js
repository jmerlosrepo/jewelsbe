const fs = require('fs');

module.exports = loggerOps = {
    log: (message) => {
        const date = new Date();
        let newMessage = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${message}.\n`;
        const fileName = `logs-${date.getMonth()}-${date.getDate()}-${date.getFullYear()}.txt`;
        
        fs.access(`./logs/${fileName}`, fs.F_OK, (err) => {
            if(err){
                fs.writeFile(`./logs/${fileName}`, newMessage, { flag: 'wx' }, (error) => {
                    if (error) {
                        console.log(error);
                        return false;
                    }else{
                        return true;
                    }
                });
                return;
            }else{
                fs.appendFile(`./logs/${fileName}`, newMessage, (error) => {
                    if (error) {
                        console.log(error);
                        return false;
                    }else{
                        return true;
                    }
                });
            }
        })
    }
}
