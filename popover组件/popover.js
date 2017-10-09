
window.popover = function(options) {
	let {element, content} = options;
	let $element = $(element);
	let $popover;
	show();

	$element.on('click', function() {
		if ($popover) {
			$popover.remove(); // remove只是删除文本和节点，但元素本身依然保留
			$popover = null // 关键
		}else {
			show();
		}
	});

	function show() {
		let width = $element.outerWidth();
		let height = $element.outerHeight();

		$popover = $('<div class="popover"></div>') // 省内存，占CPU，如果div创建在外面省CPU，占内存
													// let $popover = $('<div></div>')
			.html(content)
			.insertAfter($element);

		let selfWidth = $popover.outerWidth();
		let x = - (width/2 + selfWidth/2);

		$popover.css({
			transform: `translate(${x}px, -100%)`
		})
	}
	return undefined
};

popover({
	element: '#btn',
	content: 'hi hi hi',
	trigger: 'click' // 或者 mouse
});