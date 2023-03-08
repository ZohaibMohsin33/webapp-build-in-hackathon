import { React, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../context/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../../config/firebase";


export default function Login() {


  const navigate = useNavigate()
  const { isAuthenticated } = useContext(AuthContext);
  const initialState = {
    name: '',
    password: ''
  }

  let [state, setState] = useState(initialState);

  let handleChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }));

  }

  let handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = state;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        isAuthenticated = true;
       navigate("/dashboard")

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.notify("Error occured in logging in", "error");
      })
  }





return (
  <>
    <div className="container-fluid authBackground">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-6 d-flex flex-column bg-light text-dark fitcontent p-5 ">
          <h2 className='m-auto text-darkThemeBlue'>Login</h2>
          <p className='mx-auto mb-3 text-lightThemeBlue'>Enter login details to get access.</p>


          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label text-darkThemeBlue">Email address</label>
              <input type="email" onchange={handleChange} className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" name className="form-label text-darkThemeBlue">Password</label>
              <input type="password" onchange={handleChange} name='password' className="form-control" id="exampleInputPassword1" />
            </div>

            <div className="row">
              <div className="col-6">
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1 text-darkThemeBlue">Keep me logged in</label>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-8">
                Dont't you have an account ?<Link to='/auth/signup' className='text-decoration-underline'>Signup here</Link>
              </div>
              <div className="col-4 d-flex justify-content-end">
                <button type="submit" className="btn btn-md text-light bg-darkThemeBlue" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </form>



        </div>
      </div>
    </div>
  </>
)
}
