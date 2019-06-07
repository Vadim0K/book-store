import React from 'react';
import {connect} from 'react-redux';
import {booksSearched} from '../../actions'

import './search-panel.css'

const SearchPanel = ({searchTerm, booksSearched}) =>{


    return (
        <input  type="text"
                className="form-control search-input"
                placeholder="search"
                onChange={(e) => booksSearched(e.target.value)}
                value={searchTerm}
        />
    )
};

const mapDispatchToProps = (dispatch) =>{
    return {
        booksSearched: (text) => dispatch(booksSearched(text))
    }
};

const mapStateToProps = ({bookList:{searchTerm}}) => {
    return{
        searchTerm
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);