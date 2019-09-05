if (!window.sbcon) {
	let iframe = document.createElement('iframe')
	iframe.style.width = 0
	iframe.style.height = 0
	document.body.appendChild(iframe)
	sbcon = window.frames[0].console
}

document.body.onclick = function(){
  e = arguments[0];
  var dt = e.target,stag = dt.tagName.toLowerCase();
  document.getElementById("out").innerHTML = stag;
};

var simulateClick = function(){
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window, 0, 0, 0, 180, 20, false, false, false, false, 0, null);
  document.body.dispatchEvent(evt);
}

simulateClick();
