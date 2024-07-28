import React from 'react'

function ReturnBook() {
  return (
    <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
               
                    {/* <img
                        src =""
                        width='151'
                        height='233'

                    /> */}
                    :
                    <img
                        src={require('./../../../Images/BooksImages/book-luv2code-1000.png')}
                        width='151'
                        height='233'
                        alt='book'
                    />
                
                <h6 className='mt-2'></h6>
                <p></p>
                <a href="#" className='btn main-color text-white'>Ayır</a>
            </div>
        </div>
  )
}

export default ReturnBook