import React from "react";
import "./SearchBox.style.scss";
import SearchIcon from "../../assets/icons/search.svg";

function SearchBox ({ searchQuery, onChange, showIcon, placeholder = "Search for..." }) {
    return (
        <div className="search-box">
            <input
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                onChange={onChange}
            />
            {showIcon && <img src={SearchIcon} alt="Search"/>}
        </div>
    )
}

export default SearchBox;