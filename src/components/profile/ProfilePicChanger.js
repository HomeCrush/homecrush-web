import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { profileUpdate, getUserInfo } from "../../Services/UserService";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
    const [user, setUser] = useState();

    useEffect(() => {
        getUserInfo().then((user) => {
            setUser(user)
        }).catch(e => console.log(e));
      }, []);

    const onChange = (event) => {
        setUser((old) => {
          let value = event.target.value;
          if (event.target.type === "file") {
            value = event.target.files[0];
          } else if (event.target.tagName === "SELECT") {
            value = [...event.target.selectedOptions].map((o) => o.value);
          }
          return { ...old, [event.target.id]: value };
        });
      };
 
     /* profileUpdate(20)
      .then(() => {
       user.push("/")
      })*/
      

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={onChange}
      />
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}