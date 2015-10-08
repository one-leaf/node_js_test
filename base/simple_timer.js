function simpleTimout(consoleTime){
	console.timeEnd(consoleTime);
}

console.time("twoSecond");
setTimeout(simpleTimout, 2000,"twoSecond");
console.time("oneSecond");
setTimeout(simpleTimout, 1000,"oneSecond");
console.time("five");
setTimeout(simpleTimout, 5000,"five");
console.time("50ms");
setTimeout(simpleTimout, 50,"50ms");
