import { Alert, Snackbar } from '@mui/material';
import { SyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setShowAlert } from '../../store/showAlert/showAlertSlice';
import selectShowAlert from '../../store/showAlert/showAlertSelector';

interface ToastProps {
  toastText: string;
}

const Toast = ({ toastText }: ToastProps) => {
  const dispatch = useAppDispatch();
  const isShowAlert = useAppSelector(selectShowAlert);

  const handleClose = (_?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setShowAlert(false));
  };

  return (
    <Snackbar open={isShowAlert} autoHideDuration={2000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        {toastText}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
