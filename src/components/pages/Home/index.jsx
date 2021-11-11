import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import ListComponent from '../../molecules/List/index';

export default function HomePage() {
    const storedLists = useSelector((state) => state.list);

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
            <ListComponent items={storedLists.map(getRenderList)} hasLink={true} />
        </div>
    );
}
