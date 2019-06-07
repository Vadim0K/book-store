const updateBookList = (state, action) => {
    if (state===undefined){
        return {
            books: [],
            currentlyDisplayedBooks: [],
            loading: true,
            error: null,
            searchTerm: ""
        }
    }

    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state.bookList,
                books: [],
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state.bookList,
                books: action.payload,
                currentlyDisplayedBooks: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return{
                ...state.bookList,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'SEARCH_BOOKS_TITLE':
            const books = state.bookList.books;
            const search = action.payload;
            return{
                ...state.bookList,
                currentlyDisplayedBooks: searchBooks(books,search),
                searchTerm: action.payload
            };

        default:
            return state.bookList;
    }
};

const searchBooks = (books, search) => {
    if (search === 0){
        return books;
    }

    return books.filter((item) => {
        return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                item.author.toLowerCase().indexOf(search.toLowerCase()) > -1;
    })
};

export default updateBookList;