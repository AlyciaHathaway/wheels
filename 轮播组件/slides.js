
// window.slides = function(element) {
// 	console.log(parseInt(window.getComputedStyle(element).width))
// };

window.slides = function(element) {
	var $el = $(element);
	var width = $el.width();
	var count = $el.find('.slide').length;

	// 计算轮播圆点的个数，展示在view层上面
	var $ol = $('<ol class="controls"></ol>');
	for (let i=0; i<count; i++) {
		$ol.append(`<li>${i+1}</li>`)
	}
	$el.append($ol);


};








// 使用者代码
slides(document.querySelector('.slides'));