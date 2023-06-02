import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {auth} from "../firebase"
import { useNavigate } from "react-router-dom";

import {  signOut } from "firebase/auth";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
function NavBar(props) {
  console.log("tkherbi9a",props)
  const navigate = useNavigate();
  const {isLoggedIn,setIsLoggedIn}=props;
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
    }
      updateNavbar(false);
    }

  window.addEventListener("scroll", scrollHandler);
  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
    setIsLoggedIn(false);
        navigate("/");
  console.log("wiiwa",props.isLoggedIn)
        
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    });
}   
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" style={{height:'10%',width:'20%'}} className="d-flex logo-container">
          <img src={logo}  className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/product"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Produits
              </Nav.Link>
          </Nav.Item>  

          {!isLoggedIn && <Nav.Item>
              <Nav.Link
                as={Link}
                to="/login"
                // onClick={() => updateExpanded(false)}
                onClick={() => setIsLoggedIn(true)}

              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Login
              </Nav.Link>
            </Nav.Item>
            }
            
            {isLoggedIn && <Nav.Item>
            <Nav.Link
                as={Link}
                to="/"
                // onClick={() => updateExpanded(false)}
                onClick={handleLogout}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> logout
              </Nav.Link>
            </Nav.Item>
            } 
            {/* {props.isLoggedIn && <Nav.Item>
            <Nav.Link
                as={Link}
                to="/"
                // onClick={() => updateExpanded(false)}
                onClick={handleLogout}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> logout
              </Nav.Link>
            </Nav.Item> } */}

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
