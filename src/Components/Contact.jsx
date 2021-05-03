import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "./Buttons";
import { SocialIcon } from "react-social-icons";
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


export default function Contact() {
  const classes = useStyles();

  return (
    <div style={{ position: "relative" }}>
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
          <CssTextField
            id="standard-basic"
            label="I will like to get something like this/these"
            fullWidth
            style={{ margin: 8 }}
            // InputProps={{classes}}
          />
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
          <Button
            className="btn btn-for-general btn-without-bg" value='Send'
          />
          {/* </ThemeProvider> */}
        </form>
      </div>
    </div>
  );
}

// function Contact() {
//   return (
//     <div style={{ position: "relative" }}>
//       <div className="contact-div">
//         <div className="contact-bg-para">
//           <p>ZICHYgraphs</p>
//         </div>
//       </div>
//       <div className="contact-page">
//         <input
//           type="text"
//           name="fullname"
//           id="fullname"
//           placeholder="I will like to get something like this/these"
//         />
//         <input
//           type="text"
//           name="fullname"
//           id="fullname"
//           placeholder="Fullname"
//         />
//         <input type="email" name="email" id="email" placeholder="Email" />
//         <input type="tel" name="phone" id="phone" placeholder="Phone no." />
//         <input type="text" name="message" id="message" placeholder="message" />
//       </div>
//     </div>
//   );
// }

// export default Contact;
