import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    header: {
      marginTop: 80
    },
    link: {
      color: 'purple',
      textDecoration: 'underline'
    },
    photoContent: {
      marginTop: 64,
      padding: '0 24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }
  })
);

export default useStyles;
