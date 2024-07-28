import React from 'react';

function Heros() {
    return (
        <div>
            <div className='d-none d-lg-block'>
                <div className='row g-0 mt-5'>
                    <div className="col-md-6 col-md-5">
                        <div className='col-image-left'></div>
                    </div>

                    <div className='col-6 col-md-6 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1 >Ne okuyorsun ?</h1>
                            <p className='lead'>
                                Kütüphane takımı ne okuduğunu bilmek ister
                            </p>
                            <a href="#" className='btn main-color btn-lg text-white'>Sign Up</a>
                        </div>
                    </div>
                </div>

                <div className='row g-0'>
                    <div className='col-6 col-md-6 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Koleksiyonumuz hep değişiyor!</h1>
                            <p className='lead'>
                                Her gün denemeye çalış
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'></div>
                    </div>
                </div>
            </div>

            {/* Mobil heroes */}
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2 d-flex flex-column justify-content-center align-items-center text-center'>
                            <h1>Ne okuyorsun</h1>
                            <p className='lead'>
                                Kütüphane takımı ne okuduğunu bilmek ister
                            </p>
                            <a href="#" className='btn main-color btn-lg text-white'>Sign Up</a>
                        </div>

                    </div>
                    <div className='m-2'>
                        <div className='col-image-right'></div>
                        <div className='mt-2'>
                            <h1>Koleksiyonumuz hep değişiyor!</h1>
                            <p className='lead'>
                                Her gün denemeye çalış
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heros;
