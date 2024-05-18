import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';
import { RouterPaths } from '../../lib/types';

const Logo = () => {
  return (
    <Link
      component={RouterLink}
      to={RouterPaths.RootLayout}
      sx={{ flexGrow: 1, ml: 2 }}
      color="inherit"
      underline="none"
    >
      <Typography variant="h6" component="div">
        Krug
      </Typography>
    </Link>
  );
};

export default Logo;
