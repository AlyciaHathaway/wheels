---
title: DOM库
---

## API设计关键

 - `document.querySelectorAll`拿到的是对象，不是数组，所以要转换成数组才能使用for循环

 - 数组
	- `object.on = xxx` 是允许的
	- array是对象
	- 所以`array.on = xxx` 是允许的

 - 链式调用
	- `console.assert(items.addClass('hi') === items);`
	- 所以需要返回和items等价的array。
	- 如果前面的值没有返回array，就会打破链式调用，比如text()取值的时候

 - 函数重载
	- text()取值要判断，传递的参数是否为空

 - 遇见一个令人头疼的产品经理，你的技术会增长很快。想的东西完全没想过，但却要做到

 - `$`返回库对象只能使用库的方法，无法使用DOM方法
	- `console.assert(items.addEventListener === undefined);`
	- 只有获取到DOM对象，才可以用DOM方法，比如`items.get(0).tagName`

 - siblings API实现
	- item没有 `siblings` 方法
	- 需求要有 `xxx.siblings` 方法
	- `$item = xxx(item)、$item.siblings()`返回item的兄弟
	- 所以要生成新的对象，新的对象可以操作旧的对象
	- 扩展传给`$`的参数：可以是字符串也可以是元素
	- 如果是字符串就去迭代，如果是元素就直接push，这样数组里这一项就能用`$`的方法了

 - siblings链式调用
	- `$item.siblings()`没有addClass方法
	- 需求要有`$item.siblings().addClass`
	- `$item.siblings()`的结果是`$('li')`类似的东西

 - end()
	- 需求是siblings结束返回原数组

## others

 - console.assert断言
 - console.dir
 - chrome workspace
 - emmet
 - typeof和instanceof