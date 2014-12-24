// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var app = express();

// 使用 Express 路由 API 服务 /hello 的 HTTP GET 请求
app.get('/', function(req, res) {
  res.end(JSON.stringify(require('express/package.json')));
});

// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen()
