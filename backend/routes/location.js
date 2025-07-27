const express = require('express');
const router = express.Router();
const Location = require('../models/Location');
const User = require('../models/User');
const jwt = require('jsonwebtoken');



// Middleware to verify JWT token
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};



// Update location
router.post('/update', auth, async (req, res) => {
  try {
    const { latitude, longitude, locationName, batteryLevel, signalStrength, isEmergency } = req.body;

    // Validate required fields
    if (!latitude || !longitude) {
      return res.status(400).json({ message: 'Location coordinates are required' });
    }

    // Create new location entry
    const location = new Location({
      userId: req.user._id,
      coordinates: {
        latitude,
        longitude
      },
      locationName: locationName || 'Unknown Location',
      batteryLevel: batteryLevel || 100,
      signalStrength: signalStrength || 100,
      isEmergency: isEmergency || false,
      timestamp: new Date()
    });

    await location.save();

    res.json({
      success: true,
      message: 'Location updated successfully',
      location
    });
  } catch (error) {
    console.error('Location update error:', error);
    res.status(500).json({ message: 'Failed to update location' });
  }
});


// Get latest location
router.get('/latest', auth, async (req, res) => {
  try {
    const location = await Location.findOne({ userId: req.user._id })
      .sort({ timestamp: -1 })
      .limit(1);

    if (!location) {
      return res.status(404).json({ message: 'No location data found' });
    }

    res.json({
      success: true,
      location
    });
  } catch (error) {
    console.error('Get latest location error:', error);
    res.status(500).json({ message: 'Failed to fetch location' });
  }
});


// Get location history
router.get('/history', auth, async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    let query = { userId: req.user._id };

    // Add date range if provided
    if (startDate && endDate) {
      query.timestamp = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const locations = await Location.find(query)
      .sort({ timestamp: -1 })
      .limit(100);

    res.json({
      success: true,
      locations
    });
  } catch (error) {
    console.error('Get location history error:', error);
    res.status(500).json({ message: 'Failed to fetch location history' });
  }
});

module.exports = router; 