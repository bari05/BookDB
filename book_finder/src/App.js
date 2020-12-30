import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
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
    await getBooksByTerm(searchTerm, setBooks, page_number.selected+1, setTotalPages);
    setCurrentPage(page_number.selected+1);
  };
  
  return (
      <div>
          <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
          
          <BookList books={books} />
          {/* <h1>Wellcome to Book Finder !</h1>; */}
          {totalPages > 1 ? (
            <div align="center">
            <ReactPaginate
                breakLabel={'. . .'}
                pageCount={totalPages}
                marginPagesDisplayed={3}
                pageRangeDisplayed={4}
                onPageChange={nextPage}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
            </div>) : ("")
          }
      </div>
      
  );
  };

  
  export default App;
