
// window.slides = function(element) {
// 	console.log(parseInt(window.getComputedStyle(element).width))
// };

window.slides = function(element) {
	let $el = $(element);
	let $view = $el.children('.view');
	let width = $el.width();
	let count = $el.find('.slide').length;

	// 计算轮播圆点的个数，展示在view层上面
	let $ol = $('<ol class="controls"></ol>');
	for (let i=0; i<count; i++) {
		$ol.append(`<li>${i+1}</li>`)
	}
	$el.append($ol);

	// 轮播切换
	$ol.on('click', 'li', function(e) {
		let $li = $(e.currentTarget);
		let index = $li.index();
		let number = - width * index;
		$view.css({
			transform:  `translateX(${number}px)`
		})
	})
};








// 使用者代码
slides(document.querySelector('.slides'));