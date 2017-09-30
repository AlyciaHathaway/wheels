
// var tabs = document.querySelector('.tabs');
// dom.on(tabs, 'click', 'ol[data-role="nav"]>li', function(a, b) {
// 	let index = dom.index(b);
// 	b.classList.add('active')
// });

window.tabs = function(element) {
	var $tabs = $(element);

	let selector = 'ol[data-role="nav"]>li';
	$tabs.on('click', selector, e=> {
		let $li = $(e.currentTarget);
		let index = $li.index();
		$li.addClass('active').siblings().removeClass('active');
		$li.closest('ol[data-role="nav"]').siblings('ol[data-role="panels"]')
			.find('li').eq(index)
			.addClass('active')
			.siblings().removeClass('active')
	});
};



// 别人的代码

tabs(document.querySelectorAll('.tabs')[0]);