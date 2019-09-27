const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const articleSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: 'Post content is required',
    },
    image: {
      type: String,
    },
    postedBy: { type: ObjectId, ref: 'User' },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  /* don't want to create our indices every time (nice for development, but can result in a performance hit) */
  { autoIndex: false },
);

/* Kind of like a middleware function after creating our schema (since we have access to next) */
/* Must be a function declaration (not an arrow function), because we want to use 'this' to reference our schema */
const autoPopulatePostedBy = next => {
  this.populate('postedBy', '_id name');
  next();
};

/* We're going to need to populate the 'articleedBy' field virtually every time we do a findOne / find query, so we'll just do it as a pre hook here upon creating the schema */
articleSchema.pre('findOne', autoPopulatePostedBy).pre('find', autoPopulatePostedBy);
/* Create index on keys for more performant querying/article sorting */
articleSchema.index({ postedBy: 1, createdAt: 1 });

module.exports = mongoose.model('Article', articleSchema);
