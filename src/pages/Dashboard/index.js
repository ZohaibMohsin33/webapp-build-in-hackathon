import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { fireStore } from '../../config/firebase';




export default function Index() {

  let idGenerated;
  let initialState = {
    title: '',
    description: '',
    time: '',
    date: '',
    location: '',
    user: '',
    document_id: ''

  }
  let [state, setState] = useState(initialState)

  let [name, setName] = useState("")
  const { user } = useContext(AuthContext);

  let gotUser = async () => {



    const documen = doc(fireStore, "users", `${user.uid}`);
    const docSnap = await (await getDoc(documen));
    console.log(docSnap.data()[name]);
    console.log(docSnap.data().name);
    setName(docSnap.data().name);



  }

  useEffect(() => {



    gotUser();
  }, [])

  let handleChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }));

  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    let { title, description, time, date, location } = state
    console.log("hi i'm running")
    idGenerated = Math.random().toString(36).slice(2);
    console.log(title, description, time, date, location, user.uid, idGenerated)
    try {

      const docRef = await setDoc(doc(fireStore, "events", `${idGenerated}`), {
        title,
        description,
        time,
        date,
        location,
        user: user.uid,
        document_id: idGenerated
      });

      window.notify("Event has been stored", "success");

    } catch (e) {
      console.error("Error adding document: ", e);
      window.notify("Error occured", "error");
    }
  }


  return (
    <div className="container-fluid height-set">
      <div className="row d-flex justify-content-between p-3">
        <Link to='/' className='col-1 border rounded-circle gradient text-white fw-bold text-decoration-none text-center py-5'>Home</Link>
        <Link to='/events' className='col-1 border rounded-circle gradient text-white fw-bold text-decoration-none text-center py-5'>Events</Link>
      </div>
      <div className="row d-flex justify-content-center">
        <h2 className='text-center text-darkThemeBlue mb-3'>Hello {`${name}`}</h2>
        <h4 className=' text-center text-lightThemeBlue mb-5'>You can register your event here.</h4>

        <div className="col-10">

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="mb-5">
                  <label htmlFor="exampletitle" className="form-label text-lightThemeBlue">Title of Event</label>
                  <input type="text" className="form-control text-lightThemeBlue" id="exampletitle" aria-describedby="emailHelp" onChange={handleChange} value={state.title} name='title' />

                </div>
              </div>
              <div className="col-6">
                <div className="mb-5">
                  <label htmlFor="exampleDescription" className="form-label text-lightThemeBlue">Description of Event</label>
                  <input type="text" className="form-control text-lightThemeBlue" id="exampleDescription" aria-describedby="emailHelp" onChange={handleChange} name='description' />

                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-6">
                <div className="mb-5">
                  <label htmlFor="exampletime" className="form-label text-lightThemeBlue">Time of Event</label>
                  <input type="time" className="form-control text-lightThemeBlue" id="exampletime" aria-describedby="emailHelp" onChange={handleChange} name='time' />

                </div>
              </div>
              <div className="col-6">
                <div className="mb-5">
                  <label htmlFor="exampleDate" className="form-label text-lightThemeBlue">Date of Event</label>
                  <input type="date" className="form-control text-lightThemeBlue" id="exampleDate" aria-describedby="emailHelp" onChange={handleChange} name='date' />

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="mb-5">
                  <label htmlFor="exampleLocation" className="form-label text-lightThemeBlue text-center">Enter your Location</label>
                  <input type="text" className="form-control text-lightThemeBlue" id="exampleLocation" aria-describedby="emailHelp" onChange={handleChange} name='location' />

                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-end">
              <div className="col-1">
                <button className='btn btn-md bg-darkThemeBlue text-white' type='submit' onClick={handleSubmit}>Submit</button>
              </div>
            </div>


          </form>


        </div>
      </div>

    </div>
  )
}
