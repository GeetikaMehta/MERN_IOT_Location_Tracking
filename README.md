# IoT Safety System

A comprehensive IoT safety system with real-time location tracking, device management, and emergency alerts.

## Features

- **Real-time Location Tracking**: Track device locations with latitude and longitude coordinates
- **Interactive Maps**: Google Maps integration for visual location display
- **Device Management**: Monitor and control connected IoT devices
- **Anonymous User Support**: Works for both authenticated and anonymous users
- **Emergency Alerts**: Real-time emergency notification system
- **Responsive UI**: Modern, mobile-friendly interface built with Material-UI

## New Features Added

### 🗺️ Maps Integration
- **Google Maps API**: Interactive map display with real-time location markers
- **Location Details**: Shows current coordinates, battery level, and signal strength
- **Emergency Alerts**: Visual indicators for emergency situations
- **Current Location**: Get user's current location using browser geolocation

### 📊 Enhanced Dashboard
- **Location Card**: Prominent display of current location with coordinates
- **Anonymous User Support**: Works without authentication using mock data
- **Real-time Updates**: Refresh location data with simulated API calls
- **Performance Optimized**: Improved UI with better loading states and animations

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Google Maps API key

### 1. Clone the Repository
```bash
git clone <repository-url>
cd IOT
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
JWT_SECRET=your_jwt_secret_here
MONGODB_URI=your_mongodb_connection_string
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
REACT_APP_API_URL=http://localhost:5000
```

### 4. Google Maps API Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Maps JavaScript API
4. Create credentials (API key)
5. Add the API key to your frontend `.env` file

### 5. Run the Application

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Usage

### For Anonymous Users
- The dashboard shows mock location data
- Click "Get Current Location" to use browser geolocation
- Refresh button simulates real-time updates
- All location data is displayed with coordinates

### For Authenticated Users
- Full access to all features
- Real location data from backend API
- Device management capabilities
- Emergency alert system

### Maps Page
- Interactive Google Maps display
- Current location marker
- Location details panel
- Battery and signal strength indicators
- Emergency status display

## API Endpoints

### Location Routes
- `POST /api/location/update` - Update device location
- `GET /api/location/latest` - Get latest location
- `GET /api/location/history` - Get location history

### Authentication Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

## Technologies Used

### Frontend
- React 18
- Material-UI (MUI)
- React Router
- Google Maps React API
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Socket.IO for real-time updates

## Project Structure

```
IOT/
├── backend/
│   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.js
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── context/
│   │   │   └── utils/
│   │   └── public/
│   └── iot/
│       └── safety_wristband.ino
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository. 