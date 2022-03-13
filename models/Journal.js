const mongoose = require('mongoose');
const { Schema } = mongoose;

const JournalSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    postedBy: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);
const JournalModel = mongoose.model('Journal', JournalSchema);
module.exports = JournalModel;
