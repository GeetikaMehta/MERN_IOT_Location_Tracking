import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CircularProgress, Box, CssBaseline } from '@mui/material';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Maps from './pages/Maps';
import About from './pages/About';

// Classy Techy Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0F172A', // Deep Blue-Grey
      light: '#1E293B',
      dark: '#0A0E1A',
      contrastText: '#E2E8F0',
    },
    secondary: {
      main: '#14B8A6', // Teal Accent
      contrastText: '#F0FDF4',
    },
    background: {
      default: '#0F172A',
      paper: '#1E293B',
    },
    text: {
      primary: '#E2E8F0',
      secondary: '#94A3B8',
    },
    success: {
      main: '#22C55E',
    },
    info: {
      main: '#3B82F6',
    },
    warning: {
      main: '#F59E0B',
    },
    error: {
      main: '#EF4444',
    },
  },
  typography: {
    fontFamily: '"Fira Code", "Roboto Mono", monospace',
    h1: { fontWeight: 700, letterSpacing: 2 },
    h2: { fontWeight: 700, letterSpacing: 2 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    body1: { fontSize: '1rem' },
    body2: { fontSize: '0.95rem' },
    button: {
      fontWeight: 600,
      letterSpacing: 1,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 600,
          fontSize: '1rem',
          boxShadow: '0 2px 8px rgba(20, 184, 166, 0.3)',
          background: 'linear-gradient(135deg, #14B8A6, #06B6D4)',
          color: '#0F172A',
          '&:hover': {
            background: 'linear-gradient(135deg, #06B6D4, #14B8A6)',
            color: '#fff',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: '#1E293B',
          boxShadow: '0 4px 24px rgba(255, 255, 255, 0.05)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: '#1E293B',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          background: '#0F172A',
          color: '#E2E8F0',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E293B',
          borderRadius: 4,
        },
        bar: {
          background: 'linear-gradient(to right, #06B6D4, #14B8A6)',
        },
      },
    },
  },
});

const Loading = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" sx={{ background: '#0F172A' }}>
    <CircularProgress sx={{ color: '#14B8A6' }} />
  </Box>
);

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <Loading />;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const Layout = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#0F172A' }}>
      {isAuthenticated && <Navbar />}
      <Box component="main" sx={{ flexGrow: 1 }}>{children}</Box>
    </Box>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/maps" element={<ProtectedRoute><Maps /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="/" element={<ProtectedRoute><Navigate to="/home" /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
