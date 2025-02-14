const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: String,
    leadTeacher: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    startDate: Date,
    endDate: Date,
    ta: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    courseImg: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['ON', 'OFF'], default: 'ON', required: true },
    students: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }]
  },
  {
    timestamps: true
  }
);

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
