const express = require('express');
const uuid = require('node-uuid');
let Comment = require('../models/comment');
let router = express.Router();
let querySession = require('../middlewares/querySession');

// 获取评论列表
router.get('/getCommentsList', function (req, res) {
	console.log(req.session.user);

	Comment.find().then(comment=>{
		res.status(200).json({
				success: true,
				err_code: 0,
				message: '请求成功！',
				data: comment,
			}
		);
	}).catch(err=>{
		res.status(500).json({
				success: true,
				err_code: 0,
				message: '请求失败！' + err,
			}
		);
	})
});

// 新增评论
router.post('/saveCommentInfo', function (req, res) {
	let body = req.body;

	body.id = uuid.v1();
	new Comment(body).save().then(comment=>{
		res.status(200).json({
				success: true,
				err_code: 0,
				message: '请求成功！',
				data: comment,
			}
		);
	}).catch(err=>{
		res.status(500).json({
				success: true,
				err_code: 0,
				message: '新增失败！' + err,
			}
		);
	})
});

module.exports = router;
