import { Grid, Skeleton } from '@mui/material';

const UserSkeleton = () => {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {[...Array(6)].map((_, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Skeleton variant="rectangular" width={330} height={210} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserSkeleton;
