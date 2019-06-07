import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import {withBookstoreService} from '../hoc';
import {fetchBooks, bookAddedToCart} from "../../actions";

import './book-list.css'

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) =>{
                    return(
                        <li key={book.id}>
                            <BookListItem book={book}
                                          onAddedToCart={()=>onAddedToCart(book.id)}/></li>
                    )
                })
            }
        </ul>
    )
};

class BookListContainer extends Component {

    componentDidMount(){
        this.props.fetchBooks();
    }


    render(){
        const {currentlyDisplayedBooks, loading, error, onAddedToCart} = this.props;

        if (loading){
            return <Spinner/>;
        }

        if (error){
            return <ErrorIndicator/>;
        }

        return <BookList books={currentlyDisplayedBooks} onAddedToCart={onAddedToCart}/>
    }
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
};

const mapStateToProps = ({bookList:{currentlyDisplayedBooks, loading, error}}) => {
    return{
        currentlyDisplayedBooks,
        loading,
        error
    }
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));