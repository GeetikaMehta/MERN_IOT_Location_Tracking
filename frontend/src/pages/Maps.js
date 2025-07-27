import React, { useState, useEffect, useCallback } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Chip,
  IconButton,
  Tooltip,
  CircularProgress,
  Alert
} from '@mui/material';
import {
  LocationOn,
  MyLocation,
  Refresh,
  BatteryChargingFull,
  SignalCellularAlt,
  AccessTime
} from '@mui/icons-material';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

// Fix for default markers in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Component to update map center(to zoom or pan) when location changes
function MapUpdater({ center }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
}

const Maps = () => {
  const { user } = useAuth();
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mapCenter, setMapCenter] = useState([40.7128, -74.0060]); // Default to NYC

  // Mock location data for anonymous users
  const mockLocationData = {
    coordinates: {
      latitude: 40.7128,
      longitude: -74.0060
    },
    locationName: 'Chandigarh, India',
    batteryLevel: 85,
    signalStrength: 90,
    timestamp: new Date().toISOString(),
    isEmergency: false
  };

  // Fetch location data
  const fetchLocationData = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      if (token) {
        // Try to fetch from API if user is authenticated
        try {
          const response = await axios.get('/api/location/latest', {
            headers: { Authorization: `Bearer ${token}` }
          });

          if (response.data.success) {
            const location = response.data.location;
            setLocationData(location);
            
            // Update map center to user's location
            setMapCenter([location.coordinates.latitude, location.coordinates.longitude]);
            return;
          }
        } catch (apiError) {
          console.log('API not available, using mock data');
        }
      }
      
      // Use mock data for anonymous users or when API fails
      setLocationData(mockLocationData);
      setMapCenter([mockLocationData.coordinates.latitude, mockLocationData.coordinates.longitude]);
    } catch (err) {
      console.error('Error fetching location:', err);
      setError('Failed to fetch location data');
      setLocationData(mockLocationData);
    } finally {
      setLoading(false);
    }
  }, []);

  // Get user's current location through browser geolocation 
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationData({
            ...locationData,
            coordinates: { latitude, longitude },
            timestamp: new Date().toISOString()
          });
          setMapCenter([latitude, longitude]);
          setLoading(false);
        },
        (error) => {
          console.error('Error getting current location:', error);
          setError('Unable to get current location');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser');
    }
  };
 // this effect runs once to fetch initial location data 
  useEffect(() => {
    fetchLocationData();
  }, [fetchLocationData]);

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #E8F0FE 0%, #F5F6FA 100%)',
      py: 5,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle background texture */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.08,
        zIndex: 0,
        background: 'url("https://www.transparenttextures.com/patterns/cubes.png") repeat',
        pointerEvents: 'none',
      }} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#1976D2',
              fontFamily: 'Poppins, Roboto, Arial, sans-serif',
              fontSize: '1.35rem',
              mb: 0.5
            }}
          >
            <LocationOn sx={{ mr: 1, fontSize: 22, color: '#41AEA9' }} />
            Live Location Tracking
          </Typography>
          <Typography variant="body2" sx={{ color: '#5A6A85', fontFamily: 'Poppins, Roboto, Arial, sans-serif', fontSize: '1rem' }}>
            View your device's real-time position and status on the map below.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card elevation={4} sx={{ height: 420, borderRadius: 5, overflow: 'hidden', mb: 2, boxShadow: '0 8px 32px #1976D233' }}>
              <MapContainer center={mapCenter} zoom={15} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locationData && (
                  <Marker position={[locationData.coordinates.latitude, locationData.coordinates.longitude]} icon={customIcon}>
                    <Popup>
                      <Typography variant="body2" sx={{ fontFamily: 'Poppins, Roboto, Arial, sans-serif' }}>
                        {locationData.locationName || 'Current Location'}
                      </Typography>
                    </Popup>
                  </Marker>
                )}
                <MapUpdater center={mapCenter} />
              </MapContainer>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ borderRadius: 4, p: 3, mb: 2, background: '#fff', boxShadow: '0 2px 12px #41AEA933' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#41AEA9', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 1, fontSize: '1.08rem' }}>
                Device Info
              </Typography>
              {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
              <Box sx={{ mb: 1 }}>
                <Chip icon={<MyLocation sx={{ color: '#41AEA9' }} />} label={`Lat: ${locationData.coordinates.latitude.toFixed(6)}`} sx={{ mr: 1, fontFamily: 'Poppins, Roboto, Arial, sans-serif', fontSize: '0.93rem', bgcolor: '#E8F0FE', color: '#1976D2' }} />
                <Chip icon={<MyLocation sx={{ color: '#41AEA9' }} />} label={`Lng: ${locationData.coordinates.longitude.toFixed(6)}`} sx={{ fontFamily: 'Poppins, Roboto, Arial, sans-serif', fontSize: '0.93rem', bgcolor: '#E8F0FE', color: '#1976D2' }} />
              </Box>
              <Box sx={{ mb: 1 }}>
                <Chip icon={<BatteryChargingFull sx={{ color: '#41AEA9' }} />} label={`Battery: ${locationData.batteryLevel || '--'}%`} sx={{ mr: 1, fontFamily: 'Poppins, Roboto, Arial, sans-serif', fontSize: '0.93rem', bgcolor: '#E8F0FE', color: '#1976D2' }} />
                <Chip icon={<SignalCellularAlt sx={{ color: '#41AEA9' }} />} label={`Signal: ${locationData.signalStrength || '--'}%`} sx={{ fontFamily: 'Poppins, Roboto, Arial, sans-serif', fontSize: '0.93rem', bgcolor: '#E8F0FE', color: '#1976D2' }} />
              </Box>
              <Box sx={{ mb: 1 }}>
                <Chip icon={<AccessTime sx={{ color: '#41AEA9' }} />} label={formatTimestamp(locationData.timestamp)} sx={{ fontFamily: 'Poppins, Roboto, Arial, sans-serif', fontSize: '0.93rem', bgcolor: '#E8F0FE', color: '#1976D2' }} />
              </Box>
              <Tooltip title="Get Current Location">
                <IconButton onClick={getCurrentLocation} sx={{ bgcolor: '#E8F0FE', color: '#41AEA9', '&:hover': { bgcolor: '#A6F6F1' } }}>
                  <Refresh />
                </IconButton>
              </Tooltip>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Maps; 