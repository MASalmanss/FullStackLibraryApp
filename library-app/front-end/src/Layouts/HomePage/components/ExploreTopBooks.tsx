import React from 'react'
import { Link } from 'react-router-dom'

function ExploreTopBooks() {
  return (
    <div className='p-5 mb-4 bg-dark header'>
        <div className='container-fluid py-5 text-white d-flex justify-content-center align-items-center'>
            <div>
                <h1 className='display-5 fw-bold '>Yeni bir maceraya atıl !</h1>
                <p className='col-md-8 fs-4'>Nereden Başlamak istersin ?</p>
                <Link type='button' className='btn main-color btn-lg text-white'to="/search">
                    Tüm kitapları keşfet
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ExploreTopBooks