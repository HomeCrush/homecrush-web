/*import Button from '@material-ui/core/Button';
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
  }*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    marginBottom: theme.spacing(2),
   
  },
  marginAutoContainer: {
    display: 'flex',
  },
  marginAutoItem: {
    margin: 'auto'
  },
  sub:{
    marginBottom: theme.spacing(0),
  },

  alignItemsAndJustifyContent: {
    width: 500,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    objectFit:"cover",
  },
  icon:{
    paddingRight: theme.spacing(1),
  },
  btnCenter:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    background: "#44A1A0",
    color: "#fff",
    "&:hover": {
  background: "#0D5C63",
  color: "#fff"
  }
}
}));



export default function MatchCard ({property}) {
  const classes = useStyles();
  
 
  return (
    <div className={classes.marginAutoContainer}>
       <div className={classes.marginAutoItem}> 
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia 
         className={classes.image}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={property?.images} 
          title="Contemplative Reptile"
        />
        <CardContent className={classes.sub}>
          <Typography gutterBottom variant="h6" component="h6">
          Titulo
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
           Londres
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
           Description
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btnCenter}>
        <Button className={classes.btn} size="small" color="primary" component={RouterLink} to={`/property/${1223}`}>
         View
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}
