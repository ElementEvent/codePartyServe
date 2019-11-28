module.exports = function (req, res) {
	if( req.session.user ){
		return req.session.user
	}else{
		return res.status(500).json({
				success: true,
				err_code: 500,
				message: '未登录或者Session已丢失！'
			}
		);
	}
}