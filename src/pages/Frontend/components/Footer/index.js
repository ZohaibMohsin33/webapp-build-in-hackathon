import React from 'react'

export default function index() {
    let yeargot = new Date().getFullYear();
  return (
    <>
    <div className="container-fluid ">
        <div className="row ">
            <div className="col bg-info text-center">
                <p className='m-auto text-light py-2'>&copy; All Rights Reserved| {yeargot}</p>
            </div>
        </div>
    </div>
    </>
  )
}
