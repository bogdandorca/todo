import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import ListComponent from '../../molecules/List/index';

export default function ListPage({list, onAdd}) {
    let { id } = useParams();
    const [val, setVal] = useState('');

    const selectedList = () => {
        return list.filter(list => list.id === +id)[0];
    }

    const addTask = (e) => {
        e.preventDefault();

        if (val.length > 1) {
            setVal('');
            onAdd(id, val);
        }
    }

    const getRenderList = (item) => {
        return {
            text: item
        };
    }
    return (
        <div className="list-page">
            { !!list && (
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
