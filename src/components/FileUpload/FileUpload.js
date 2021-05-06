import { useContext } from "react";
import { useHistory } from "react-router";
import { editProfile } from "../../services/UserService";
import { UserContext } from '../../context/UserContext';
import FormElement from "./FormElement";


export default function EditProfile() {
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
      <FormElement
        master
        name="image"
        id="image"
        onChange={onChange}
        type="file"
      />
    </div>
  );
}