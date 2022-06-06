import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    flexGrow: 1,
  },
  img: {
    height: 'auto',
    width: '100%',
    display: 'block',
    overflow: 'hidden',
  },
}));

export default useStyles;
