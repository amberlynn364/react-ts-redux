import { Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { headerLinks } from '../../lib/data';

const HeaderLinks = () => {
  return headerLinks.map(({ name, hash }) => (
    <Link key={name} component={RouterLink} to={hash} color="inherit">
      <Button color="inherit">{name}</Button>
    </Link>
  ));
};

export default HeaderLinks;
