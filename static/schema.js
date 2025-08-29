const mongoose = require('mongoose');

// ------------------- Review Schema -------------------
const reviewSchema = new mongoose.Schema({
  reviewerName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
});

// ------------------- Product Schema -------------------
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['electronics', 'fashion', 'home', 'books']
  },
  price: {
    type: Number,
    required: true,
    min: 1
  },
  inStock: {
    type: Boolean,
    default: true
  },
  releaseDate: {
    type: Date
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }]
});

// ------------------- Compile Models -------------------
const Product = mongoose.model('Product', productSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = { Product, Review };
