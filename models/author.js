var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 100 },
    date_of_birth: { type: Date },
    book_id: [{type: Schema.Types.ObjectId, ref: 'Book', required: true }],
    about: {},
    socialMediaHandles: {}
  }
);

// Virtual for author's full name
// AuthorSchema
//   .virtual('name')
//   .get(function () {
//     return this.family_name + ', ' + this.first_name;
//   });

// Virtual for author's lifespan
AuthorSchema
  .virtual('lifespan')
  .get(function () {
    return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
  });

// Virtual for author's URL 
AuthorSchema
  .virtual('url')
  .get(function () {
    return '/catalog/author/' + this._id;
  });

//Export model
var Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;


