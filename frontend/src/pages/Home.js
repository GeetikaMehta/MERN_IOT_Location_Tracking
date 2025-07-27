import React from 'react';
import { Box, Typography, Button, Container, Stack, Paper, Grid, Card, CardContent, Avatar } from '@mui/material';
import Navbar from '../components/Navbar';

const testimonial = {
  quote: "We couldn't be happier with their professionalism and quick turnaround time.",
  author: 'VP, National Food Bakery',
};

const features = [
  {
    title: 'Get Results Faster',
    description: 'Don\'t wait long for critical data. Our integrated IoT system provides real-time safety tracking.',
    img: '',
  },
  {
    title: 'Test with Confidence',
    description: 'Get lab-like results you can trust with your IoT wristband. Reliable, accurate, and secure.',
    img: '',
  },
  {
    title: 'Pricing That Grows With You',
    description: 'Flexible plans for individuals or teams. Only pay for what you need.',
    img: '',
  },
  {
    title: 'Talk Directly with Experts',
    description: 'We assign a certified IoT specialist to your account to provide the knowledge and expertise you deserve.',
    img: '',
  },
];

const NAVBAR_HEIGHT = 64;
const ACCENT = '#41AEA9';
const ACCENT_LIGHT = '#A6F6F1';
const BG_TEXTURE = '#E8F0FE';

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', width: '100vw', background: 'linear-gradient(135deg, #E8F0FE 0%, #F5F6FA 100%)', pb: 6 }}>
      <Navbar />
      <Container maxWidth="md" sx={{ pt: `${NAVBAR_HEIGHT + 32}px`, pb: 4 }}>
        <Paper elevation={3} sx={{ borderRadius: 6, p: { xs: 2, sm: 4 }, mb: 4, mt: 1, background: '#fff', boxShadow: '0 4px 24px #41AEA933' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, fontFamily: 'Poppins, Roboto, Arial, sans-serif', color: ACCENT, mb: 1, fontSize: '2rem' }}>
            Real-Time IoT Safety Monitoring
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#5A6A85', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 2, fontSize: '1.05rem' }}>
            Every device deserves to be safe. Our platform helps you track, monitor, and respond in real time—anywhere, anytime.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" mb={1}>
            {/* Removed old price/devices blocks for a cleaner look */}
          </Stack>
          <Button
            variant="contained"
            size="medium"
            sx={{
              background: ACCENT,
              color: '#fff',
              fontFamily: 'Poppins, Roboto, Arial, sans-serif',
              fontWeight: 600,
              borderRadius: 2,
              px: 3,
              py: 1,
              fontSize: '1rem',
              boxShadow: `0 2px 8px ${ACCENT_LIGHT}55`,
              mt: 1,
              mb: 0.5,
              '&:hover': { background: ACCENT_LIGHT, color: '#222' },
            }}
          >
            Get Started
          </Button>
        </Paper>
        {/* Testimonial */}
        <Paper elevation={0} sx={{ background: ACCENT_LIGHT, borderRadius: 4, p: 2, mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ width: 40, height: 40, bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: 24 }}>“</Avatar>
          <Box>
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#222', fontFamily: 'Poppins, Roboto, Arial, sans-serif', fontSize: '1rem' }}>
              {testimonial.quote}
            </Typography>
            <Typography variant="caption" sx={{ color: '#5A6A85', fontFamily: 'Poppins, Roboto, Arial, sans-serif', fontSize: '0.9rem' }}>
              {testimonial.author}
            </Typography>
          </Box>
        </Paper>
        {/* Why Section */}
        <Box mb={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: ACCENT, fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 0.5, fontSize: '1.15rem' }}>
            Why Choose IoT Safety?
          </Typography>
          <Typography variant="body2" sx={{ color: '#5A6A85', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 1, fontSize: '1rem' }}>
            Our IoT Safety System is pivotal for anyone who values security and peace of mind. It helps you identify risks, respond quickly, and keep your loved ones or assets safe—at all times.
          </Typography>
        </Box>
        {/* Features Grid */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, color: ACCENT, fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 2, fontSize: '1.3rem' }}>
            Reliable Monitoring. Fast Response.
          </Typography>
          <Grid container spacing={2}>
            {features.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card elevation={0} sx={{ background: ACCENT_LIGHT, borderRadius: 3, p: 1.5, height: '100%' }}>
                  <CardContent sx={{ p: 1 }}>
                    {/* Placeholder for icon/image */}
                    <Box sx={{ width: 32, height: 32, bgcolor: ACCENT, borderRadius: '50%', mb: 1.5, mx: 'auto' }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#222', fontFamily: 'Poppins, Roboto, Arial, sans-serif', mb: 0.5, textAlign: 'center', fontSize: '1rem' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#5A6A85', fontFamily: 'Poppins, Roboto, Arial, sans-serif', textAlign: 'center', fontSize: '0.95rem' }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      {/* Minimal Footer */}
      <Box sx={{ width: '100%', py: 2, textAlign: 'center', color: '#A0A0A0', fontFamily: 'Poppins, Roboto, Arial, sans-serif', fontWeight: 400, fontSize: '0.95rem', letterSpacing: 1, position: 'relative', bottom: 0, left: 0, zIndex: 10 }}>
        © 2025 Reserved
      </Box>
    </Box>
  );
};

export default Home;
