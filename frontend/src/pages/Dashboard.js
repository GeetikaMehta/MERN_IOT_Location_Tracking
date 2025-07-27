import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, CircularProgress, Button, Grid, Divider } from '@mui/material';
import { MyLocation } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

// Mock location data for demonstration
const mockLocationData = {
  latitude: 40.7128,
  longitude: -74.0060,
  lastUpdate: new Date().toISOString(),
};

const Dashboard = () => {
  const theme = useTheme();
  const [locationData, setLocationData] = useState(mockLocationData);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationData({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            lastUpdate: new Date().toISOString(),
          });
          setLoading(false);
        },
        (error) => {
          setLoading(false);
        }
      );
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: '#F5F6FA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 6,
      }}
    >
      <Card
        sx={{
          width: { xs: '95%', sm: 600, md: 800 },
          borderRadius: 4,
          boxShadow: '0 4px 24px rgba(25, 118, 210, 0.08)',
          border: '1.5px solid #E3EAF2',
          background: '#fff',
        }}
      >
        <Grid container>
          {/* Left: Location Info */}
          <Grid item xs={12} md={6}>
            <CardContent sx={{ p: { xs: 3, sm: 4 }, textAlign: 'center' }}>
              <MyLocation sx={{ fontSize: 40, color: '#1976D2', mb: 1 }} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Poppins, Roboto, Arial, sans-serif',
                  fontWeight: 700,
                  color: '#1976D2',
                  mb: 1,
                  fontSize: '1.15rem',
                }}
              >
                Current Coordinates
              </Typography>
              {loading ? (
                <CircularProgress sx={{ color: '#1976D2', my: 2 }} />
              ) : (
                <>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
                      color: '#333',
                      mb: 0.5,
                      fontSize: '1rem',
                    }}
                  >
                    Latitude
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
                      color: '#1976D2',
                      mb: 1,
                      fontSize: '0.98rem',
                    }}
                  >
                    {locationData.latitude.toFixed(6)}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
                      color: '#333',
                      mb: 0.5,
                      fontSize: '1rem',
                    }}
                  >
                    Longitude
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
                      color: '#1976D2',
                      mb: 1,
                      fontSize: '0.98rem',
                    }}
                  >
                    {locationData.longitude.toFixed(6)}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: '#A0A0A0', fontFamily: 'Poppins, Roboto, Arial, sans-serif', fontSize: '0.92rem' }}
                  >
                    Last update: {new Date(locationData.lastUpdate).toLocaleTimeString()}
                  </Typography>
                </>
              )}
              <Button
                variant="contained"
                size="medium"
                sx={{ mt: 3, fontFamily: 'Poppins, Roboto, Arial, sans-serif', fontWeight: 600, bgcolor: '#1976D2', color: '#fff', borderRadius: 2, fontSize: '1rem', '&:hover': { bgcolor: '#1565C0' } }}
                onClick={getCurrentLocation}
                startIcon={<MyLocation />}
                disabled={loading}
              >
                Get Current Location
              </Button>
            </CardContent>
          </Grid>
          {/* Divider for vertical split on md+ */}
          <Grid item md={1} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'stretch' }}>
            <Divider orientation="vertical" flexItem sx={{ mx: 0, my: 3, borderColor: '#E3EAF2' }} />
          </Grid>
          {/* Right: Status or Metrics (placeholder) */}
          <Grid item xs={12} md={5}>
            <CardContent sx={{ p: { xs: 3, sm: 4 }, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Poppins, Roboto, Arial, sans-serif',
                  fontWeight: 700,
                  color: '#1976D2',
                  mb: 2,
                  fontSize: '1.1rem',
                }}
              >
                Device Status
              </Typography>
              <Typography variant="body2" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', fontSize: '0.98rem' }}>
                All systems operational.
              </Typography>
              {/* Add more metrics or charts here as needed */}
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Dashboard; 