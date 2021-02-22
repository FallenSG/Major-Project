var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
	{
		username: {type: String, required: true},
		email: {type: String, unique: true, lowercase: true},
		mobile: {type: Number, unique: true},
		password: {type: String, required: true},
		profile: {type: String},
		book_id: [{type: Schema.Types.ObjectId, ref: 'Book'}],
		img: {},
		address: {type: String}
	}
);

UserSchema.virtual('validate')
	.get(function(data){
		//comment
		console.log(data);
		if(mobile){
			UserSchema.find(data.mobile, function(err, result){
				if(err) throw err;
				console.log('sucess' + result);
				data.save();
			});
		}
		else{
			UserSchema.find(data.email, function(err, result){
				if(err) throw err;
				console.log('sucess' + result);
				data.save();
			});
		}
	});

const User = mongoose.model('User', UserSchema);

module.exports = User;


