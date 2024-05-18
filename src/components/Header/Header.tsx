import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import HeaderDrawer from './HeaderDrawer';
import HeaderLinks from './HeaderLinks';
import Logo from '../Logo/Logo';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        component="header"
        sx={{ minHeight: '65px', justifyContent: 'center' }}
      >
        <Toolbar>
          <Logo />
          <Box component="nav" sx={{ display: { xs: 'none', sm: 'block' } }}>
            <HeaderLinks />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <HeaderDrawer
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
