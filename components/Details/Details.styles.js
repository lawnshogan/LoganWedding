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
		photoContent: {
      marginTop: 64,
			marginRight: 24,
			marginLeft: 8,
      padding: '0 24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
		buttonDiv: {
			width: '100%',
			display: 'flex',
			justifyContent: 'space-around'
		}
  })
);

export default useStyles;
