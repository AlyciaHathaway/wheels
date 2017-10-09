---
title: popover组件
---
## bug

 - 目前默认content一定在button的右边，如果content出现在button的下面
	- 取这两个元素上边线到屏幕顶端的距离相比较，如果content的值大，并且content长得矮在右边，长得高在下边
	- 取button的右边线和content的左边线到屏幕左边距相比较，如果content的值小，说明在下边
 - 如果content传入两行或多行文本，位置就会重叠
	- content支持传入HTML，CSS用户自定义
	- 相对屏幕计算距离
 - button不能出现在一行的末尾
 - button所在的容器不能绝对定位
 - 重叠两个一大一小三角形

## 库

 - Tether.js

