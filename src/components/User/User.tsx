import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { UserDto } from '../../lib/types';

type UserProps = Omit<UserDto, 'id'>;

const User = ({ username, name, email, company }: UserProps) => {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {username}
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {email}
          </Typography>
          <Typography variant="body2">
            &quot;{company.name}&quot;
            <br />
            {company.catchPhrase}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Delete User</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default User;
