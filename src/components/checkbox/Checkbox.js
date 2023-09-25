import React from "react";
import "./Checkbox.style.scss";

function Checkbox ({ value, checked, onChange }) {
    const slugifyValue = value?.toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');

    return (
        <div className="styled-checkbox">
            <input
                type="checkbox"
                checked={checked}
                value={value}
                onChange={onChange}
                id={slugifyValue}
                name={slugifyValue}
            />
            <label htmlFor={slugifyValue} dangerouslySetInnerHTML={{ __html: value }}></label>
        </div>
    )
}

export default Checkbox;