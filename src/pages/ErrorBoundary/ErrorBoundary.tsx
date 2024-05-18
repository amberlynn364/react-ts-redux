/* eslint-disable no-console */
import { Link, useRouteError } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { RouterPaths } from '../../lib/types';

export default function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <img
        srcSet="error-img.svg?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
        src="error-img.svg"
        className=""
        alt="error-img"
      />
      <Typography variant="h3" component="p" textAlign="center">
        Whoops, something went wrong
      </Typography>
      <Link to={RouterPaths.RootLayout}>
        <Button>Go to Home</Button>
      </Link>
    </Box>
  );
}
