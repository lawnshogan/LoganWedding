import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    header: {
      marginBottom: 30
    },
    text: {
      marginBottom: 30,
      fontSize: '1.15rem',
      lineHeight: '150%'
    },
    content: {
      padding: '0 32px 0 '
    },
  })
);

export const content = ({textContentArray}) => {
  const classes = useStyles();
  const textContent = textContentArray.map((el) => {
    return (
      <>
        {el.title !== "" && (
          <>
            <h2 className={classes.header}>{el.title}</h2>
          </>
        )}
        <p className={classes.text}>{el.body}</p>
      </>
    );
  });
  return (
    <div className={classes.content}>
      {textContent}
    </div>
  );
};
