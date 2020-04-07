import React from 'react';
import classes from './App.module.css';
import Name from "./components/Message/Name/Name";
import Message from "./components/Message/Message";
import Time from "./components/Message/Time/Time";
import Avatar from "./components/Message/Avatar/Avatar";
import Qualities from "./components/Qualities/Qualities";


function App() {

    let proper = [
        {name: "Трудолюбие", },
        {name: "Терпеливость"},
        {name: "Усердие"},
    ];

    let pro = proper.map(prof => {
        return  (<Qualities properties={prof.name}/>)
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
            <div className={classes.qualities}>
                {pro}
            </div>
        </div>
    );
}

export default App;
