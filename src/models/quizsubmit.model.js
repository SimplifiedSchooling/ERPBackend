const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const quizSubmitSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'quize',
      required: true,
    },
    selectedOptions: [Number],
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
quizSubmitSchema.plugin(toJSON);
quizSubmitSchema.plugin(paginate);

const QuizSubmmit = mongoose.model('QuizSubmit', quizSubmitSchema);

module.exports = QuizSubmmit;
