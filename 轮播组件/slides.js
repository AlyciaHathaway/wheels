
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
		// 连续轮播
		if (index === 0) {
			// 克隆假1，放到3后面
			let $li = $el.find('.slide').eq(0).clone();
			$li.appendTo($view);
			let number = - width * count;
			$view.css({
				transform:  `translateX(${number}px)`
			});
			// 监听过渡动画结束
			$view.one('transitionend', function() {
				console.log('过渡效果结束');
				$li.remove();
				let oldTrasition = $view.css('transition');
				$view.css({
					transition: 'none',
					transform:  `translateX(0px)`
				});
				// offset强制分开上下两个CSS渲染
				$view.offset();
				$view.css('transition', oldTrasition);
				currentIndex = index;
			});
			// 不再执行后续语句
			return
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
slides(document.querySelector('.slides')[0]);
slides(document.querySelector('.slides')[1]);