---
title: BOM
---
## 常用API
 - Document Object Model（文档API）
 - Browser Object Model（浏览器API），都是挂在window下面
 - window.history（历史记录）
	- window.history.back()
	- window.history.forward()
	- window.history.go(-1)
	- window.history.go(1)
 - window.innerHeight（不包括tab和地址栏的高度）
 - window.location（刷新和地址栏）
	- window.location.href = "//www.baidu.com"
	- window.location.href = "http://www.baidu.com"
	- window.location.href = "https://www.baidu.com"
	- 如果不写协议则会在当前路径下添加网址
	- `.href`可以省略
	- location.protocol（协议）
	- location.hostname（域名）
	- location.port（端口）
	- location.host（域名+端口）
	- location.origin（协议+端口+域名）
	- location.pathname（路径，不包含？）
	- location.search（查询字符串，不包含锚点）
	- location.hash（锚点）
 - window.name（标签页名字）
 - window.navigator（关于浏览器的所有东西）
	- navigator.userAgent
 - window.outerHeight
 - window.pageYOffset（window.scrollY）
 - window.parent（iframe中父页面的window）
 - window.screen
	- screen.availHeight
	- screen.colorDepth
	- screen.height
 - window.self（等于window）
	- 所以永远不要用全局变量，不知不觉就把window的属性覆盖了
 - window.top（祖先，最顶层的窗口）
 - window.setTimeout（浏览器提供的定时器）

## 打开新窗口

 - `window.open('http://baidu.com', '_blank')`
 - 第二个参数默认`_blank`，如果在当前窗口打开，`_self`
 - 第三个参数设置窗口的属性
 - 需求：弹出一个登录框，登陆后刷新原页面
 - 在iframe里设置`window.opener.location.reload()`，打开它的父窗口会刷新
 - 需求：在页面正中央打开一个指定宽高的 window

## 修改查询参数

```
http://xxx.com/index.html?a=1
$.bom.search('a') // 1
$.bom.search('a', 'xxx')
http://xxx.com/index.html?a=xxx
```

 - slice过滤，split分割
 - URL里不能有中文，如果查询是中文，浏览器会根据字符编码转换成对应格式，并加%字节分隔
 - encodeURLComponet('你好')
 - decodeURLComponet(' ')