
let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
let progressBar = document.getElementById("progress")

function showCurrentTime(){

//    find date object method ("date mdn" website)

    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    hour.textContent = hr
    minute.textContent = min
    second.textContent = sec
    progress.style.width = (sec / 60) * 100 + '%'
}
setInterval(showCurrentTime, 1000)