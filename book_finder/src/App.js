import React, { useState } from 'react';
import Searchbar from "./components/Searchbar";
import { getBooksByTerm } from "./api/GoogleAPI";
import BookList from "./components/BookList";
  

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksByTerm(searchTerm, setBooks, currentPage, setTotalPages);
  };

  const nextPage = async (page_number) => {
    setCurrentPage(page_number.selected+1);
    await getBooksByTerm(searchTerm, setBooks, currentPage, setTotalPages);
    
  };

  return (
      <div>
          <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
          <BookList books={books} />
          {/* <h1>Wellcome to Book Finder !</h1>; */}
      </div>
  );
  };

  
  export default App;
