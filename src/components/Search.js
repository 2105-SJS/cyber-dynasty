import React, { useState } from 'react';

const Search = ({products, setProducts, fetchProducts}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const productMatches = (product, text) => {
        let check = product.includes(text);
        return check;
    }

    const handleSearch = () => {
        const searchedProduct = products.filter(product => productMatches(product.shoeName.toLowerCase(), searchTerm));
        setProducts(searchedProduct);
        if(searchTerm.length <= 0) {
            fetchProducts();
        }
    }
    return <>
        <form onSubmit={(event) => {
            event.preventDefault();
            handleSearch();
        }}>
            <input type='text' placeholder='Search' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} ></input>
            <button>Search</button>
        </form>
    </>
}

export default Search;