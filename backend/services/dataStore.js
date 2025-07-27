const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcryptjs');

const dataFile = path.join(__dirname, '../data/users.json');

// Initialize data file if it doesn't exist
async function initializeDataFile() {
  try {
    await fs.access(dataFile);
  } catch {
    await fs.writeFile(dataFile, JSON.stringify({ users: [], lastId: 0 }, null, 2));
  }
}

// Read all data
async function readData() {
  await initializeDataFile();
  const data = await fs.readFile(dataFile, 'utf8');
  return JSON.parse(data);
}

// Write data
async function writeData(data) {
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2));
}

// User operations
const userStore = {
  // Create new user
  async createUser(userData) {
    const data = await readData();
    const newId = data.lastId + 1;
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    
    const newUser = {
      id: newId,
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      deviceId: userData.deviceId || null,
      emergencyContacts: userData.emergencyContacts || [],
      createdAt: new Date().toISOString()
    };

    data.users.push(newUser);
    data.lastId = newId;
    await writeData(data);

    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  },

  // Find user by email
  async findByEmail(email) {
    const data = await readData();
    return data.users.find(user => user.email === email);
  },

  // Find user by ID
  async findById(id) {
    const data = await readData();
    return data.users.find(user => user.id === id);
  },

  // Update user
  async updateUser(id, updates) {
    const data = await readData();
    const userIndex = data.users.findIndex(user => user.id === id);
    
    if (userIndex === -1) return null;

    data.users[userIndex] = {
      ...data.users[userIndex],
      ...updates,
      id // Ensure ID doesn't change
    };

    await writeData(data);
    const { password, ...userWithoutPassword } = data.users[userIndex];
    return userWithoutPassword;
  },

  // Compare password
  async comparePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
};

module.exports = {
  userStore
}; 