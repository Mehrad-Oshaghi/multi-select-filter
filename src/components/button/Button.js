import React from "react";
import "./Button.style.scss";

function Button ({ onClick, children }) {
    return (
        <button className="btn btn-primary" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;