import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomeComponent from "./components/pages/Home";
import ListComponent from "./components/pages/List";
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <header className="app-header">
                    <h1>MyFavList</h1>
                </header>
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/list/:id" element={<ListComponent />} />
                </Routes>
            </Provider>
        </div>
    );
}

export default App;
