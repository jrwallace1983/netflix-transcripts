const lineReader = require('line-reader');
let lines = [];
let beginTimeRegex = /begin="(.*?)t"/ ;/*regex to capture in-between the begin=" and t"*/ 
let endTimeRegex = /end="(.*?)t"/; /*regex to capture in-between the begin=" and t"*/ 

lineReader.eachLine('../python/download.txt', (line,last)=>{
    if(line.includes('<p')){
        lines.push(line);
    }
    
}, ()=>{
    for(let i = 0; i<lines.length; i++){
        //console.log(lines[i])
        let beginTime = lines[i].match(beginTimeRegex);//beginTimeRegex.exec(lines[i])
        console.log(beginTime);
        let endTime = lines[i].match(endTimeRegex);
        console.log(endTime);

    }
})
