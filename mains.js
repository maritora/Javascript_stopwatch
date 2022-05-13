const count = document.getElementById("count");
const stop = document.getElementById("stop");
const start= document.getElementById("start");
const reset = document.getElementById("reset");

let ms = 0;
let second = 0;
let minutes = 0;
let hour = 0;
let stopwatch = () => {
	ms++; 
	if (ms >9) {
		second++;
		ms=0;
	}
	if (second >59){
		minutes++;
		second=0
	}
	if (minutes >59){
		hour++;
		minutes=0
	}
count.innerHTML = hour + ":" + minutes + ":" + second + ":" + ms
}

let interval;
start.addEventListener('click', () => { //スタート押したときの動作
	interval = setInterval(stopwatch,100)
	start.disabled = true;
	stop.disabled = false;
	reset.disabled = true;
})

stop.addEventListener('click', () => { //ストップ押したときの動作
	clearInterval(interval);
	start.disabled = false;
	stop.disabled = true;
	reset.disabled = false;
})

reset.addEventListener('click', () => { //リセット押したときの動作
	count.innerHTML = "0:0:0:0";
	ms = 0;
	second = 0;
	minutes = 0;
	hour = 0;
	start.disabled = false;
	stop.disabled = true;
	reset.disabled = true;
})