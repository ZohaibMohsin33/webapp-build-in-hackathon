import React from 'react'

export default function Home() {
    return (
        <>
            <div className="container-fluid">

                <div className="row d-flex justify-content-evenly py-5">
                    <h1 className='text-center my-5 text-darkThemeBlue'>Our Services</h1>
                    <div className="col-12 my-2 my-md-0 col-md-4 col-lg-3 d-flex justify-content-center">
                        <div className="card w-100 bg-darkThemeBlue p-5">
                            <i class="fa fa-handshake-o fa-3x text-lightThemeBlue" aria-hidden="true"></i>
                            <p className='text-white my-3 fw-bold'>Event Management</p>
                            <p className='text-white'>We are here to let you manage your event because most of the events get delayed just because of lack of management.</p>
                        </div>
                    </div>
                    <div className="col-12 my-2 my-md-0 col-md-4 col-lg-3 d-flex justify-content-center">
                        <div className="card w-100 bg-darkThemeBlue p-5">
                            <i class="fas fa-file-invoice fa-3x text-lightThemeBlue " aria-hidden="true"></i>
                            <p className='text-white my-3 fw-bold'>Event Registeration</p>
                            <p className='text-white'>Better to register your event for your convenience and for the ease of the people wanna particle you event.</p>
                        </div>
                    </div>
                    <div className="col-12 my-2 my-md-0 col-md-4 col-lg-3 d-flex justify-content-center">
                        <div className="card w-100 bg-darkThemeBlue p-5">
                            <i class="fas fa-clipboard-check fa-3x text-lightThemeBlue " aria-hidden="true"></i>
                            <p className='text-white my-3 fw-bold'>Event Accountancy</p>
                            <p className='text-white'>We are here to let you inform the cost of the event. To make it manageable and run the event in cost efficient manner</p>
                        </div>
                    </div>
                </div>
                <div className="row heighted gradient d-flex justify-content-center align-items-center">
                    <div className="col-7">
                        <p className='text-white fs-1 text-justify'>
                            <span className='fw-bold'>Technology </span>
                            isn't about the largest gadgets or apps. It's about what these things do for people. It's about bring people together and <span className='fw-bold'>making live better</span> .
                        </p>
                    </div>
                </div>
                <div className="row my-5 py-5">
                    <div className="col col-md-6 p-5">
                        <p className='fs-2 text-darkThemeBlue mb-3 fw-bold'>Connect with Us</p>

                        <p><a href="" className='text-decoration-none text-dark'>Twitter</a></p>
                        <p><a href="" className='text-decoration-none text-dark'>Facebook</a></p>
                        <p><a href="" className='text-decoration-none text-dark'>Instagram</a></p>

                    </div>
                    <div className="col col-md-6 p-5">
                        <div className="row">
                            <div className="col-4">
                                <p className='text-darkThemeBlue fw-bold'>Mailing Address</p>
                                <p>35-D Tariq Hall, University of Agriculture, Faisalabad</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <p className='text-darkThemeBlue fw-bold'>Email Address</p>
                                <p>zohaibmohsin30@gmail.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <p className='text-darkThemeBlue fw-bold'>Mailing Address</p>
                                <p>+92 (302-0800066)</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
