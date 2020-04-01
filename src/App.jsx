import React from 'react';
import './App.css';
import Name from "./components/Message/Name/Name";
import Message from "./components/Message/Message";
import Time from "./components/Message/Time/Time";
import Avatar from "./components/Message/Avatar/Avatar";


function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Avatar/>
                <div className="wrapper-message">
                    <Name/>
                    <Message/>
                    <Time/>
                </div>
            </div>
        </div>
    );
}

export default App;
