import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import myImg from "../../Assets/avatar.png";
import { MdVerified } from "react-icons/md";

function Home() {
  return (
    <section>
          <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15,marginTop:'-100px',color:"white"}} className="heading">
                Salut!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <div className="social-icons" >
              <img src={myImg} style={{height:'300px',width:'300px'}} className="img-fluid" alt="avatar" />
             
              <div style={{display:'flex', alignItems:'center',justifyContent:"center",flexDirection:'column',paddingTop:'10px'}}>
                <h4 style={{color:"white"}}>Dr.Abdessabour Sebbar <MdVerified color="gold"/></h4>
              </div>
              <div className="type-style">
                  <Type/>
              </div>
              
                
                <div style={{display:'flex', alignItems:'center',justifyContent:"center",flexDirection:'column',paddingTop:'10px',marginTop:'30px'}}>
                <h4 style={{color:'white' }}>Oujda, Maroc</h4>
            <a type="button" className="btn btn-dark" href="https://drive.google.com/uc?export=download&id=1hGGSuz6vf3W9WYiRvuHD3nxljFAs2pb1">Ajouter aux Contact</a>
              </div>
            </div>

              <div style={{ padding: 20, textAlign: "left" }}>
              </div>
            </Col>

             <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                />
            </Col> 
          </Row>
        </Container>
        
      <Home2/>
    </section>
  );
}

export default Home;
