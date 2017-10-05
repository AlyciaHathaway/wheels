
window.dialog = function(options) {
	// 解构赋值
	let {title, content, buttons} = options;

	let $div = generateHTML();

	let api = {
		close: function() {
			// 尽量不用JS操作样式，比如show() hide()函数，hide后再show不能识别原来设置的display：flex
			$div.removeClass('active')
		},
		show: function() {
			$div.addClass('active')
		}
	};

	$(document.body).append($div);
	return api;

	function generateHTML() {
		let $divWrapper = $('<div class="dialog-wrapper active"></div>');

		let $div = $('<div class="dialog"></div>')
			.appendTo($divWrapper);

		let $title = $('<div class="dialog-title"></div>')
			.text(title).appendTo($div);

		let $content = $('<div class="dialog-content"></div>')
			.text(content).appendTo($div);

		let $buttons = $('<div class="dialog-actions"></div>');
		for (let i=0; i<buttons.length; i++) {
			let $b = $('<button></button>')
				.text(buttons[i].text)
				.appendTo($buttons)
				.on('click', function() {
					let action = buttons[i].action;
					// 等价 let result = action && action();
					let result;
					if (action) {
						result = action()
					}
					// 等价 result !==false && api.close()
					if (result !== false) {
						api.close()
					}
				})
		}
		$buttons.appendTo($div);

		return $divWrapper
	}
};