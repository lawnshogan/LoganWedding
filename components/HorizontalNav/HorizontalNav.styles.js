import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    listDiv: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
			flexWrap: 'wrap'
    },
    item: {
      margin: '8px 8px',
      textDecoration: 'underline',
      fontWeight: '100'
    }
  })
);

export default useStyles;
