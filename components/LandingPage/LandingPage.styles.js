import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      minHeight: '100vh'
    },
    header: {
      marginTop: 80,
    },
    photo: {
      width: '100%'
    }
  })
);

export default useStyles;
