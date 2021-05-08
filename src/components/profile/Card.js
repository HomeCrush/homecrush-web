import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getMyProperties, deleteProperty } from '../../services/PropertiesService';
import { ToastContainer } from 'react-toastify';
import { deleteMessage } from '../toasts/messages';
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
    margin: 'auto',
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
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    objectFit:"cover",
    width: 350,
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

export default function CardProperty({ title, images, location, description, id, deleteFunction }) {
  const classes = useStyles();
  
  return (
    <div className={classes.marginAutoContainer}>
      <ToastContainer />

      <div className={classes.marginAutoItem}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.image}
              component="img"
              height="140"
              image={images[0]}
            />
            {console.log(images)}
            <CardContent className={classes.sub}>
              <Typography gutterBottom variant="h6" component="h6">
                {title}
              </Typography>
              <Typography variant="subtitle2" component="h6">
                {location}
              </Typography>
              <Typography variant="body2" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.btnCenter}>
            <Button className={classes.btn} href={`/property/${id}/edit`} size="small" color="primary">
              Edit
            </Button>
            <Button
              type="button"
              className={classes.btn}
              size="small"
              color="primary"
              onClick={() => deleteFunction(id)}
            >
              Delete
            </Button>
            <Button
             className={classes.btn}
             size="small"
             color="primary"
             component={RouterLink}
             to={`/property/${id}`}
           >
             View
           </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
