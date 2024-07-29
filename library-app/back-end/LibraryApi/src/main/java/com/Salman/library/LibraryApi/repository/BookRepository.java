package com.Salman.library.LibraryApi.repository;

import com.Salman.library.LibraryApi.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book , Long> {
}
