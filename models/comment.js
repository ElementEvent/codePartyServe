let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/codePartyServe', {useNewUrlParser: true});

let Schema = mongoose.Schema;

let commentSchema = new Schema({
	id: {
		type: String
	},
	userName: {
		type: String,
		required: true
	},
	userId: {
		type: String,
		required: true
	},
	comment: {
		type: String,
		required: true
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

});

module.exports = mongoose.model('Comment', commentSchema);
