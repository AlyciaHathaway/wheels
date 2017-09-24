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
	},

	search: function(name, value) {
		let searchAll = function() {
			let result = {};
			let search = window.location.search;
			// 去掉问号
			if (search[0] === '?') {
				search = search.slice(1)
			}
			// 用&分割成数组
			let searchArray = search.split('&');
			// 遍历数组
			for (let i=0; i<searchArray.length; i++) {
				let parts = searchArray[i].split('=');
				// result['a'] === '1'
				result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1])
			}
			return result;
		};
		let result = searchAll();

		// 没有值，只获取
		if (value === undefined) {
			return result[name];
		}else {
		// 参数传值，则设置
		// 如果没有，则添加
			if(result[name] === undefined) {
				location.search += `&${encodeURIComponent(name)}=${encodeURIComponent(value)}`
			}else {
		//如果有值，则覆盖
				result[name] = encodeURIComponent(value);
				let newSearch = '?';
				for (let key in result) {
					newSearch += `${encodeURIComponent(key)}=${encodeURIComponent(result[key])}&`
				}
				location.search = newSearch
			}
		}
	}
};

