import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  btn:{
    background: "#44A1A0",
    margin: theme.spacing(2),
    color: "#fff",
    "&:hover": {
    background: "#0D5C63",
    color: "#fff",
  }
}
}))

export default function MatchCard ({ title, images, id }) {
  const classes = useStyles();

    return (
      <div className="match_card">
        {
          <div
            className="cardImage"
            style={{
              background: `url('${images}')`,
            }}
          ></div>
        }
        <div className="match_card_info">
          <Typography component="h6" variant="subtitle2">
            {title}
          </Typography>
        </div>
        <Button
          className={classes.btn}
          size="small"
          color="primary"
          component={RouterLink}
          to={`/property/${1223}`}
        >
          View
        </Button>
      </div>
    );
  }