import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--white bg-white-40'
                type='search'
                placeholder='search robots'
                onChange={searchChange} />
        </div>
    );
}

export default SearchBox;