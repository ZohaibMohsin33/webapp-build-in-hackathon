import React from 'react'
import Logo from '../../../../assets/logo2.png'
import HeaderImage from '../../../../assets/pngwing.com (3).png';


export default function Sec() {
  return (
    <>
    <div className="container-fluid">
    <div className="row clipp gradient h-100">
        <div className="col-12 p-5 col-md-6 d-flex justify-content-center align-items-center">
            
                <div className="col d-flex flex-column align-items-center p-5">
                   <img className='logosetting my-2' src={Logo} />

                   <p className='fs-1 text-light mb-0'>Changing the world</p>
                   <p className='fs-2 fw-bold text-light'>one app at a time</p>

                   <button className='btn btn-md border rounded-pill bg-light text-info'>Scroll the page</button>
               
            </div>
            
        </div>
        <div className='col-12 col-md-6 p-5'>

            <img className='headerImage' src={HeaderImage} alt="" />
                     
        </div>
    </div>
    </div>
    </>
  )
}
