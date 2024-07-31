import React, { useEffect, useState } from 'react';
import ReturnBook from './ReturnBook';
import {BookModel} from "../../../models/BookModel";
import { log } from 'console';
import Spinner from '../../Utils/Spinner';



function Carousel() {


    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading , setIsLoading] = useState(true);
    const [httpError , setHttpError] = useState(null);

    useEffect(()=>{
        const fetchBook = async () =>{
                const baseUrl = "http://localhost:9000/api/books";
                const url : string = `${baseUrl}?page=0&size=9`

                const response = await fetch(url);

                if(!response.ok){
                    console.log("Rejected");
                    
                    throw new Error("Something went wrong");
                }
                else{
                    console.log("Accepted");
                    
                }

                const resultJson = await response.json();
                const responseData = resultJson._embedded.books;

                const loadedbooks :  BookModel[] = [];

                for (const key in responseData){
                    loadedbooks.push({
                        id : responseData[key].id,
                        title : responseData[key].title,
                        author : responseData[key].author,
                        description : responseData[key].description,
                        copies : responseData[key].copies,
                        copiesAvaible : responseData[key].copiesAvaible,
                        category : responseData[key].category,
                        img : responseData[key].image,
                        
                        
                    })
                    console.log(responseData[key].image);
                    
                }

                setBooks(loadedbooks)
                setIsLoading(false)

        }
        fetchBook().catch((error : any) =>{
            setIsLoading(false);
            setHttpError(error.message)
        })
    } , [])

    if(isLoading){
        return(
           <Spinner/>
        )
    }
    if(httpError){
        return(
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }

    return (
        <div className='container mt-5' style={{ height: 550 }}>
        <div className='homepage-carousel-title'>
            <h3>Bir sonraki 'Okumak için çok geç kaldım ! ' kitabını bul </h3>
        </div>
        <div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 
            d-none d-lg-block' data-bs-interval='false'>

            {/* Desktop */}
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        {
                            books.slice(0,3).map((book)=>(
                                <ReturnBook book={book} key={book.id} />
                            ))
                        }
                    </div>
                </div>
                <div className='carousel-item'>
                    <div className='row d-flex justify-content-center align-items-center'>
                    {
                            books.slice(3,6).map((book)=>(
                                <ReturnBook book={book} key={book.id} />
                            ))
                        }
                    </div>
                </div>
                <div className='carousel-item'>
                    <div className='row d-flex justify-content-center align-items-center'>
                    {
                            books.slice(6,9).map((book)=>(
                                <ReturnBook book={book} key={book.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <button className='carousel-control-prev' type='button'
                data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button className='carousel-control-next' type='button'
                data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>

        {/* Mobile */}
        <div className='d-lg-none mt-3'>
            <div className='row d-flex justify-content-center align-items-center'>
            <ReturnBook book={books[7]} key={books[7].id}/>
            </div>
        </div>
        <div className='homepage-carousel-title mt-3'>
            <a href="#" className='btn btn-outline-secondary btn-lg'>Daha Fazlasını Keşfet</a>
        </div>
    </div>
    );
}

export default Carousel;
