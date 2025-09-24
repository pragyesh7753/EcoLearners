const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  media: [
    {
      type: String,
      url: String
    }
  ],
  quiz : [
    {
        question: {
            type: String,
            required: true  
        },
        options : [String],
        answer : {
            type: String,
            required: true
        },
        ecopoints : {
            type: Number,
            default: 10
        }
    }
  ],
category : {
    type : String,
    required: true,
    enum : ['water', 'energy', 'waste', 'transportation', 'food', 'biodiversity', 'pollution', 'climate change'],
    default : 'general'
},

}, { timestamps: true });
    

module.exports = mongoose.model('Lesson', LessonSchema);