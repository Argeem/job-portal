const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Remote", "Full-time", "Part-time", "Internship", "Contract"],
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    salaryMin: {
      type: Number,
    },
    salaryMax: {
      type: Number,
    },
    isClosed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
