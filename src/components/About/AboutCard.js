import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    // <Card className="quote-card-view">
    //   <Card.Body>
    //     <blockquote className="blockquote mb-0">
    //       <p style={{ textAlign: "justify" }}>
    //         Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
    //         from <span className="purple"> Bhubaneswar, India.</span>
    //         <br /> I am a final year student pursuing an Integrated MSc (IMSc)
    //         in Maths and Computing at BIT Mesra.
    //         <br />
    //         Additionally, I am currently employed as a software developer at
    //         Juspay.
    //         <br />
    //         <br />
    //         Apart from coding, some other activities that I love to do!
    //       </p>
    //       <ul>
    //         <li className="about-activity">
    //           <ImPointRight /> Playing Games
    //         </li>
    //         <li className="about-activity">
    //           <ImPointRight /> Writing Tech Blogs
    //         </li>
    //         <li className="about-activity">
    //           <ImPointRight /> Travelling
    //         </li>
    //       </ul>

    //       <p style={{ color: "rgb(155 126 172)" }}>
    //         "Strive to build things that make a difference!"{" "}
    //       </p>
    //       <footer className="blockquote-footer">Soumyajit</footer>
    //     </blockquote>
    //   </Card.Body>
    // </Card>





 <section className="vh-100 gradient-custom "  >
 <div className="container py-5 h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-12 col-md-8 col-lg-8 col-xl-8" style={{border:"3px solid", borderRadius:"1rem"}}>
      <div  > 
        <div className="card-body p-5 text-center">
          <div className="mb-md-5 mt-md-4 pb-5">
               <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                <label className="form-label">Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label className="form-label" >Password</label>
              </div> 
              <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>


            
                 {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>  */}
      
             </div>




           {/* <div className="btn btn-danger">
                     click me!
           </div> */}




            {/* <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>  */}
          </div>
        </div>
       </div>
     </div>
    </div> 
 </section>
  );
}

export default AboutCard;
