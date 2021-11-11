import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import ListComponent from '../../molecules/List/index';
import { useSelector, useDispatch } from "react-redux";
import { addItem } from '../../../features/list';

export default function ListPage() {
    let { id } = useParams();
    const dispatch = useDispatch();

    const [val, setVal] = useState('');

    const storedLists = useSelector((state) => state.list);

    const selectedList = () => {
        return storedLists.filter(list => list.id === +id)[0];
    }

    const addTask = (e) => {
        e.preventDefault();

        if (val.length > 1) {
            setVal('');
            dispatch(addItem({ id, text: val }));
        }
    }

    const getRenderList = (item) => {
        return {
            text: item
        };
    }
    return (
        <div className="list-page">
            { !!storedLists && (
                <>
                    <h2>{selectedList().title}</h2>
                    <ListComponent items={selectedList().items.map(getRenderList)} hasLink={false} />
                    <form className="actions" onSubmit={addTask}>
                        <input type="text" value={val} onChange={e => setVal(e.target.value)} placeholder="New Task"/>
                        <button onClick={addTask}>Add</button>
                    </form>
                </>
            )}
        </div>
    );
}
