import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  stripeDiv: {
    maxWidth: '100%',
    height: 500,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  photoDiv: {
    padding: 58,
  },
  photo: {
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
  },
  content: {
    padding: 24,
  },
}));

export default useStyles;
