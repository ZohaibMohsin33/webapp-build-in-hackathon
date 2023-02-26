import '../../../config/global';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth,fireStore} from "../../../config/firebase";
import { doc,setDoc } from "firebase/firestore/lite";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function Signup() {

const navigate = useNavigate();

  let initialState = {
    name: '',
    email: '',
    password: '',
    cpassword: ''
  };

  function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  }

  let [state, setState] = useState(initialState);
  let handleChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }));

  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    let { name, email, password, cpassword } = state;
    let gotPass = checkPassword(password);
    let stateGot = state;

    if (name.length < 3) {
      window.notify("Please enter a valid name" , "error");
      return
    }
    if (gotPass) {
      if (password === cpassword){
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("yhn tk main chal rhaa hu");
                addDocument(user , stateGot);
                
                
               
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.notify(errorMessage,"error");
                // ..
            });
        
        setState(initialState);

        window.notify("You have got it","success");

      }

      else {
        window.notify("Passwords doesn't match", "warning");
        return;
      }

    }
    else {
      window.notify("Enter a strong password","warning");
    }

  }

  const addDocument = async (user , {name}) => {
    

    try {

        const docRef = await setDoc(doc(fireStore, "users",user.uid), {
            name : name,
            userid: user.uid
        });
        console.log("Document written with ID: ", docRef.id);
        navigate("/dashboard");
    
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
  return (


    <>
      <div className="container-fluid authBackground">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-6 d-flex flex-column bg-light text-dark fitcontent p-5 ">
            <h2 className='m-auto text-darkThemeBlue'>Sign Up</h2>
            <p className='mx-auto mb-3 text-lightThemeBlue'>Create your account to get full access.</p>


            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label text-lightThemeBlue">Full Name</label>
                <input type="text" className="form-control" name='name' onChange={handleChange} id="exampleInputName" value={state.name} aria-describedby="emailHelp" placeholder='Full Name' />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label text-lightThemeBlue">Email address</label>
                <input type="email" className="form-control" name='email' onChange={handleChange} value={state.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' />

              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label text-lightThemeBlue">Password</label>
                <input type="password" className="form-control" name='password' onChange={handleChange} value={state.password} id="exampleInputPassword1" placeholder='Enter the password'/>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label text-lightThemeBlue">Confirm Password</label>
                <input type="password" className="form-control" name='cpassword' onChange={handleChange} value={state.cpassword} id="exampleInputPassword2" placeholder='Confirm the password'/>
              </div>

              <div className="row mt-2">
                <div className="col-8">
                  Already have an account ? <Link to="/auth/login">login here</Link>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <button type="submit" className="btn btn-md bg-darkThemeBlue  text-light">Submit</button>
                </div>
              </div>
            </form>



          </div>
        </div>
      </div>
    </>
  )
}
