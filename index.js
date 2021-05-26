const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const lap = document.querySelector(".lap");
const reset = document.querySelector(".reset");

const list = document.querySelector(".lap-list");
const listC = document.querySelector(".list-container");

let time;
let cur;

start.onclick = () => {
    listC.style.display = "none";
    start.disabled = true;
    lap.disabled = false;
    reset.disabled = false;
    time = new Date();
    cur = setInterval(() => {
        timer.textContent = getTime("");
    },1000);
    list.innerHTML = "";
};

lap.onclick = () => {
    listC.style.display = "block";
    let temp = new Date();
    temp -= time;
    const li = document.createElement("li");
    li.textContent = getTime("Mil");
    list.appendChild(li);
};

reset.onclick = () => {
    start.disabled = false;
    lap.disabled = true;
    reset.disabled = true;
    clearInterval(cur);
    timer.textContent = "00:00:00";
};

function getTime(key) {
    let temp = new Date();
    temp -= time;
    let h = Math.floor(temp/3600000);
    temp %= 3600000;
    let m = Math.floor(temp/60000);
    temp %= 60000;
    let s = Math.floor(temp/1000);
    temp%=1000;

    return `${h<10?"0"+h:h}:${m<10?"0"+m:m}:${s<10?"0"+s:s}${key===""?"":":"+temp}`;
}