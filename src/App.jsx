import React from 'react';
import './App.css';
import Name from "./components/Message/Name/Name";
import Message from "./components/Message/Message";


function App() {
    return (
        <div className="App">
            <Name/>
            <div className="wrapper">
                <Name/>
                <Message/>
            </div>
        </div>
    );
}

export default App;
