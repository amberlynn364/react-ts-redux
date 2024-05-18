import { Box, CircularProgress, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Box
      gap={2}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <CircularProgress />
      <Typography variant="h5" component="div">
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
