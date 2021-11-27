import React, { useState, useEffect } from "react";
import Navbar2 from "./Navbar2";
import HamburgerMenu from "./HamburgerMenu";
import Buttons from "./Buttons";
import zichygraphs from "../../src/utilities/zichygraphs/zichygraphs.png";
import { Close, Menu } from "@material-ui/icons";

function Header(props) {
  const [toggl, setToggl] = useState(false);

  // CALLS THE FUNCTION THAT RECHECKS AND UPDATES THE STATE
  if (toggl === false) {
    ["load", "scroll", "resize"].forEach((e) => {
      console.log("Added Nav Event Listeners: " + e);
      window.addEventListener(e, handleNavEventListeners);
    });
  }

  // FUNCTION THAT RECHECKS AND UPDATES THE STATE

  function handleNavEventListeners() {
    if (window.scrollY >= 70) {
      if (window.matchMedia("(min-width:800px)").matches) {
        console.log("navbar className= navbarfixed(fixed) ");
        setNav({
          navContainer: "navbarfixed",
          displayHomeNavStyle: {
            display: "flex",
          },
          displayHamburgerStyle: {
            hamburgerClassName: "",
            display: "none",
            borderBottom: "1px solid rgba(255, 255, 255, 0.616",
            background: "transparent",
            height: "90px",
            boxShadow: "none",
          },
          linksClass: {
            linksDiv: "nav-links-div",
            navLinks: "nav-links",
            displayHamLinks: "",
          },
          hamburgerLogoStyle: {
            color: "white",
            fontSize: "30px",
          },
          hamburgerToggleIconsStyle: {
            icon: {
              menuIcon: <Menu style={{ fontSize: "30px" }} />,
              closeIcon: <Close style={{ fontSize: "30px" }} />,
            },
            color: "white",
            marginRight: "30px",
          },
          navLogoStyle: {
            navLogo: "ZICHYgraphs",
          },
          favoriteIconStyle: {
            iconDivDisplay: "flex",
            color: "red",
            fontSize: "200%",
            marginLeft: "10px",
          },
          favoriteIconHamburgerStyle: {
            color: "white",
            fontSize: "30px",
            marginLeft: "30px",
          },
        });
      } else {
        console.log("navbar className= hamburger(fixed)");

        setNav({
          navContainer: "",
          displayHomeNavStyle: {
            display: "flex",
          },
          displayHamburgerStyle: {
            hamburgerClassName: "hamburger",
            display: "flex",
            borderBottom: "none",
            background: "white",
            height: "70px",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
          },
          linksClass: {
            linksDiv: "ham-div",
            navLinks: "",
            displayHamLinks: "none",
          },
          hamburgerLogoStyle: {
            color: "black",
            fontSize: "30px",
          },
          hamburgerToggleIconsStyle: {
            icon: {
              menuIcon: <Menu style={{ fontSize: "30px" }} />,
              closeIcon: <Close style={{ fontSize: "30px" }} />,
            },
            color: "black",
            marginRight: "30px",
          },
          navLogoStyle: {
            navLogo: "",
          },
          favoriteIconStyle: {
            iconDivDisplay: "none",
            color: "red",
            fontSize: "200%",
            marginLeft: "10px",
          },
          favoriteIconHamburgerStyle: {
            color: "black",
            fontSize: "30px",
            marginLeft: "30px",
          },
        });
      }
    } else if (window.matchMedia("(max-width:800px)").matches) {
      console.log("navbar className= hamburger(not fixed) ");

      setNav({
        navContainer: "",
        displayHomeNavStyle: {
          display: "flex",
        },
        displayHamburgerStyle: {
          hamburgerClassName: "hamburger",
          display: "flex",
          borderBottom: "1px solid rgba(255, 255, 255, 0.616",
          background: "transparent",
          height: "70px",
          boxShadow: "none",
        },
        linksClass: {
          linksDiv: "ham-div",
          navLinks: "",
          displayHamLinks: "none",
        },
        hamburgerLogoStyle: {
          color: "white",
          fontSize: "30px",
        },
        hamburgerToggleIconsStyle: {
          icon: {
            menuIcon: <Menu style={{ fontSize: "30px" }} />,
            closeIcon: <Close style={{ fontSize: "30px" }} />,
          },
          color: "white",
          marginRight: "30px",
        },
        navLogoStyle: {
          navLogo: "",
        },
        favoriteIconStyle: {
          iconDivDisplay: "none",
          color: "red",
          fontSize: "200%",
          marginLeft: "10px",
        },
        favoriteIconHamburgerStyle: {
          color: "white",
          fontSize: "30px",
          marginLeft: "30px",
        },
      });
    } else {
      console.log("navbar className= navbar(not fixed) ");

      setNav({
        navContainer: "navbar",
        displayHomeNavStyle: {
          display: "flex",
        },
        displayHamburgerStyle: {
          hamburgerClassName: "",
          display: "none",
          borderBottom: "1px solid rgba(255, 255, 255, 0.616",
          background: "transparent",
          height: "90px",
          boxShadow: "none",
        },
        linksClass: {
          linksDiv: "nav-links-div",
          navLinks: "nav-links",
          displayHamLinks: "",
        },
        hamburgerLogoStyle: {
          color: "white",
          fontSize: "30px",
        },
        hamburgerToggleIconsStyle: {
          icon: {
            menuIcon: <Menu style={{ fontSize: "30px" }} />,
            closeIcon: <Close style={{ fontSize: "30px" }} />,
          },
          color: "white",
          marginRight: "30px",
        },
        navLogoStyle: {
          navLogo: (
            <img src={zichygraphs} alt="zichygraphs logo" className="logo" />
          ),
        },
        favoriteIconStyle: {
          iconDivDisplay: "flex",
          color: "red",
          fontSize: "200%",
          marginLeft: "10px",
        },
        favoriteIconHamburgerStyle: {
          color: "white",
          fontSize: "30px",
          marginLeft: "30px",
        },
      });
    }
  }

  function handleClick() {
    setToggl(!toggl);

    console.log(toggl);

    if (toggl) {
      setNav((prevState) => {
        return {
          ...prevState,
          displayHamburgerStyle: {
            ...prevState.displayHamburgerStyle,
            borderBottom: "none",
          },
          linksClass: {
            linksDiv: "ham-div",
            navLinks: "",
            displayHamLinks: "none",
          },
        };
      });
    } else {
      setNav({
        navContainer: "",
        displayHomeNavStyle: {
          display: "flex",
        },
        displayHamburgerStyle: {
          hamburgerClassName: "hamburger",
          display: "flex",
          borderBottom: "3px solid rgb(238, 238, 238)",
          background: "white",
          height: "70px",
          boxShadow: "none",
        },
        linksClass: {
          linksDiv: "ham-div",
          navLinks: "",
          displayHamLinks: "",
        },
        hamburgerLogoStyle: {
          color: "black",
          fontSize: "30px",
        },
        hamburgerToggleIconsStyle: {
          icon: {
            menuIcon: <Menu style={{ fontSize: "30px" }} />,
            closeIcon: <Close style={{ fontSize: "30px" }} />,
          },
          color: "black",
          marginRight: "30px",
        },
        navLogoStyle: {
          navLogo: "",
        },
        favoriteIconStyle: {
          iconDivDisplay: "none",
          color: "red",
          fontSize: "200%",
          marginLeft: "10px",
        },
        favoriteIconHamburgerStyle: {
          color: "black",
          fontSize: "30px",
          marginLeft: "30px",
        },
      });
    }
  }

  // NAVBAR STATE
  const [nav, setNav] = useState({
    navContainer: "navbar",
    displayHomeNavStyle: {
      display: "flex",
    },
    displayHamburgerStyle: {
      hamburgerClassName: "",
      display: "none",
      borderBottom: "1px solid rgba(255, 255, 255, 0.616",
      background: "transparent",
      height: "90px",
      boxShadow: "none",
    },
    linksClass: {
      linksDiv: "nav-links-div",
      navLinks: "nav-links",
      displayHamLinks: "",
    },
    hamburgerLogoStyle: {
      color: "white",
      fontSize: "30px",
    },
    hamburgerToggleIconsStyle: {
      icon: {
        menuIcon: <Menu style={{ fontSize: "30px" }} />,
        closeIcon: <Close style={{ fontSize: "30px" }} />,
      },
      color: "white",
      marginRight: "30px",
    },
    navLogoStyle: {
      navLogo: (
        <img src={zichygraphs} alt="zichygraphs logo" className="logo" />
      ),
    },
    favoriteIconStyle: {
      iconDivDisplay: "flex",
      color: "red",
      fontSize: "200%",
      marginLeft: "10px",
    },
    favoriteIconHamburgerStyle: {
      color: "white",
      fontSize: "30px",
      marginLeft: "30px",
    },
  });

  //   useEffect(() => {
  //     ["load", "scroll", "resize", "change"].forEach((e) =>
  //       window.addEventListener(e, handleScroll)
  //     );
  //     return () =>
  //       ["load", "scroll", "resize", "change"].forEach((e) =>
  //         window.removeEventListener(e, handleScroll)
  //       );
  //   }, []);

  return (
    <header>
      <Navbar2
        // NAV DKSPLAY CONTROLS(TOGGLES NAVBAR,NAVARFIXED AND HAMBURGER
        displayHomeNav={nav.displayHomeNavStyle.display}
        toggleHamburgerClassName={nav.displayHamburgerStyle.hamburgerClassName}
        displayHamburger={nav.displayHamburgerStyle.display}
        linksDiv={nav.linksClass.linksDiv}
        navLinks={nav.linksClass.navLinks}
        displayHamLinks={nav.linksClass.displayHamLinks}
        // MAIN NAVBAR PROPS
        navContainer={nav.navContainer}
        navLogo={nav.navLogoStyle.navLogo}
        // HAMBURGER MENU PROPS
        hamburgerBorderBottom={nav.displayHamburgerStyle.borderBottom}
        hamburgerBackground={nav.displayHamburgerStyle.background}
        hamburgerHeight={nav.displayHamburgerStyle.height}
        hamburgerBoxShadow={nav.displayHamburgerStyle.boxShadow}
        favoriteIconDivDisplay={nav.favoriteIconStyle.iconDivDisplay}
        favoriteIconColor={nav.favoriteIconStyle.color}
        favoriteIconFontSize={nav.favoriteIconStyle.fontSize}
        favoriteIconMarginLeft={nav.favoriteIconStyle.marginLeft}
        favoriteIconHamburgerColor={nav.favoriteIconHamburgerStyle.color}
        favoriteIconHamburgerFontSize={nav.favoriteIconHamburgerStyle.fontSize}
        favoriteIconHamburgerMarginLeft={
          nav.favoriteIconHamburgerStyle.marginLeft
        }
        hamburgerLogoColor={nav.hamburgerLogoStyle.color}
        hamburgerLogoFontSize={nav.hamburgerLogoStyle.fontSize}
        hamburgerToggleIcons={
          toggl
            ? nav.hamburgerToggleIconsStyle.icon.closeIcon
            : nav.hamburgerToggleIconsStyle.icon.menuIcon
        }
        hamburgerToggleIconsColor={nav.hamburgerToggleIconsStyle.color}
        hamburgerToggleIconsMarginRight={
          nav.hamburgerToggleIconsStyle.marginRight
        }
        // PROP TO CALL HANDLECLICK FUNCTION
        onHandleClick={handleClick}
      />

      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a name="home">
        <div className="intro">
          <p>
            Bring your <span className="intro-span">dreams</span> into reality.
            I put my best into every work.
          </p>
          <Buttons value="Hire me" className="btn btn-for-header btn-with-bg" />
        </div>
      </a>
    </header>
  );
}

export default Header;
