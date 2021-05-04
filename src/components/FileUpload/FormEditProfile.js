import { IconButton } from "@material-ui/core";
import PhotoCamera from '@material-ui/icons/PhotoCamera';


export default function FormElement({
    name,
    id,
    value,
    onChange,
    type = "text",
    tag = "input",
    error,
  }) {
    const CustomTag = `${tag}`;
    return (
      <div className="form_group">
        <label htmlFor={id}>
        <CustomTag
          type={type}
          className={`form-control ${error && "is-invalid"} `}
          id={id}
          value={value}
          onChange={onChange}
        />
        </label>
        <div className="invalid-feedback">{error}</div>
      </div>
    );
  }