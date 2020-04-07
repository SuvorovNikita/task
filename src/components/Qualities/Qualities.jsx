import React from "react";
import classes from "./Qualities.module.css";

class Qualities extends React.Component {
    render = () => {
        return (<div>
                <div className={classes.qualitiesItem}>{this.props.properties}</div>
            </div>
        );
    };
}


export default Qualities;


