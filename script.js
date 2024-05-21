setInterval(() => {
    const Now = new Date()
    const hr = Now.getHours()
    const min = Now.getMinutes()
    const sec = Now.getSeconds()
    document.getElementById("hr").innerText = hr
    document.getElementById("min").innerText = min
    document.getElementById("sec").innerText = sec
}, 1000);

function SetAlarm() {

    const hourValue = document.getElementById("Hour").value
    const minuteValue = document.getElementById("minute").value
    document.getElementById("h").innerText = hourValue
    document.getElementById("m").innerText = minuteValue

}

let cheackintervel = setInterval(() => {
    const Now = new Date()
    const hr = Now.getHours()
    const min = Now.getMinutes()
    const sec = Now.getSeconds()
    document.getElementById("hr").innerText = hr
    document.getElementById("min").innerText = min
    document.getElementById("sec").innerText = sec
    const hourValue = document.getElementById("Hour").value
    const minuteValue = document.getElementById("minute").value
    const alarmh = document.getElementById("h").innerText = hourValue
    const alarmM = document.getElementById("m").innerText = minuteValue
    if (hr == alarmh && min == alarmM) {
   audioplay()
    }
}, 1000);
function audioplay()
{ const audio =document.getElementById("AudioPlay")
audio.play()
}



