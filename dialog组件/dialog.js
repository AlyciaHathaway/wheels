
window.dialog = function(options) {
	// 解构赋值
	let {title, content, buttons} = options;

	let $div = generateHTML();

	let api = {
		close: function() {
			$div.hide()
		}
	};

	$(document.body).append($div);
	return api;

	function generateHTML() {
		let $div = $('<div class="dialog"></div>');

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

		return $div
	}
};