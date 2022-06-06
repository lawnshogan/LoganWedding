import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    navRoot: {
      display: 'flex',
      justifyContent: 'left'
    },
    drawer: {
      width: 300
    }

  })
);

export default useStyles;
