import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  Card,
  CardContent
} from '@mui/material';
import {
  Security,
  LocationOn,
  NotificationsActive,
  Speed
} from '@mui/icons-material';

const About = () => {
  const features = [
    {
      icon: <Security sx={{ fontSize: 28, color: '#1976D2' }} />,
      title: 'Emergency Alert System',
      description: 'One-touch emergency button that instantly notifies your trusted contacts with your real-time location.'
    },
    {
      icon: <LocationOn sx={{ fontSize: 28, color: '#1976D2' }} />,
      title: 'Real-time Location Tracking',
      description: 'Continuous GPS tracking ensures your location is always known to your emergency contacts.'
    },
    {
      icon: <NotificationsActive sx={{ fontSize: 28, color: '#1976D2' }} />,
      title: 'Instant Notifications',
      description: 'Immediate alerts to emergency contacts with detailed location information and status updates.'
    },
    {
      icon: <Speed sx={{ fontSize: 28, color: '#1976D2' }} />,
      title: 'Fast Response',
      description: 'Quick response system that helps ensure help arrives when you need it most.'
    }
  ];

  return (
    <Box sx={{ background: '#F5F6FA', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 4, borderRadius: 4, background: '#fff' }}>
          <Typography variant="h5" component="h1" align="center" sx={{ fontWeight: 700, color: '#1976D2', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 1, fontSize: '1.45rem' }}>
            About Our Safety Wristband
          </Typography>
          <Typography variant="body1" align="center" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 2, fontSize: '1rem' }}>
            Empowering women with technology for enhanced personal safety
          </Typography>
        </Paper>
        <Grid container spacing={3} mb={2}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ height: '100%', borderRadius: 3, background: '#F0F4F8', p: 1 }} elevation={0}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ mr: 2 }}>{feature.icon}</Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#222', fontFamily: 'Poppins, Roboto, Arial, sans-serif', fontSize: '0.98rem' }}>
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', fontSize: '0.93rem' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 4, borderRadius: 4, background: '#fff' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1976D2', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 1, fontSize: '1.08rem' }}>
            How It Works
          </Typography>
          <Typography variant="body2" sx={{ color: '#222', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 1, fontSize: '0.97rem' }}>
            Our safety wristband is designed to provide peace of mind through advanced technology and reliable connectivity. The device combines GPS tracking, emergency alert capabilities, and real-time communication to ensure your safety at all times.
          </Typography>
          <Typography variant="body2" sx={{ color: '#222', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 1, fontSize: '0.97rem' }}>
            When you press the emergency button, the system immediately:
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <Typography component="li" variant="body2" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 0.5, fontSize: '0.93rem' }}>
              Sends your exact location to your emergency contacts
            </Typography>
            <Typography component="li" variant="body2" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 0.5, fontSize: '0.93rem' }}>
              Activates continuous location tracking
            </Typography>
            <Typography component="li" variant="body2" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 0.5, fontSize: '0.93rem' }}>
              Notifies all emergency contacts via SMS and email
            </Typography>
            <Typography component="li" variant="body2" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 0.5, fontSize: '0.93rem' }}>
              Provides real-time updates on your status
            </Typography>
          </Box>
        </Paper>
        <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, background: '#fff' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1976D2', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 1, fontSize: '1.08rem' }}>
            Safety Features
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#222', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 1, fontSize: '0.97rem' }}>
                Hardware Features
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Typography component="li" variant="body2" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 0.5, fontSize: '0.93rem' }}>
                  Water-resistant design
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 0.5, fontSize: '0.93rem' }}>
                  Long-lasting battery life
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 0.5, fontSize: '0.93rem' }}>
                  Comfortable, lightweight design
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 0.5, fontSize: '0.93rem' }}>
                  Durable construction
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#222', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 1, fontSize: '0.97rem' }}>
                Software Features
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Typography component="li" variant="body2" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 0.5, fontSize: '0.93rem' }}>
                  Real-time location tracking
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 0.5, fontSize: '0.93rem' }}>
                  Multiple emergency contacts
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 0.5, fontSize: '0.93rem' }}>
                  Location history
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: '#6B7280', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 0.5, fontSize: '0.93rem' }}>
                  Battery and signal monitoring
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default About; 