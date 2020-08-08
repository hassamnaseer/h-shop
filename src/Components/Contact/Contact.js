import React, { useState } from "react";
import "./Contact.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Contact = () => {
  const [nameInput, setName] = useState("");
  const [emailInput, setEmail] = useState("");
  const [messageInput, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const classes = useStyles();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleClick = () => {
    if (nameInput !== "" && emailInput !== "" && messageInput !== "" && messageInput.length >= 10) {
      setOpenSuccess(true);
      setSuccess("We have recieved your query. We'll get back to you as soon as possible.")
    } else {
      setOpenError(true);
    }
    
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
    setOpenError(false);
  };

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageInput = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      nameInput !== "" &&
      emailInput !== "" &&
      messageInput !== "" &&
      messageInput.length >= 10
    ) {
      console.log("Valid Data")
    }
  };

  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol className="form-body" sm="8" md="6" lg="5" xl="5">
            <form onSubmit={handleSubmit}>
              <p className="h2 text-center mb-3">Get In Touch</p>
              <p className="h6 text-center mb-4 form-text">
                We're here for you, and we're wearing our thinking caps. Feel
                free to contact us regarding your queries.
              </p>
              <label htmlFor="defaultFormContactNameEx" className="text">
                Name...
              </label>
              <input
                type="text"
                id="defaultFormContactNameEx"
                className="form-control"
                onChange={handleNameInput}
                value={nameInput}
              />
              <br />
              <label htmlFor="defaultFormContactEmailEx" className="text">
                Email...
              </label>
              <input
                type="email"
                id="defaultFormContactEmailEx"
                className="form-control"
                onChange={handleEmailInput}
                value={emailInput}
              />
              <br />
              <label
                htmlFor="defaultFormContactMessageEx"
                className="text"
              >
                Message... (10 character minimum)
              </label>
              <textarea
                type="text"
                id="defaultFormContactMessageEx"
                className="form-control"
                rows="5"
                onChange={handleMessageInput}
                value={messageInput}
              />
              <div className="text-center mt-4">
                <a
                  className="submit"
                  onClick={() => {handleClick(); }}
                  type="submit"
                >
                  Send
                </a>
              </div>
            </form>
          </MDBCol>
        </MDBRow>

        <div className={classes.root}>
          <Snackbar open={openSuccess} autoHideDuration={10000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              {success}
            </Alert>
          </Snackbar>
          <Snackbar open={openError} autoHideDuration={8000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              Please provide valid data in fields
            </Alert>
          </Snackbar>
        </div>
      </MDBContainer>
    </div>
  );
};

export default Contact
