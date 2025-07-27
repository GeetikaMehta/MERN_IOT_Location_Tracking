// Old MongoDB model - commented out as we're using JSON file storage now
/*
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
    select: false
  },
  deviceId: {
    type: String,
    unique: true,
    sparse: true
  },
  emergencyContacts: [{
    name: String,
    phone: String,
    relationship: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
*/

// New JSON file storage model
const userModel = {
  // Validation rules
  validateUser: (userData) => {
    const errors = [];
    
    if (!userData.name) errors.push('Name is required');
    if (!userData.email) errors.push('Email is required');
    if (!userData.password) errors.push('Password is required');
    
    if (userData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.push('Please enter a valid email');
    }
    
    if (userData.password && userData.password.length < 6) {
      errors.push('Password must be at least 6 characters long');
    }
    
    return errors;
  },

  // Format user data
  formatUser: (userData) => {
    return {
      name: userData.name?.trim(),
      email: userData.email?.trim().toLowerCase(),
      password: userData.password,
      deviceId: userData.deviceId || null,
      emergencyContacts: userData.emergencyContacts || [],
      createdAt: new Date().toISOString()
    };
  }
};

module.exports = userModel;
