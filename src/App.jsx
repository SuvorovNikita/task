import React from 'react';
import classes from './App.module.css';
import Name from "./components/Message/Name/Name";
import Message from "./components/Message/Message";
import Time from "./components/Message/Time/Time";
import Avatar from "./components/Message/Avatar/Avatar";
import Qualities from "./components/Qualities/Qualities";


function App() {

    let proper = [
        {name: "Трудолюбие",},
        {name: "Терпеливость"},
        {name: "Усердие"},
    ];

    let classForAll = this.props.filterValue === "Усердие" ? "filterActive" : "";

    let pro = proper.map((prof, index) => {

        return (<Qualities properties={prof.name} key={index}/>)
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
            <div>
                {pro}
            </div>
        </div>
    );
}

export default App;
