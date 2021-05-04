import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { editProfile, getUserInfo } from "../../services/UserService";
import FormEditProfile from "./FormEditProfile";
import Button from '@material-ui/core/Button';

export default function EditProfile() {
  const { id } = useParams();
  const { push } = useHistory();
  const [user, setUser] = useState();
  const [image, setImage] = useState();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getUserInfo(id).then((user) => setUser(user));
  }, [id]);

  if (!user) {
    return "Loading...";
  }

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

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.entries(user).forEach(([key, value]) => {
      formData.append(key, value);
    });
    editProfile(formData)
      .then(() => {
        push("/profile");
      })
      .catch((e) => {
        if (e.response.status === 400) {
          setErrors(e.response.data.errors);
        }
      });
  };

  return (
    <form onSubmit={onSubmit} className="container">
      <FormEditProfile
        name="image"
        id="image"
        onChange={onChange}
        error={errors.image}
        type="file"
      />
      <Button type="submit"  >
        Upload
      </Button>
    </form>
  );
}