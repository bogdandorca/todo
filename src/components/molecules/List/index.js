import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListItemComponent from '../../atoms/ListItem';
import './style.css';

export default function ListComponent({ items, hasLink }) {
    const navigate = useNavigate();

    const onItemClick = (item) => {
        if (hasLink) {
            navigate(item.link)
        }
    }
    return (
        <ul className="list">
            {items.map(item => (
                <ListItemComponent onClick={() => onItemClick(item)} hoverable={hasLink}>
                    {item.text}
                </ListItemComponent>
            ))}
        </ul>
    );
}
