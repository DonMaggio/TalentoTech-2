
import React from "react";
import "./SearchBar.css"; // Importamos el CSS

export const SearchBar = () => {
    return (
    <label className="search-bar-container" htmlFor="search-bar">
        <input id="search-bar" placeholder="Producto a buscar..." className="search-input"/>
        <button className="search-button">
            <div className="button-text">
                <span>Buscar</span>
            </div>
        </button>
    </label>
    );
};

