document.getElementById("set").addEventListener("click", (e) => {
  e.preventDefault()

  let currentdate = new Date()
  
  let time = document.getElementById("time").value

  let hour = Number.parseInt(time.split(":")[0])

  let minute = Number.parseInt(time.split(":")[1])
  
  let scheduletime = new Date(currentdate.getFullYear(),currentdate.getMonth(),currentdate.getDate(),hour,minute,0,0)
  // console.log(scheduletime)
  
  let audio = new Audio("alram.mp3")

  let delay = scheduletime-currentdate

  alert("Your Alaram has been set for "+scheduletime)
  
  if (delay < 0){
    delay += 24*60*60*1000
  }
  setTimeout(() => {
    audio.play()
  }, delay);
});

