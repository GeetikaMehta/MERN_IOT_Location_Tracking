const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  deviceId: {
    type: String,
    required: true
  },
  coordinates: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  locationName: {
    type: String,
    required: true
  },
  isEmergency: {
    type: Boolean,
    default: false
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  batteryLevel: {
    type: Number,
    min: 0,
    max: 100
  },
  signalStrength: {
    type: Number,
    min: 0,
    max: 100
  }
});

// Index for faster queries
locationSchema.index({ userId: 1, timestamp: -1 });
locationSchema.index({ deviceId: 1, timestamp: -1 });

const Location = mongoose.model('Location', locationSchema);

module.exports = Location; 