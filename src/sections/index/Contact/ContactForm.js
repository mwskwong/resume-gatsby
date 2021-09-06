import { Button, Grid, TextField } from "@mui/material";
import { isEmailValid, isValueEmpty } from "utils";
import { useRef, useState } from "react";

import constants from "contents/constants";
import data from "contents/data";
import useSx from "./useContactFormSx";

const ContactForm = () => {
  const sx = useSx();
  const emailInputRef = useRef(null);
  const [emailInputErrorMessage, setEmailInputErrorMessage] = useState(null);
  const invalidEmail = Boolean(emailInputErrorMessage);
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const validateEmail = value => {
    if (isValueEmpty(value)) {
      return constants.emailValidationErrorMessage.presence;
    }

    if (!isEmailValid(value)) {
      return constants.emailValidationErrorMessage.emailFormat;
    }

    return null;
  };

  const handleChange = event => {
    if (event.target.id === "email") {
      setEmailInputErrorMessage(validateEmail(event.target.value));
    }

    setMessageData({
      ...messageData,
      [event.target.id]: event.target.value
    });
  };

  const handleSubmitMessage = event => {
    event.preventDefault();

    const emailErrorMessage = validateEmail(messageData.email);
    const invalidEmail = Boolean(emailErrorMessage);
    if (invalidEmail) {
      setEmailInputErrorMessage(emailErrorMessage);
      emailInputRef.current.focus();
      emailInputRef.current.scrollIntoView({ behavior: "smooth" });
      return false;
    }

    document.location.href = `
      mailto:${data.contact.email}
      ?cc=${messageData.email}
      &subject=${encodeURIComponent(messageData.subject)}
      &body=${encodeURIComponent(messageData.message)}
    `;
  };

  return (
    <form onSubmit={handleSubmitMessage} noValidate>
      <Grid container spacing={4}>
        <Grid item sm={6} xs={12}>
          <TextField
            id="name"
            name="name"
            fullWidth
            label={constants.name}
            autoComplete="name"
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            ref={emailInputRef}
            id="email"
            name="from"
            fullWidth
            required
            label={constants.email}
            autoComplete="email"
            onChange={handleChange}
            error={invalidEmail}
            helperText={invalidEmail ? emailInputErrorMessage : constants.required}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="subject"
            name="subject"
            fullWidth
            label={constants.subject}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="message"
            name="body"
            fullWidth
            label={constants.message}
            onChange={handleChange}
            multiline
            rows={9}
          />
        </Grid>
      </Grid>
      <Button sx={sx.submitButton} type="submit" variant="contained" size="large">
        {constants.sendMessage}
      </Button>
    </form>
  );
};

ContactForm.whyDidYouRender = true;

export default ContactForm;