var showCursor = false
var speed = 500

setInterval(() =>{
	if(!showCursor){
		document.getElementById('cursor').style.opacity = showCursor = true
	}
	else{
		document.getElementById('cursor').style.opacity = showCursor = false
	}
}, speed)