import React,{useState, useEffect} from "react";
import {getBooksById} from "../api/GoogleAPI";

const BookDetails = (props) => {
    console.log(props);
    console.log("bookdetails");
    const [currentBook, SetCurrentBook] = useState({});
    let ImageURL;
    useEffect(() =>{
        getBooksById(props.match.params.id, SetCurrentBook);
        console.log(currentBook);
    },[])

    if (currentBook.volumeInfo === undefined){
        return (<div>Loading... Please wait</div>)
    }else {
        if (currentBook.volumeInfo.imageLinks === undefined) {
            ImageURL = null;
        } else {
            ImageURL = currentBook.volumeInfo.imageLinks.thumbnail;
        }
        return (
            <div>
                <div className="row">
                    <div className="col s8 m6">
                        <div className="card" >
                            <div className="card-image">
                                    <img
                                        src={ImageURL}
                                        alt="Image not available"
                                        style={{width: "100", height: "200"}}
                                    />
                            </div>
                            <div className="card-content">
                                <b>{currentBook.volumeInfo.title}{} </b><br/>
                                By {currentBook.volumeInfo.authors}
                            </div>
                           
                        </div>
                        
                    </div>
                    <div >
                        <div>
                            <p><b>Description:</b></p>
                            <div dangerouslySetInnerHTML={{ __html: currentBook.volumeInfo.description }} />
                        </div>
                        <div>
                            <p><b>Caterories:</b></p>
                            <p>{currentBook.volumeInfo.categories ? (currentBook.volumeInfo.categories.join(', ')):("")}</p>
                        </div>
                        <hr/>
                        <div>
                            <p><b>Publisher:</b> {currentBook.volumeInfo.publisher}</p>
                            <p><b>Published Date:</b> {currentBook.volumeInfo.publishedDate}</p>
                            <p><b>Language:</b> {currentBook.volumeInfo.language}</p>
                            <p><b>Total page:</b> {currentBook.volumeInfo.pageCount}</p>
                            <p><b>Average Rating:</b> {currentBook.volumeInfo.averageRating}</p>
                            <p><b>Ratings Count:</b> {currentBook.volumeInfo.ratingsCount}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default BookDetails;
