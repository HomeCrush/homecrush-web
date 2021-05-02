import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import TvIcon from '@material-ui/icons/Tv';
import WifiIcon from '@material-ui/icons/Wifi';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import PetsIcon from '@material-ui/icons/Pets';
import PoolIcon from '@material-ui/icons/Pool';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import KitchenIcon from '@material-ui/icons/Kitchen';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 20,
  },
  marginAutoContainer: {
    display: 'flex',
  },
  marginAutoItem: {
    margin: 'auto'
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
});

export default function PropertyCard() {
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
          image="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hogar
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="subtitle2">
           Londres
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <Grid>
          <LocalHotelIcon />
          </Grid>
          <Grid>
          <BathtubIcon />
          </Grid>
          <Grid>
          <TvIcon />
          </Grid>
          <Grid>
          <WifiIcon />
          </Grid>
          <Grid>
         <SmokingRoomsIcon />
         </Grid>
         <Grid>
         <PetsIcon />
         </Grid>
        </CardContent>
        < PoolIcon />
      < LocalParkingIcon />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View more pics
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}