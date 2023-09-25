import React from "react";
import "./Box.style.scss";

function Box ({ title, children }) {
    return (
        <div className="box">
            {title && <h2>{title}</h2>}
            {children}
        </div>
    )
}

export default Box;