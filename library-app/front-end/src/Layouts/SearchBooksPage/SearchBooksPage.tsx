import React, { useEffect, useState } from 'react'
import { BookModel } from '../../models/BookModel';
import Spinner from '../Utils/Spinner';
import { SearchBook } from './components/SearchBook';

function SearchBooksPage() {

    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            const baseUrl = "http://localhost:9000/api/books";
            const url: string = `${baseUrl}?page=0&size=5`;

            const response = await fetch(url);

            if (!response.ok) {
                console.log("Rejected");

                throw new Error("Something went wrong");
            }
            else {
                console.log("Accepted");

            }

            const resultJson = await response.json();
            const responseData = resultJson._embedded.books;

            const loadedbooks: BookModel[] = [];

            for (const key in responseData) {
                loadedbooks.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    author: responseData[key].author,
                    description: responseData[key].description,
                    copies: responseData[key].copies,
                    copiesAvaible: responseData[key].copiesAvaible,
                    category: responseData[key].category,
                    img: responseData[key].image,


                })
                console.log(responseData[key].image);

            }

            setBooks(loadedbooks)
            setIsLoading(false)

        }
        fetchBook().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message)
        })
    }, [])

    if (isLoading) {
        return (
            <Spinner />
        )
    }
    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }



    return (
        <div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-6'>
                        <div className='d-flex'>
                            <input type="search" className='form-control' placeholder='Search' aria-labelledby='Search' />
                            <button className='btn btn-outline-success ms-1'>
                                Ara
                            </button>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='dropdown'>
                            <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle="dropdown" aria-expanded="false">
                                Kategori
                            </button>
                            <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                                <li>
                                    <a href="#" className='dropdown-item'>
                                        Hepsi
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='dropdown-item'>
                                      Ön-Yüz
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='dropdown-item'>
                                     Arka-Yüz
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='dropdown-item'>
                                     Veri
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='dropdown-item'>
                                     Dev-Ops
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h5>Sonuç sayısı : (22)</h5>
                    </div>
                    <p>
                        1 den 5 kadar 22 içinde
                    </p>
                    {books.map(book =>(
                        <SearchBook book = {book} key = {book.id}/>
                    ))}
                </div>
            </div>
            <br />
        </div>
        
    )
}

export default SearchBooksPage