import { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router";
import { editProfile, getUserInfo } from "../../services/UserService";
import FormEditProfile from "./FormEditProfile";
import { UserContext } from '../../context/UserContext';


export default function EditProfile() {
  const { id } = useParams();
  const { push } = useHistory();
   const { setUser } = useContext(UserContext)


  const onChange = (event) => {
    let value = event.target.value;
    if (event.target.type === "file") {
      value = event.target.files[0];
    } else if (event.target.tagName === "SELECT") {
      value = [...event.target.selectedOptions].map((o) => o.value);
    }
    const formData = new FormData();
    console.log("Esto es un fd", formData)
    formData.append("image", value);
      editProfile(formData)
        .then((user) => {
           setUser(user)
             push("/profile");
    })
    .catch((e) => {
      console.log(e)
    });
  };

  return (
    <div className="container">
      <FormEditProfile
        master
        name="image"
        id="image"
        onChange={onChange}
        type="file"
      />
    </div>
  );
}