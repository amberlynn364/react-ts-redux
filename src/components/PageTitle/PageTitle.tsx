import { Divider, Typography } from '@mui/material';
import { memo } from 'react';

interface PageTitleProps {
  textContent: string;
}

// eslint-disable-next-line react/display-name
const PageTitle = memo(({ textContent }: PageTitleProps) => {
  console.log('page title render');
  return (
    <>
      <Typography variant="h5" textAlign="center" p={2}>
        {textContent}
      </Typography>
      <Divider />
    </>
  );
});

export default PageTitle;
