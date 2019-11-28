const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let router = require('./routes/index');
let app = express();

let session = require('express-session');

/**
 *
 *配置处理路由传递参数的插件
 *
 *
 * */

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
	secret: 'codeParty',
	resave: false,
	saveUninitialized: false
}));

for(let routerKey in router){
	app.use(router[routerKey]);
}

app.listen(3200, function () {
	console.log('running...');
})