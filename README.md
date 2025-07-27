
# IoT Safety System

A comprehensive IoT safety system with real-time location tracking, device management, and emergency alerts.
#Overview
![IMG_20250623_184312](https://github.com/user-attachments/assets/fa6b5397-ea92-4071-990b-d614bed6cb9a)
<img width="1852" height="881" alt="13" src="https://github.com/user-attachments/assets/eccdb858-68ed-4d0a-b1b0-9660aeabeb44" />
<img width="1832" height="861" alt="14" src="https://github.com/user-attachments/assets/ed3b7b44-6dbe-4524-b6bf-2120337e7021" />


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

## License
This project is licensed under the MIT License.

# MERN_IOT_Location_Tracking
Mern Stack IOT integration project, simply making a prototype of wrist band in which through IOT sensors one can get the location.

