const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  image: {type: String},
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = {CategoryModel};


