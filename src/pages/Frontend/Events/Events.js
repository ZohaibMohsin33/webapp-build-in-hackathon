import React, { useCallback, useEffect, useState } from 'react'
import { collection, getDocs, doc, getDoc } from "firebase/firestore/lite";
import { fireStore } from '../../../config/firebase';


export default function Events() {


    let imageSrc = 'https://source.unsplash.com/250x250/?lectures';
    let [document, setDoument] = useState([])


    let getDocument = useCallback(async () => {

        let arr = [];
        const querySnapshot = await getDocs(collection(fireStore, "events"));
        querySnapshot.forEach((doc) => {
            arr.push(doc.data());

        });
        setDoument(arr);
    }, [])


    useEffect(() => {
        getDocument()

    }, [getDocument])




    return (
        <>
            <div className="container-fluid my-4">
            <div className="row d-flex justify-content-evenly flex-wrap">
                {document.length > 1 ?

                    document.map((event, i) => {
                        return (
                            <div className="col col-lg-4 d-flex justify-content-center" key={event.id} >
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
