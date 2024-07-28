import React from 'react'

function LibraryServices() {
  return (
    <div className='container my-5'>
        <div className='row p-4 align-items-center border shadow-lg'>
            <div className='col-lg-7 p-3'>
                <h1 className='display-5 fw-bold'>
                    Aradğını bulamıyor musun ?
                </h1>

                <p className='lead'>
                    Personel müdürümüze bir mesaj yolla !
                </p>

                <div className='d-grid gap-2 justify-content-md-start mb-4 mb-lg-3'>
                    <a href="#" className='btn main-color text-white'>
                       Kaydol
                    </a>
                </div>
            </div>
            <div className='col-lg-4 offset-lg-1 shadow-lg lost-image'>

            </div>
        </div>
    </div>
  )
}

export default LibraryServices