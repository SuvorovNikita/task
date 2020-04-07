import React from "react";
import classes from "./Qualities.module.css";

const Qualities = (props) => {

    return (<div>
            <div className={classes.qualitiesItem}>{props.properties}</div>
        </div>
    );
};

export default Qualities;


