import { Alert, Snackbar } from '@mui/material';
import PropTypes from 'prop-types';
const Alertbar = ({
    alertbar: {
      open,
      onClose,
      msg,
      severity,
      duration = 5000,      
      variant = 'filled',
    },
  }) => {
  return (
    <Snackbar open={open} autoHideDuration={duration} onClose={onClose}>
        <Alert
            onClose={onClose}
            severity={severity}
            variant={variant}
            sx={{ width: '100%' }}
        >
            {msg}
        </Alert>
    </Snackbar>
  );
};
Alertbar.propTypes = {
  alertbar: PropTypes.object,
};
export default Alertbar;