import React, { useEffect, useState } from 'react'
import { BookModel } from '../../models/BookModel';
import Spinner from '../Utils/Spinner';
import { SearchBook } from './components/SearchBook';
import { Pagination } from '../Utils/Pagination';

function SearchBooksPage() {

    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBooksPerPage] = useState(5);
    const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState("");
    const [searchUrl, setSearchUrl] = useState("");
    const [categorySelection , setCategorySelection] = useState("Kitap Kategori");

    useEffect(() => {
        const fetchBook = async () => {
            const baseUrl = "http://localhost:9000/api/books";
            let url: string = "";

            if (searchUrl === "") {
                url = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;
            } else {
                let searchWithPage = searchUrl.replace("<pageNumber>" , `${currentPage - 1}`);
                url = baseUrl + searchWithPage;
            }

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

            setTotalAmountOfBooks(resultJson.page.totalElements);
            setTotalPages(resultJson.page.totalPages);

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


            }

            setBooks(loadedbooks)
            setIsLoading(false)

        }
        fetchBook().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message)
        })

        window.scrollTo(0, 0)
    }, [currentPage, searchUrl])

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
    const searchHandleChange = () => {
        setCurrentPage(1)
        if (search === "") {
            setSearch("")
        } else {
            console.log("Çalıştı 2");

            //http://localhost:9000/api/books/search/findByTitleContaining?title=guru&page=0&size=5
            setSearchUrl(`/search/findByTitleContaining?title=${search}&page=<pageNumber>&size=${booksPerPage}`)
        }
        setCategorySelection("Kitap Kategori")
    }

    const categoryField = (value : string) =>{
        setCurrentPage(1)
        if(
            value.toLowerCase() === "fe" ||
            value.toLowerCase() === "be" ||
            value.toLowerCase() === "data" ||
            value.toLowerCase() === "devops"
        ) {
            setCategorySelection(value)
            setSearchUrl(`/search/findByCategory?category=${value}&page=0&size=${booksPerPage}`)
        } else {
            setCategorySelection("All")
            setSearchUrl(`?page=<pageNumber>&size=${booksPerPage}`)
        }
    }

    const indexOfLastBook: number = currentPage * booksPerPage;
    const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
    let lastItem = booksPerPage * currentPage <= totalAmountOfBooks ? booksPerPage * currentPage : totalAmountOfBooks;

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-6'>
                        <div className='d-flex'>
                            <input type="search" className='form-control' placeholder='Search' aria-labelledby='Search' onChange={e => setSearch(e.target.value)} />
                            <button className='btn btn-outline-success ms-1' onClick={() => {
                                searchHandleChange(); console.log("Çalıştı");
                            }}>
                                Ara
                            </button>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='dropdown'>
                            <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle="dropdown" aria-expanded="false">
                                {categorySelection}
                            </button>
                            <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                                <li onClick={()=> categoryField("All")}>
                                    <a href="#" className='dropdown-item'>
                                        Hepsi
                                    </a>
                                </li>
                                <li onClick={()=> categoryField("FE")}>
                                    <a href="#" className='dropdown-item'>
                                        Ön-Yüz
                                    </a>
                                </li>
                                <li onClick={()=> categoryField("BE")}>
                                    <a href="#" className='dropdown-item'>
                                        Arka-Yüz
                                    </a>
                                </li>
                                <li onClick={()=> categoryField("DATA")}>
                                    <a href="#" className='dropdown-item'>
                                        Veri
                                    </a>
                                </li>
                                <li onClick={()=> categoryField("Devops")}>
                                    <a href="#" className='dropdown-item'>
                                        Dev-Ops
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {totalAmountOfBooks > 0 ?
                        <>
                            <div className='mt-3'>
                                <h5>Sonuç sayısı : ({totalAmountOfBooks})</h5>
                            </div>
                            <p>
                                {indexOfFirstBook + 1} den {lastItem} kadar {totalAmountOfBooks} içinde
                            </p>
                            {books.map(book => (
                                <SearchBook book={book} key={book.id} />
                            ))}
                        </>

                        :
                        <div className='mt-5'>
                            <h3 >Aradığınız kitabı bulamadınız mı ?</h3>
                            <a href="#" className='main-color btn btn-md px-4 me-md-2 fw-bold text-white'>Kütüphane Servisleri</a>
                        </div>
                    }


                    {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />}
                </div>
            </div>
            <br />
        </div>

    )
}

export default SearchBooksPage