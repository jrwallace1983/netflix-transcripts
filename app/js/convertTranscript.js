const lineReader = require('line-reader');
let lines = []

lineReader.eachLine('../python/download.txt', (line,last)=>{
    if(line.includes('<p')){
        lines.push(line)
    }
    
}, ()=>{
    for(let i = 0; i<lines.length; i++){
    let lineList = lines[i].split(' ');
    for(let a = 0; a<lineList.length; a++){
    if(lineList[a].includes('begin=')){
        console.log(lineList[a])
        let beginSeconds = lineList[a].replace(/[begin=t"]/g,'')
        console.log(beginSeconds)
    }else if(lineList[a].includes('end=')){
        console.log(lineList[a])
        let endSeconds = lineList[a].replace(/[end=t"]/g,'')
        console.log(endSeconds)
    }
        }
    }
})
