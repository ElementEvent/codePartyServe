const express = require('express');
const md5 = require('blueimp-md5');
const uuid = require('node-uuid');
let User = require('../models/user');
let router = express.Router();

// 获取用户列表
router.get('/getUserList', function (req, res) {

	User.find().then(user => {
		console.log(user);
		res.status(200).json({
				success: true,
				err_code: 0,
				message: '请求成功！',
				data: user,
			}
		);
	}).catch(err => {
		res.status(500).json({
				success: true,
				err_code: 0,
				message: '请求失败！',
			}
		);
	})

});

// 新增用户
router.post('/addUserInfo', function (req, res) {
	let body = req.body;
	User.findOne({
		username: body.username
	}).then(user => {
		if (user) {
			return res.status(200).json({
				success: true,
				err_code: 1,
				message: '该用户已存在!'
			})
		}

		//用户不存在进行新增
		body.password = md5(md5(body.password));
		body.id = uuid.v1();
		new User(body).save().then(user => {
			res.status(200).json({
				success: true,
				err_code: 0,
				message: '注册成功！',
				data: user
			});
		}).catch(err => {
			res.status(500).json({
				success: false,
				err_code: 500,
				message: '服务端错误'
			});
		})

	}).catch(err => {
		res.status(500).json({
			success: false,
			err_code: 500,
			message: '服务端错误'
		});
	})
});

// 用户登陆
router.post('/login', function (req, res) {
	let body = req.body;
	User.findOne({
		username: body.username,
		password: body.password
	}).then(user => {
		if( user ){
			return res.status(200).json({
				success: true,
				err_code: 0,
				message: '登陆成功',
				data: user
			})
		}

		res.status(200).json({
			success: true,
			err_code: 2,
			message: '用户名或密码错误！'
		})

	}).catch(err => {
		res.status(500).json({
			success: true,
			err_code: 500,
			message: '服务器错误！'
		})
	})
})

module.exports = router;
