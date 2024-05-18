import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { RouterPaths } from '../../lib/types';

const NotFoundPage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <img
        srcSet="error-img.svg?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
        src="error-img.svg"
        className=""
        alt="error-img"
      />
      <Typography variant="h3" component="p" textAlign="center">
        Whoops, this page doesn&apos;t exist
      </Typography>
      <Link to={RouterPaths.RootLayout}>
        <Button>Go to Home</Button>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
