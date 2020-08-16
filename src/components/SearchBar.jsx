import React from 'react';
function SearchBar() {
    return (
        <div className="container search-ctn">
            <div className="search-ctn-sub search-ctn-sub-grow-1">
                <i className="fas fa-search search-icon"></i>
                <div className="search-input-ctn">
                    <input className="search-input" type="text" name="search-text" id="search-text" placeHolder="Search" />
                </div>
                <button className="search-btn search-btn-circle"><i className="fas fa-times"></i></button>
            </div>
            <div className="search-ctn-sub search-ctn-sub-grow-2">
                <div className="search-btn-ctn">
                    <button className="search-btn dropdown-btn">Custom <i className="fas fa-caret-down"></i></button>
                </div>
                <div className="search-input-ctn">
                    <input className="search-input" type="text" name="test-text" id="test-text" placeHolder="Type something" />
                </div>
            </div>

            <div className="search-ctn-sub dropdown search-ctn-sub-no-flex">
                <button className="search-btn dropdown-btn resize-btn"><i className="fas fa-caret-down"></i></button>
                <div className="dropdown-menu resize-menu">
                    <button className="search-btn dropdown-item">10</button>
                    <button className="search-btn dropdown-item">16</button>
                    <button className="search-btn dropdown-item">24</button>
                    <button className="search-btn dropdown-item">40</button>
                </div>
            </div>
            <div className="search-ctn-sub search-ctn-sub-no-flex">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="search-ctn-sub search-ctn-sub-no-flex">
                <button className=" search-btn search-btn-circle" onclick="reset()"><i className="fas fa-redo"></i></button>
            </div>
        </div>
    );
}
export default SearchBar;