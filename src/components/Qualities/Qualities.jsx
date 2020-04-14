import React from "react";
import classes from "./Qualities.module.css";

class Qualities extends React.Component {

    render = () => {

        let qualitiesStyle = this.props.properties.active ? classes.activeClass : classes.qualitiesItem;

        return (<div>
                <div className={qualitiesStyle}>{this.props.properties.name}</div>
            </div>
        );
    };
}


export default Qualities;


