import React from 'react';
import './style.css';

export default function ListItemComponent({children, onClick, hoverable}) {
    return (
        <li onClick={onClick} className={`list-item ${hoverable ? 'hoverable' : ''}`}>
            {children}
        </li>
    );
}
