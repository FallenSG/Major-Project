var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
	{
		title: { type: String, required: true },
		author_id: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
		summary: { type: String, required: true },
		isbn: { type: String, required: true },
		genre_id: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
		doc: {},
		img: { required: true },
		review_id: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
		price: { type: Number, required: true }
	}
);

const Book = mongoose.model('Book', BookSchema);

// Virtual for book's URL
function check(book) {
	console.log('checking book schema', book);
}

function saver() {
	console.log('exporting multiple');
}

//   //Export model
module.exports = { Book, check, saver };


