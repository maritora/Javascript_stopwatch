const count = document.getElementById("count");
const stop = document.getElementById("stop");
const start= document.getElementById("start");
const reset = document.getElementById("reset");

let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;

let stopwatch = () => {
	c1++; //１を足す
	if (c1 >9) {
		c2++;
		c1=0;
	}
	if (c2 >9){
		c3++;
		c2=0
	}
	if (c3 >9){
		c4++;
		c3=0
	}
count.innerHTML = c4 + ":" + c3 + ":" + c2 + ":" + c1
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
	c1 = 0;
	c2 = 0;
	c3 = 0;
	c4 = 0;
	start.disabled = false;
	stop.disabled = true;
	reset.disabled = true;
})