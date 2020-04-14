import React from 'react';
import classes from './App.module.css';
import Name from "./components/Message/Name/Name";
import Message from "./components/Message/Message";
import Time from "./components/Message/Time/Time";
import Avatar from "./components/Message/Avatar/Avatar";
import Qualities from "./components/Qualities/Qualities";
import Add from "./components/Add/Add";


function App() {

    let proper = [
        {name: "Трудолюбие", id: 0, active: false},
        {name: "Терпеливость", id: 1, active: true},
        {name: "Усердие", id: 2, active: false}
    ];

    let pro = proper.map((prof, id) => {
        return (<Qualities key={id} properties={prof}/>)
    });

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
            <div className={classes.text}>Качества</div>
            {pro}
            <Add />
        </div>
    );
}

export default App;
