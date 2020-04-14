import React from "react";
import style from "./Add.module.css";

class Add extends React.Component {

    check = React.createRef();
    send = () => {
        let text = this.check.current.value;
        this.check.current.value = "";
        alert("Привет" + ' ' + text);
    };

    render = () => {
        return (<div>
                <span className={style.margin}>1</span>
                <input ref={this.check} type="text"/>
                <button onClick={this.send}>Отправить</button>
            </div>
        );
    };
}


export default Add;


