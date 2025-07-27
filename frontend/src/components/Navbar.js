import React from 'react';
import { AppBar, Toolbar, Typography, Stack, Button, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const NAVBAR_HEIGHT = 64;

const Navbar = () => {
  const navigate = useNavigate();
  // Placeholder for logo
  const Logo = (
    <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/') }>
      <Box sx={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #1976D2 60%, #90CAF9 100%)', mr: 1 }} />
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: 'Poppins, Roboto, Arial, sans-serif',
          fontWeight: 700,
          color: '#1976D2',
          letterSpacing: 1,
          fontSize: '1.1rem',
        }}
      >
        IoT Safety
      </Typography>
    </Box>
  );

  return (
    <AppBar position="fixed" elevation={0} sx={{
      background: '#fff',
      borderRadius: '0 0 20px 20px',
      boxShadow: '0 2px 12px rgba(25, 118, 210, 0.06)',
      px: { xs: 1, sm: 4 },
      py: 0.5,
      zIndex: 1200,
      height: NAVBAR_HEIGHT,
      justifyContent: 'center',
    }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: NAVBAR_HEIGHT, px: 0 }}>
        {Logo}
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button
            color="inherit"
            onClick={() => navigate('/home')}
            sx={{
              fontFamily: 'Poppins, Roboto, Arial, sans-serif',
              fontWeight: 500,
              color: '#222',
              px: 1.5,
              borderRadius: 2,
              fontSize: '0.95rem',
              minWidth: 0,
              '&:hover': { background: '#F5F6FA', color: '#1976D2' },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/dashboard')}
            sx={{
              fontFamily: 'Poppins, Roboto, Arial, sans-serif',
              fontWeight: 500,
              color: '#222',
              px: 1.5,
              borderRadius: 2,
              fontSize: '0.95rem',
              minWidth: 0,
              '&:hover': { background: '#F5F6FA', color: '#1976D2' },
            }}
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/maps')}
            sx={{
              fontFamily: 'Poppins, Roboto, Arial, sans-serif',
              fontWeight: 500,
              color: '#222',
              px: 1.5,
              borderRadius: 2,
              fontSize: '0.95rem',
              minWidth: 0,
              '&:hover': { background: '#F5F6FA', color: '#1976D2' },
            }}
          >
            Map
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/about')}
            sx={{
              fontFamily: 'Poppins, Roboto, Arial, sans-serif',
              fontWeight: 500,
              color: '#222',
              px: 1.5,
              borderRadius: 2,
              fontSize: '0.95rem',
              minWidth: 0,
              '&:hover': { background: '#F5F6FA', color: '#1976D2' },
            }}
          >
            About
          </Button>
        </Stack>
        {/* Mobile menu icon (not functional, for visual only) */}
        <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: '#1976D2' }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
