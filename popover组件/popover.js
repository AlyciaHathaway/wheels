
window.popover = function(options) {
	let {element, content} = options;
	let $element = $(element);
	let $popover;
	// div创建在外面省CPU，占内存
	// let $popover = $('<div></div>')
	$element.on('click', function() {
		if ($popover) {
			// remove只是删除文本和节点，但元素本身依然保留
			$popover.remove();
			$popover = null // 关键
		}else {
			// 省内存，占CPU
			$popover = $('<div></div>')
				.text(content)
				.insertAfter($element)
		}
	});
	return undefined
};

popover({
	element: '#btn',
	content: 'hi',
	trigger: 'click' // 或者 mouse
});