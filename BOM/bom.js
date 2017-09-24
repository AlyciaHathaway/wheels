window.$ = function() {
	let array = [];
	// 省略
	return array;
};

// 上下两个对象没有任何关系


$.bom = {
	openAtCenter: function(width, height, url) {
		window.open(url, '_blank', `
			width = ${width}px,height = ${height}px,
			screenX = ${screen.width/2 - width/2}px, screenY = ${screen.height/2 - height/2}px
		`)
	}
};

