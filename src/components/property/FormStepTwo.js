import React, { useContext, useState } from 'react'
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FormContext } from '../../context/FormContext';
import IconButton from "./IconButton"
import RuleIconButton from './RuleIconButton';
import { createProperty } from '../../services/PropertiesService';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#44A1A0",
    "&:hover": {
      background: "#0D5C63",
    },
  },
  icon: {
    height: 100,
  },
}));


const FormStepTwo = () => {
  const classes = useStyles();
  const { data } = useContext(FormContext)
  const { register, handleSubmit } = useForm();
  const { push } = useHistory();


    const [selectedAmenities, setSelectedAmenities] = useState({
      tv: true,
      wifi: false,
      equippedKitchen: false,
      livingRoom: false,
      dinningRoom: false,
      workArea: false,
      courtyard: false,
      jacuzzi: false,
      pool: false,
      washingMachine: false,
      parking: false,
      gym: false,
    });

    const amenitieOnchange = (key) => {
      setSelectedAmenities((prev) => ({
        ...prev,
        [key]: !selectedAmenities[key],
      }));
    };

    const ruleOnchange = (key) => {
      setSelectedRules((prev) => ({
        ...prev,
        [key]: !selectedRules[key],
      }));
    };

    const [selectedRules, setSelectedRules] = useState({
      smokersWelcome: false,
      petsWelcome: true,
      childrenWelcome: false,
    });

    const onSubmit = (values) => {
      console.log(data)
      let property = {
        ...data,
        ...values
      }
      property.amenities = selectedAmenities
      property.rules = selectedRules

      const formData = new FormData();

      Object.entries(property).forEach(([key, value]) => {
        formData.append(key, value);
      });
      console.log(property)
      console.log(formData)
      createProperty(formData)
        .then(() =>  push("/profile"))
     };

     

  return (
    <div className="FormStepTwo">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Grid>
            <img
              className={classes.icon}
              src="https://res.cloudinary.com/homecrus/image/upload/v1619719003/Brand/HOME_CRUSH-01-removebg-preview_tco4n3.png"
              alt=""
            />
          </Grid>
          <Typography component="h1" variant="h5">
            Add your property step 2
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={6}>
                <TextField
                  {...register("bedRooms")}
                  variant="outlined"
                  fullWidth
                  id="bedRooms"
                  label="Bedrooms"
                  name="bedRooms"
                  autoComplete="bedRooms"
                  autoFocus
                  type="number"
                  InputProps={{
                    inputProps: {
                      max: 100,
                      min: 1,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("bathRooms")}
                  variant="outlined"
                  fullWidth
                  id="bathRooms"
                  label="Bathrooms"
                  name="bathRooms"
                  autoComplete="Bath rooms"
                  autoFocus
                  type="number"
                  InputProps={{
                    inputProps: {
                      max: 100,
                      min: 1,
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={6}>
                <TextField
                  {...register("beds.singleBeds")}
                  variant="outlined"
                  fullWidth
                  id="beds.singleBeds"
                  label="Beds"
                  name="beds.singleBeds"
                  autoComplete="beds"
                  autoFocus
                  type="number"
                  InputProps={{
                    inputProps: {
                      max: 100,
                      min: 1,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("beds.doubleBeds")}
                  variant="outlined"
                  fullWidth
                  id="beds.doubleBeds"
                  label="Double beds"
                  name="beds.doubleBeds"
                  autoComplete="beds"
                  autoFocus
                  type="number"
                  InputProps={{
                    inputProps: {
                      max: 100,
                      min: 1,
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12}>
                <Typography component="h3" variant="subtitle2">
                  Amenities
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <IconButton
                  iconKey="tv"
                  amenitieOnchange={amenitieOnchange}
                  selectedAmenities={selectedAmenities}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  iconKey="wifi"
                  amenitieOnchange={amenitieOnchange}
                  selectedAmenities={selectedAmenities}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  iconKey="equippedKitchen"
                  amenitieOnchange={amenitieOnchange}
                  selectedAmenities={selectedAmenities}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  iconKey="livingRoom"
                  amenitieOnchange={amenitieOnchange}
                  selectedAmenities={selectedAmenities}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  iconKey="dinningRoom"
                  amenitieOnchange={amenitieOnchange}
                  selectedAmenities={selectedAmenities}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  iconKey="workArea"
                  amenitieOnchange={amenitieOnchange}
                  selectedAmenities={selectedAmenities}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  iconKey="courtyard"
                  amenitieOnchange={amenitieOnchange}
                  selectedAmenities={selectedAmenities}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  iconKey="jacuzzi"
                  amenitieOnchange={amenitieOnchange}
                  selectedAmenities={selectedAmenities}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  iconKey="pool"
                  amenitieOnchange={amenitieOnchange}
                  selectedAmenities={selectedAmenities}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  iconKey="washingMachine"
                  amenitieOnchange={amenitieOnchange}
                  selectedAmenities={selectedAmenities}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  iconKey="parking"
                  amenitieOnchange={amenitieOnchange}
                  selectedAmenities={selectedAmenities}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  iconKey="gym"
                  amenitieOnchange={amenitieOnchange}
                  selectedAmenities={selectedAmenities}
                />
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12}>
                <Typography component="h3" variant="subtitle2">
                  Rules
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <RuleIconButton
                  iconKey="smokersWelcome"
                  ruleOnchange={ruleOnchange}
                  selectedRules={selectedRules}
                />
              </Grid>
              <Grid item xs={2}>
                <RuleIconButton
                  iconKey="petsWelcome"
                  ruleOnchange={ruleOnchange}
                  selectedRules={selectedRules}
                />
              </Grid>
              <Grid item xs={2}>
                <RuleIconButton
                  iconKey="childrenWelcome"
                  ruleOnchange={ruleOnchange}
                  selectedRules={selectedRules}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Next
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default FormStepTwo