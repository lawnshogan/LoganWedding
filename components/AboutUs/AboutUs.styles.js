import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    content: {
      padding: '0 32px 0 '
    },
    paper: {
      width: '50%',
      marginLeft: '25%' ,
      padding: 48
    }
  })
);

export default useStyles;
