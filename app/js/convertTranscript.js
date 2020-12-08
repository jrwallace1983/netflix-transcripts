const lineReader = require('line-reader');

lineReader.eachLine('../python/download.txt', (line,last)=>{
    console.log(line)
})