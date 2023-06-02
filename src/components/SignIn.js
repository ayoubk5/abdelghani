import {  signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {auth} from "../firebase"
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    const signIn=(e)=>{
         e.preventDefault();
         signInWithEmailAndPassword(auth,email,password)
         .then((userCredential)=>{
          
          navigate("/project");
          
        }).catch((error)=>{
          console.log("kjghjgfugfh");
          })
    }
  return (
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
                   <input type="email" id="typeEmailX" className="form-control form-control-lg" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                   <label className="form-label">Email</label>
                 </div>
   
                 <div className="form-outline form-white mb-4">
                   <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                   <label className="form-label" >Password</label>
                 </div> 
                 <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={signIn} >Login</button>
   
   
               
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
  )
}

export default SignIn
