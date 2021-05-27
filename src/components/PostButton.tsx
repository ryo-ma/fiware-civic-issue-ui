import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postButton: {
      "z-index": 1000,
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    }
  })
);

const PostButton = () => {
  const classes = useStyles();
  return(
    <Fab className={classes.postButton} color="secondary" variant="extended" aria-label="edit">
      <EditIcon className={classes.extendedIcon} />
      地域の課題を投稿してみよう
    </Fab>
  );
}

export default PostButton
