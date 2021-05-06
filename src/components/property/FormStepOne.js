import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import DropZone from "./DropZone";
import { FormContext } from '../../context/FormContext';


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


const FormStepOne = () => {
  const classes = useStyles();
  const { saveState, completeFormStep } = useContext(FormContext)
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    saveState(data)
    completeFormStep() 
  }

  const imageOnSave = (images) => {
    saveState(images)
  }

  return (
    <div className="FormStepOne">
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
            Add your property
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              {...register("title")}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
            />
            <TextField
              {...register("description")}
              variant="outlined"
              multiline
              rows={4}
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              type="description"
              id="description"
              autoComplete="description"
            />
            <TextField
              {...register("location")}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="location"
              label="Location"
              name="location"
              autoComplete="location"
              autoFocus
            />
            <Grid container justify="flex-end">
              <DropZone onSaving={imageOnSave}/>
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
};

export default FormStepOne