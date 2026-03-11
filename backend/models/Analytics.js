const mongoose = require("mongoose");

const AnalyticsSchema = new mongoose.Schema(
  {
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalJobsPosted: {
      type: Number,
      default: 0,
    },
    totalApplicationsReceived: {
      type: Number,
      default: 0,
    },
    totalHires: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Analytics = mongoose.model("Analytics", AnalyticsSchema);
module.exports = Analytics;
