let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/codePartyServe', {useNewUrlParser: true});

let Schema = mongoose.Schema;

let userSchema = new Schema({
	id: {
		type: String
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	nickname: {
		type: String,
	},
	created_time: {
		type: Date,
		default: Date.now
	},
	update_time: {
		type: Date,
		default: Date.now
	},
	avatar: {
		type: String,
		default: ''
	},
	bio: {
		type: String,
		default: ''
	},
	gender: {
		type: Number,
		enum: [-1, 0, 1],
		default: -1
	},
	birthday: {
		type: Date
	},
	status: {
		type: Number,
		enum: [0, 1, 2],
		default: 0
	},
	role:{
		type: Number,
		enum: [0, 1, 2]
	}

});

module.exports = mongoose.model('User', userSchema);
