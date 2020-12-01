let calcTime = (given_seconds)=>{
    let hours = Math.floor(given_seconds / 3600);
    let minutes = Math.floor((given_seconds - (hours * 3600)) / 60);
    let seconds = given_seconds - (hours * 3600) - (minutes * 60);
    let timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return timeString
};
  let tagList = document.getElementsByTagName("p");
  for (let i = 0; i < tagList.length; i++) {
    //let childNode = tagList[i].children
    /*for (let s = 0; s < childNode.length; s++){
      if(childNode[s].nodeName ==="SPAN"){
        console.log("success")
      }
    }*/
  console.log(tagList[i])
  let beginTime = tagList[i].getAttribute("begin")
  let endTime = tagList[i].getAttribute("end")
  let begin_seconds = beginTime.slice(0,-8)
  let end_seconds = endTime.slice(0,-8)
  tagList[i].innerHTML = `<span class="timestamp">Begin:${calcTime(begin_seconds)} End:${calcTime(end_seconds)}</span></br>
  <strong> ${tagList[i].innerHTML}</strong>`
};

