import React from 'react';
import { useHistory } from "react-router-dom";
import { useData } from "./DataContext";
import Typography from "@material-ui/core/Typography";
import { TextField, Checkbox } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";
import { Form } from "./Form";
import { PrimaryButton } from "./PrimaryButton";
import { MainContainer } from "./MainContainer";
import Select from "react-select";
import * as yup from "yup"

const schema = yup.object().shape({
    title: yup
    .string()
    .required("First name is a required field"),
  description: yup
    .string()
    .required("Last name is a required field"),
  });

export const PropertyForm = () => {
const { setValues, data } = useData();
  const { control, handleSubmit, errors } = useForm({
    defaultValues: { title: data.title, description: data.description },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const onSubmit = (data) => {
    history.push("./propertyForm2") 
    setValues(data)
  }

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
       <h1>Title</h1>
        <Input
         
          id="title"
          type="text"
          label="Property Title"
          name="title"
         
          helperText={errors?.title?.message}
        />
        <Input
          
          id="description"
          type="text"
          label="Description"
          name="description"
          helperText={errors?.description?.message}
        />
        <Input
  
        id="location"
        type="text"
        label="Location"
        name="location"
        helperText={errors?.location?.message}
/>
<label>Type of house</label>
<select>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>

          <Controller
        name="MyCheckbox"
        control={control}
        defaultValue={false}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      />

      <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
     );
}
