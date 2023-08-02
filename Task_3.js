// Asynchronous File Handling



const fs = require('fs')

fs.readFile('./content/data.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());

    const len = data.length;
    console.log(len);
})