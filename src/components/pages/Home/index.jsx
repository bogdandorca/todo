import React from 'react';
import './style.css';
import ListComponent from '../../molecules/List/index';

export default function HomePage({list}) {
    const getRenderList = (list) => {
        return {
            ...list,
            text: list.title,
            link: `/list/${list.id}`
        };
    }
    return (
        <div className="home-page">
            <h2>My Lists</h2>
            <ListComponent items={list.map(getRenderList)} hasLink={true} />
        </div>
    );
}
