import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomeComponent from "./components/pages/Home";
import ListComponent from "./components/pages/List";

function App() {
    const myLists = [
        {
            id: 1,
            title: 'Things to do at home',
            items: ['Laundry', 'Dishes']
        },
        {
            id: 2,
            title: 'What to pack',
            items: ['Towel', 'Brush', 'Every freakin\' t-shirt']
        }
    ]

    const [lists, setLists] = useState(myLists);

    const addTaskToList = (id, text) => {
        const updatedList = lists.map(task => {
            if (task.id === +id) {
                task.items.push(text)
            }
            return task;
        })
        setLists(updatedList)
    }

    return (
        <div className="App">
            <header className="app-header">
                <h1>MyFavList</h1>
            </header>
            <Routes>
                <Route path="/" element={<HomeComponent list={lists}/>} />
                <Route path="/list/:id" element={<ListComponent list={lists} onAdd={addTaskToList}/>} />
            </Routes>
        </div>
    );
}

export default App;
