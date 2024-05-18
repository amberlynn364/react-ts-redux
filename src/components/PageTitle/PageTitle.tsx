import { Divider, Typography } from '@mui/material';

interface PageTitleProps {
  textContent: string;
}

const PageTitle = ({ textContent }: PageTitleProps) => {
  return (
    <>
      <Typography variant="h5" textAlign="center" p={2}>
        {textContent}
      </Typography>
      <Divider />
    </>
  );
};

export default PageTitle;
