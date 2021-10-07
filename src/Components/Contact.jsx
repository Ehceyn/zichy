import React, { useEffect } from "react";
import "./contactFavs.css";
import { useStateValue } from "../StateProvider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "./Buttons";
import ContactFavs from "./ContactFavs";

import { SocialIcon } from "react-social-icons";
import { Container } from "@material-ui/core";
// import Mediaquery from './mediaquery';

const CssTextField = withStyles({
  root: {
    "& id.Mui-focused": {
      borderBottomColor: "#a2a1a3",
    },
    "& label.Mui-focused": {
      color: "#0b993a",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#0b993a",
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: theme.spacing(3),
  },
  textField: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    justifySelf: "center",
    width: "30ch",
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const [{ basket }] = useStateValue();

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(basket));
  }, [basket]);

  return (
    <div className={props.containerClass}>
      <div className={props.closeClass} onClick={props.onClose}>
        {props.close}
      </div>
      <div className={props.container2}>
        <div className="contact-div">
          <div className="contact-bg-para">
            <p>ZICHYgraphs</p>
            <article>
              <SocialIcon
                url="https://facebook.com/chimeruzee.chidum"
                bgColor="blue"
                fgColor="white"
                className="social-icon"
              />
              <SocialIcon
                url="https://twitter.com/chimeruzee1"
                bgColor="#00ACEF"
                fgColor="white"
                className="social-icon"
              />
              <SocialIcon
                url="https://instagram.com/chimeruzee.chidum"
                bgColor="red"
                fgColor="white"
                className="social-icon"
              />
            </article>
          </div>
        </div>
        <div className="contact-page">
          <form className={classes.root} noValidate autoComplete="off">
            {/* <ThemeProvider theme={theme}> */}
            <Container
              id="standard-basic"
              label="I will like to get something like this/these"
              fullWidth
              style={{ margin: 8, display: "flex" }}
              className="contactFav"
            >
              {basket.map((work, index) => {
                return (
                  <ContactFavs key={work.id} id={work.id} img={work.img} />
                );
              })}
            </Container>
            <CssTextField
              required
              id="standard-basic"
              label="Fullname"
              className={classes.textField}
            />
            <CssTextField
              id="standard-basic"
              label="Title"
              className={classes.textField}
            />
            <CssTextField
              required
              id="standard-basic"
              label="E-mail"
              className={classes.textField}
            />
            <CssTextField
              required
              id="standard-basic"
              label="Phone no."
              className={classes.textField}
            />
            <CssTextField
              multiline
              rows={4}
              id="standard-basic"
              label="Message"
              fullWidth
              style={{ margin: 8 }}
            />
            <Button className="btn btn-for-general btn-with-bg" value="Send" />
            {/* </ThemeProvider> */}
          </form>
        </div>
      </div>
    </div>
  );
}
