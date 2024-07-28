import React from 'react'

function Heros() {
  return (
    <div className='d-none d-lg-block'>
        <div className='row g-0 mt-5'>
            <div className= "">
                <div className='col-image-left'></div>
            </div>
        </div>
        <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
            <div className='ml-2'>
                <h1>Ne okuyorsun</h1>
                <p className='lead'>
                    Kütüphane takımı ne okuduğunu bilmek ister
                </p>
                <a href="#" className='btn main-color btn-lg text-white'>Sign Up</a>
            </div>
        </div>
    </div>
  )
}

export default Heros