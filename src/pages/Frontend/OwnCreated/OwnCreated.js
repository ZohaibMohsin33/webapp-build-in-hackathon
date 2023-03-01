import "../../../config/global";
import React, { useCallback, useEffect, useState,useContext } from 'react'
import { collection, getDocs, doc, getDoc,deleteDoc } from "firebase/firestore/lite";
import { fireStore } from '../../../config/firebase';
import {AuthContext} from '../../../context/AuthContext';



export default function OwnCreated() {


    let {user} = useContext(AuthContext);

    let imageSrc = 'https://source.unsplash.com/250x250/?lectures';
    let [document, setDoument] = useState([])

    
    let getDocument = useCallback(async () => {

        let arr = [];
        let filteredArr = [];
        const querySnapshot = await getDocs(collection(fireStore, "events"));
        querySnapshot.forEach((doc) => {
            arr.push(doc.data());

        });

        
       filteredArr = arr.filter((instance) =>{
        return instance.user === user.uid;
       })

        setDoument(filteredArr);
    }, [])


    useEffect(() => {
        getDocument()

    }, [getDocument])

let handleDelete = async(e) =>{
    console.log(e);
    await deleteDoc(doc(fireStore, "events", e.document_id));
    window.notify("Your Event has been deleted successfully","success");

    let filteredArr = document.filter((instance) =>{
        return instance.document_id !== e.document_id;
       })
    setDoument(filteredArr);

}


    return (
        <>
            <div className="container-fluid my-4">
            <div className="row d-flex justify-content-evenly flex-wrap">
                {document.length >= 1 ?

                    document.map((event, i) => {
                        return (
                            <div className="col col-lg-4 d-flex justify-content-center" key={event.document_id} >
                                <div className="card bord d-flex rounded standardWidth py-3">
                                    <p className='font-14 ms-3 mb-1'><span className='fw-bold'>{event.name}</span> created an event</p>
                                    <p className='font-12 ms-3 mb-1'>{event.location}</p>
                                <img className='cardImage'
                                src={`${imageSrc}/${i}+1`} alt="" />
                                <p className='text-center text-darkThemeBlue fs-4 fw-bold mt-2'>{event.title}</p>
                                <p className='fw-12 ms-3'>{event.description.slice(0,50) + '...'}</p>
                                <p className='ms-3 mb-0 fw-bold'>{event.location}</p>
                                <p className='ms-3 mb-0 '>{event.time}</p>
                                <p className='ms-3 mb-0 '>{event.date}</p>
                                <button className='btn btn-sm btn-danger text-white mx-3 mt-3' onClick={()=>{handleDelete(event)}}><i class="fa fa-trash text-white mx-2" aria-hidden="true"></i>Delete the event</button>

                                </div>
                                

                            </div>
                       )
                        
                    }) :
                    (
                        <div className="row">No event found</div>
                    )
                }
                 </div>
            </div>
        </>
    )
}


/*

<img src={`${imageSrc}/${i}+1`} alt="" />
                                <p className='text-center fs-1 text-darkThemeBlue'>Here is our Event Number {i + 1}</p>
                                <p className='text-center text-darkThemeBlue'>Title : <span className='text-lightThemeBlue'>{event.title}</span></p>
                                <p className='text-center text-darkThemeBlue'>Description : <span className='text-lightThemeBlue'>{event.description}</span></p>
                                <p className='text-center text-darkThemeBlue'>Location : <span className='text-lightThemeBlue'>{event.location}</span></p>
                                <p className='text-center text-darkThemeBlue'>Time : <span className='text-lightThemeBlue'>{event.time}</span></p>
                                <p className='text-center text-darkThemeBlue'>Date : <span className='text-lightThemeBlue'>{event.date}</span></p>
                                <p className='text-center text-darkThemeBlue'>User : <span className='text-lightThemeBlue'>{event.name}</span></p>

*/
