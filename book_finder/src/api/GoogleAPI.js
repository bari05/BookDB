import axios from "axios";

const Googleapi = axios.create({
    baseURL: "https://www.googleapis.com/books/v1",
});

const getBooksByTerm = (SearchTerm, setBooks, page_number, setTotalPages, sort = "relevance") => {
    Googleapi.get("/volumes", {
        params: {
            q: SearchTerm,
            startIndex: ((page_number-1)*20),
            maxResults: 20,
            orderBy: sort,
            // page: page_number,
        },
    }).then((response) => {
        console.log(response.data);
        setBooks(response.data.items);
        setTotalPages(response.data.totalItems/20);
    });
};

export { getBooksByTerm };
