import React from 'react';
import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table';
import SearchPanel from '../search-panel';

const HomePage = () => {

    return (
        <div>
            <SearchPanel/>
            <BookList />
            <ShoppingCartTable />
        </div>
    );
};

export default HomePage;