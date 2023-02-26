import React, { useCallback, useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore/lite";
import { fireStore } from '../../../config/firebase';


export default function Events() {

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
            <div className="container-fluid">

                {document.length > 1 ?

                    document.map((event, i) => {
                        return (<div className="row">
                            <div className="col bord">
                                <p className='text-center fs-1 text-darkThemeBlue'>Here is our Event Number {i + 1}</p>
                                <p className='text-center text-darkThemeBlue'>Title : <span className='text-lightThemeBlue'>{event.title}</span></p>
                                <p className='text-center text-darkThemeBlue'>Description : <span className='text-lightThemeBlue'>{event.description}</span></p>
                                <p className='text-center text-darkThemeBlue'>location : <span className='text-lightThemeBlue'>{event.location}</span></p>
                                <p className='text-center text-darkThemeBlue'>time : <span className='text-lightThemeBlue'>{event.time}</span></p>
                                <p className='text-center text-darkThemeBlue'>date : <span className='text-lightThemeBlue'>{event.date}</span></p>
                            </div>
                        </div>)
                    }) :
                    (
                        <div className="row">No event found</div>
                    )
                }
            </div>
        </>
    )
}
