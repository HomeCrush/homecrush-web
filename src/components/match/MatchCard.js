import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  btn:{
    background: "#44A1A0",
    margin: theme.spacing(1),
    padding:theme.spacing(0),
    color: "#fff",
    "&:hover": {
    background: "#0D5C63",
    color: "#fff",
  }
}
}))

export default function MatchCard ({ title, images }) {
  const classes = useStyles();

    return (
      <div className='match_card'>
        <img src={images} className="card-img-top" alt={title} />
        <div className='match_card_info'>
        <Typography component="h6" variant="subtitle2">
          {title}
          </Typography>
        </div>
        <Button className={classes.btn} size="small" color="primary" component={RouterLink} to="/propertycard">
            View
        </Button>
      </div>
    );
  }