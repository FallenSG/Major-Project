var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReviewSchema = new Schema(
	{
		user_id: {},
        comment: {},
        rating: {}
	}
);

const Review = mongoose.model('Review', ReviewSchema);

module.exports = { Review };
