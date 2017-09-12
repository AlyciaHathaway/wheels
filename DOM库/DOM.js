// $接收一个字符串/元素/元素列表
// 返回一个新的数组
// 这个数组有on、addClass、removeClass... API
window.$ = function(selectorOrNode) {
	let array = [];
	if (typeof selectorOrNode === 'string') {
		// items是对象，不是数组
		let items = document.querySelectorAll(selectorOrNode);
		for (let i=0; i<items.length; i++) {
			array.push(items[i])
		}
	}else if (selectorOrNode instanceof Element) {
		array.push(selectorOrNode)
	}else if (selectorOrNode instanceof Array) {
		for (let i=0; i<selectorOrNode.length; i++) {
			array.push(selectorOrNode[i])
		}
	}

	// 添加on方法
	array.on = function(eventType, fn) {
		for (let i=0; i<array.length; i++) {
			array[i].addEventListener(eventType, fn)
		}
	};
	// 添加addClass方法
	array.addClass = function(className) {
		for (let i=0; i<array.length; i++) {
			array[i].classList.add(className)
		}
		// 返回array使其和items等价，并且能够链式调用
		return array
	};

	array.removeClass = function(className) {
		for (let i=0; i<array.length; i++) {
			array[i].classList.remove(className)
		}
		return array
	};

	array.text = function(value) {
		if (value !== undefined) {
			for (let i=0; i<array.length; i++) {
				array[i].textContent = value
			}
			return array
		}else{
			let result = [];
			for (let i=0; i<array.length; i++) {
				result.push(array[i].textContent)
			}
			// 但在jQuery里使用text方法取值只返回第一个元素
			return result
		}
	};

	array.get = function(index) {
		return array[index]
	};

	array.siblings = function() {
		let children = array[0].parentNode.children;
		let resultArray = [];
		for (let i=0; i<children.length; i++) {
			if (children[i] !== array[0]) {
				resultArray.push(children[i])
			}
		}
		return $(resultArray);
	};
	return array;
};