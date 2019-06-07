
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};

const booksRequested = () =>{
    return{
        type: 'FETCH_BOOKS_REQUEST'
    }
};

const booksError = (error) =>{
    return{
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
};

const booksSearched = (searchTitle) =>{
    return{
        type: 'SEARCH_BOOKS_TITLE',
        payload: searchTitle
    }
};

const bookAddedToCart = (bookId) =>{
    return{
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    };
};

const bookDeletedFromCart = (bookId) =>{
    return{
        type: 'BOOK_CART_DELETE',
        payload: bookId
    };
};

const bookDecreasedInCart = (bookId) =>{
    return{
        type: 'BOOK_CART_DECREASE',
        payload: bookId
    };
};


const fetchBooks = (bookstoreService, dispatch) => () =>{
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data)=>{
            dispatch(booksLoaded(data));
        })
        .catch((err) =>{
            dispatch(booksError(err));
        });
};

export {
    fetchBooks,
    booksSearched,
    bookAddedToCart,
    bookDeletedFromCart,
    bookDecreasedInCart
};