var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
	{
		username: {},
		email: {},
		mobile: {},
		password: {},
		profile: {},
		book_id: [{}],
		img: {},
		address: {}
	}
);

const User = mongoose.model('User', UserSchema);

module.exports = { User };
