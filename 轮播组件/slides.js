
// window.slides = function(element) {
// 	console.log(parseInt(window.getComputedStyle(element).width))
// };

window.slides = function(element) {
	let $el = $(element);
	let $view = $el.children('.view');
	let width = $el.width();
	let count = $el.find('.slide').length;
	let currentIndex = 0;
	let timerID;

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
		goToSlide(index);
	});

	// 鼠标悬浮时暂停轮播
	$view.on('mouseenter', function() {
		window.clearInterval(timerID)
	});
	$view.on('mouseleave', function() {
		autoPlay()
	});

	// 检查保护
	function goToSlide(index) {
		if (index < 0) {
			index = count - 1
		}else if (index >= count) {
			index = 0
		}
		let number = - width * index;
		$view.css({
			transform:  `translateX(${number}px)`
		});
		currentIndex = index;
	}

	// 自动播放
	function autoPlay() {
		timerID = setInterval(function() {
			goToSlide(currentIndex + 1)
		},3000)
	}

	autoPlay();

};








// 使用者代码
slides(document.querySelector('.slides'));