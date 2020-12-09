const fs = require('fs');

fs.stat('readme.txt', (err,stats)=>{
    if(err) throw err;
    console.log(stats);
})