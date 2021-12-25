import React, { useState, useEffect, useRef } from "react";
import "./contactFavs.css";
import { useStateValue } from "../StateProvider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "./Buttons";
import ContactFavs from "./ContactFavs";
import emailjs from "emailjs-com";

import { SocialIcon } from "react-social-icons";
import { Container } from "@material-ui/core";
import { Check, ErrorOutlineRounded } from "@material-ui/icons";

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
    width: `25ch`,
  },
}));

export default function Contact(props) {
  const form = useRef();
  const classes = useStyles();
  const [{ basket }] = useStateValue();
  const [formValue, setFormValue] = useState({
    fullname: "",
    title: "",
    email: "",
    message: "",
    phone: "",
  });
  const [message, setMessage] = useState({
    icon: "",
    title: "",
    text: "",
  });
  const [messageDisplay, setMessageDisplay] = useState("none");
  const [width, setWidth] = useState("25ch");
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem("favs") || "0");

  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    ["DOMContentLoaded", "load", "scroll", "resize", "change"].forEach((e) =>
      window.addEventListener(e, handleWidth)
    );
    return () =>
      ["DOMContentLoaded", "load", "scroll", "resize", "change"].forEach((e) =>
        window.removeEventListener(e, handleWidth)
      );
    // eslint-disable-next-line
  }, []);
  function handleWidth() {
    if (window.matchMedia("(max-width:425px)").matches) {
      setWidth("100%");
    } else {
      setWidth("25ch");
    }
  }

  const addFav = (id) => {
    let array = favorites;
    let addArray = true;
    array.forEach((item, key) => {
      if (item === id) {
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray) {
      array.push(id);
    }
    setFavorites([...array]);
    localStorage.setItem("favs", JSON.stringify(favorites));
    console.log(favorites);
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setFormValue((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value,
      };
    });
    console.log(formValue);
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(basket));
  }, [basket]);

  const handleSubmit = (e) => {
    const SERVICE_ID = "service_yp4s9fl";
    const TEMPLATE_ID = "template_rhblcj9";
    const USER_ID = "user_45P0sivHcc6PnCNY5cdtH";
    e.preventDefault();
    if (
      formValue.fullname.length >= 2 &&
      formValue.email.length >= 2 &&
      formValue.email.includes("@") &&
      formValue.message.length >= 5
    ) {
      setIsLoading(true);
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
        (result) => {
          console.log(result.text);
          setMessage({
            icon: (
              <Check
                style={{ width: "70px", height: "70px", color: "#0b993a" }}
              />
            ),
            title: "Message Sent Successfully",
            text: "Thanks for contacting me.  ",
          });
          setFormValue({
            fullname: "",
            title: "",
            email: "",
            message: "",
            phone: "",
          });
          setMessageDisplay("flex");
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          setMessage({
            icon: (
              <ErrorOutlineRounded
                style={{ width: "70px", height: "70px", color: "red" }}
              />
            ),
            title: "Ooops, something went wrong",
            text: error.text ? error.text : "Check your internet connection",
          });
          setMessageDisplay("flex");
          setIsLoading(false);
        }
      );
      form.current.reset();
    } else {
      setMessage({
        icon: (
          <ErrorOutlineRounded
            style={{ width: "70px", height: "70px", color: "red" }}
          />
        ),
        title: "Ooops, something went wrong",
        text: "Please ensure all fields with asterisks(*) are filled",
      });
      setMessageDisplay("flex");
      return false;
    }
  };

  return (
    <div className={props.containerClass}>
      <div
        style={{ display: `${messageDisplay}` }}
        className="messageContainer"
      >
        <div className="messageBox">
          <div className="messageContent">
            <p>{message.icon}</p>
            <p
              style={{
                marginTop: "20px",
                fontWeight: "bold",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              }}
            >
              {message.title}
            </p>
            <p
              style={{
                marginTop: "10px",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              }}
            >
              {message.text}
            </p>
            <div onClick={() => setMessageDisplay("none")}>
              <button className="messageBtn">OK</button>
            </div>
          </div>
        </div>
      </div>
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
          <form
            ref={form}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <Container
              id="standard-basic"
              label="I will like to get something like this/these"
              style={{ margin: 8, display: "flex", width: "100%" }}
              className="contactFav"
            >
              {basket.map((work, index) => {
                return (
                  <ContactFavs
                    key={work.id}
                    id={work.id}
                    img={work.img}
                    onRemoveFav={addFav}
                  />
                );
              })}
            </Container>
            <CssTextField
              required
              id="standard-basic"
              label="Fullname"
              className={classes.textField}
              name="fullname"
              value={formValue.fullname}
              onChange={handleChange}
              contentEditable={false}
              style={{ width: `${width}` }}
            />
            <CssTextField
              id="standard-basic"
              label="Title"
              className={classes.textField}
              value={formValue.title}
              onChange={handleChange}
              name="title"
              style={{ width: `${width}` }}
            />
            <CssTextField
              required
              id="standard-basic"
              label="E-mail"
              className={classes.textField}
              value={formValue.email}
              onChange={handleChange}
              name="email"
              style={{ width: `${width}` }}
            />
            <CssTextField
              id="standard-basic"
              label="Phone no."
              className={classes.textField}
              value={formValue.phone}
              onChange={handleChange}
              name="phone"
              style={{ width: `${width}` }}
            />
            <CssTextField
              required
              multiline
              rows={4}
              id="standard-basic"
              label="Message"
              style={{ margin: 8, width: "100%" }}
              value={formValue.message}
              onChange={handleChange}
              name="message"
            />
            <div onClick={handleSubmit}>
              <Button
                className="btn btn-for-general btn-with-bg"
                value={isLoading ? "Sending..." : "Send"}
                disabled={isLoading ? true : false}
              />
            </div>

            {/* </ThemeProvider> */}
          </form>
        </div>
      </div>
    </div>
  );
}
