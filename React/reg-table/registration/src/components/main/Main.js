import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CountrySelect from "./CountrySelect";
import './main.css';
import Btn from '../Btn';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  userID: Yup.string()
    .min(5, 'UserID must be at least 5 characters')
    .max(12, 'UserID must be less than 12 characters')
    .required('UserID is required'),
  name: Yup.string().required('Name is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  zip: Yup.number().required('ZIP Code is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
});

export default function LayoutTextFields() {
  const [text, setText] = useState("");
  const [errors, setErrors] = useState({});

  const inputText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      userID: text,
      name: e.target.name.value,
      password: e.target.password.value,
      zip: e.target.zip.value,
      email: e.target.email.value,
    };

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form data is valid:", formData);
      setErrors({});
      // You can proceed with form submission or further actions
    } catch (validationErrors) {
      const formattedErrors = {};
      validationErrors.inner.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });
      setErrors(formattedErrors);
    }
  };

  return (
    <div className="div">
      <form onSubmit={handleSubmit}>
        <Box className="box" 
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px", // Added padding for spacing
            border:"5px solid black",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9", // Light background for contrast
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow
          }}
        >
          <h1 className="form-title">{text.toUpperCase()}</h1>

          {/* UserID Field */}
          <TextField
            label={"UserID (must be length of 5 to 12 letters)"}
            value={text}
            id="userID"
            margin="dense"
            onChange={inputText}
            error={!!errors.userID}
            helperText={errors.userID}
          />

          {/* Name Field */}
          <TextField
            label={"Name:"}
            id="name"
            margin="dense"
            error={!!errors.name}
            helperText={errors.name}
          />

          <TextField
            label={"Password:"}
            type="password"
            id="password"
            margin="dense"
            error={!!errors.password}
            helperText={errors.password}
          />

          <TextField label={"Address (Optional)"} id="address" margin="dense" />

          <CountrySelect />

          <TextField
            label={"ZIP Code:"}
            type="number"
            id="zip"
            margin="dense"
            error={!!errors.zip}
            helperText={errors.zip}
          />

          <TextField
            label={"Email:"}
            id="email"
            margin="dense"
            error={!!errors.email}
            helperText={errors.email}
          />

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender:</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Language:</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="english" control={<Radio />} label="English" />
              <FormControlLabel value="non-english" control={<Radio />} label="Non-English" />
            </RadioGroup>
          </FormControl>

          <label htmlFor="about">About:</label>
          <textarea rows="7" className="textarea" placeholder="Tell us about yourself..."></textarea>

          <Btn title={"Submit"} />
        </Box>
      </form>
    </div>
  );
} 
