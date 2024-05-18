import { Box, Divider, Drawer, List } from '@mui/material';
import HeaderLinks from './HeaderLinks';
import Logo from '../Logo/Logo';

interface HeaderDrawerProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const HeaderDrawer = ({
  mobileOpen,
  handleDrawerToggle,
}: HeaderDrawerProps) => {
  const drawerWidth = 320;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ mb: 2 }}>
        <Logo />
      </Box>
      <Divider />
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <HeaderLinks />
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default HeaderDrawer;
