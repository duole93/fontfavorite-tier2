import React from 'react';

function ViewBar() {
    return (
        <div className="container view-ctn">
            <div>
                <p className="view-result"><strong>999</strong> of 999 families</p>
            </div>
            <div className="view-options-ctn">
                <div className="view-options-title">
                    <p>View:</p>
                    <button className="view-btn"><i className="fas fa-th-large"></i> Grid</button>
                    <button className="view-btn"><i className="fas fa-th-list"></i> List</button>
                    <div className="view-divider"></div>
                </div>
                <div><button className="view-btn view-btn-last">Sort by: Trending <i className="fas fa-caret-down"></i></button></div>

            </div>
        </div>
    );
}
export default ViewBar;