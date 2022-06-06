import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    paragraph: {
      textAlign: 'center'
    },
    link: {
      textDecoration: 'underline',
      color: 'blue'
    }
  })
);

export default useStyles;
