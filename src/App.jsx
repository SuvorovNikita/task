import React from 'react';
import classes from './App.module.css';
import Name from "./components/Message/Name/Name";
import Message from "./components/Message/Message";
import Time from "./components/Message/Time/Time";
import Avatar from "./components/Message/Avatar/Avatar";


function App() {
    return (
        <div className={classes.App}>
            <div className={classes.wrapper}>
                <Avatar/>
                <div className={classes.wrapperMessage}>
                    <Name/>
                    <Message/>
                    <Time/>
                </div>
            </div>
        </div>
    );
}

export default App;
