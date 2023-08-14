import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator';

const blogSchema = new mongoose.Schema({

  headline: {
    type: String,
    required: [true, 'Please provide a Blogname.'],
  },

  // verified: {
  //   type: Boolean,
  //   default: true
  // },

  visitorCount: {
    type: Number,
    default: 0
  },

  description: {
    type: String,
    maxlength: [160, 'bio cannot be more than 160 characters'],
  },
  body: {
    type: String,
    required: [true, 'Please provide a Blogname.'],
  },

  author: {
    name : {
      type: String,
      maxlength: [25, 'Please provide a password.'],
    },
    about : {
      type: String,
    }
  },

  thumbnail: {
    public_id: {
      type: String,
    },
    url: {
      type: String
    }
  },

  role: {
    type: String,
    default: 'Blog'
  },
  createdAT: {
    type: Date,
    default: Date.now
  },

  
})
blogSchema.plugin(mongooseUniqueValidator);
export default mongoose.models.Blog || mongoose.model('Blog', blogSchema)