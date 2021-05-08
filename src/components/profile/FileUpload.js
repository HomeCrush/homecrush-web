import { useContext } from "react";
import { useHistory } from "react-router";
import { editProfile } from "../../services/UserService";
import { UserContext } from '../../context/UserContext';
import './Profile.css'
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > span': {
      margin: theme.spacing(2),
    },
  },
  input: {
    display: 'none',
  },
  icon: {
    marginLeft: theme.spacing(20),
    marginTop: theme.spacing(1),
    color:"#44a1a0"
  },
}));


export default function EditProfile() {
  const classes = useStyles();

  const { push } = useHistory();
  const { setUser, getUser } = useContext(UserContext)

  const onChange = (event) => {
    let value = event.target.value;
    if (event.target.type === "file") {
      value = event.target.files[0];
    } else if (event.target.tagName === "SELECT") {
      value = [...event.target.selectedOptions].map((o) => o.value);
    }
    const formData = new FormData();
    formData.append("image", value);
      editProfile(formData)
        .then((user) => {
           getUser()
             
    })
    .catch((e) => {
      console.log(e)
    });
  };

  return (
    <div className="container">
      <input accept="image/*" 
      className={classes.input} 
      id="icon-button-file"
       type="file" 
        onChange={onChange}
      /> 
      <label htmlFor="icon-button-file">
        <IconButton className={classes.icon} color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    
    </div>
  );
}