### @skit/title

---

## 特性

-   动态设置 `document` 对象标题属性；

-   可配置固定的前缀、后缀；

-   兼容 iOS/MacOS 系统下的 SPA 应用，解决 SPA 动态设置文档标题无效的问题；

-   支持 TypeScript。

---

## 用法

安装：

```shell
npm install @skit/title
```

导入：

```javascript
// require 方式
const $$title = require('@skit/title');

// import 方式
import $$title from '@skit/title';
```

基本用法：

```javascript
// 设置标题，设置后文档标题为 'This is a Title'。
$$title.setTitle('This is a Title');

// 设置前缀，设置后文档标题为 'PREFIX - This is a Title'。
$$title.setPrefix('PREFIX - ');

// 设置后缀，设置后文档标题为 'PREFIX - This is a Title | SUFFIX'。
$$title.setSuffix(' | SUFFIX');
```

高级技巧：

```javascript
// 兼容 iOS/MacOS 的原理是在页面中创建一个隐藏的 iframe，并设置其 src 属性。
// 默认的加载路径是 ‘/favicon.ico’。
// 如果你的网站不支持这个路径，那么可以指定为其他的路径。
$$title.withHackSource('http://example.com/hack.txt');

// 还可以清空前缀和后缀，直接修改文档标题。
$$title.setTitle('This is a Title', true);
```
