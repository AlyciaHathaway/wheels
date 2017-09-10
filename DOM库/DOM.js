
window.$ = function(selector) {
	let array = [];
	// items是对象，不是数组
	let items = document.querySelectorAll(selector);
	for(let i=0; i<items.length; i++){
		array.push(items[i])
	}
	array.on = function(eventType, fn) {
		for(let i=0; i<array.length; i++){
			array[i].addEventListener(eventType, fn)
		}
	};
	return array;
};