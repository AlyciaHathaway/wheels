
window.dialog = function(options) {
	// 解构赋值
	let {title, content, buttons} = options;

	let $div = $('<div class="dialog"></div>'); // jQ API
	let div = $div[0]; // DOM API

	let $title = $('<div class="dialog-title"></div>')
		.text(title).appendTo($div);

	let $content = $('<div class="dialog-content"></div>')
		.text(content).appendTo($div);

	let $buttons = $('<div class="dialog-actions"></div>');
	for (let i=0; i<buttons.length; i++) {
		let $b = $('<button></button>')
			.text(buttons[i].text)
			.appendTo($buttons)
	}

	$buttons.appendTo($div);

	$(document.body).append($div);




	return {
		close: function() {

		}
	}
};