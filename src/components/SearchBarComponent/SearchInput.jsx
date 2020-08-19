import React from 'react';

function SearchBar() {
    return (
        <div className="search-ctn-sub search-ctn-sub-grow-1">
            <i className="fas fa-search search-icon"></i>
            <div className="search-input-ctn">
                <input className="search-input" type="text" name="search-text" id="search-text" placeholder="Search" />
            </div>
            <button className="search-btn search-btn-circle"><i className="fas fa-times"></i></button>
        </div>
    );
}
export default SearchBar;