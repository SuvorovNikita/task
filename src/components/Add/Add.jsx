import React from "react";
import style from "./Add.module.css";

class Add extends React.Component {

    state = {
        number: 1,
    };

    check = React.createRef();
    send = () => {
        this.setState({number: this.state.number + 1});
        let nullText = this.check.current.value = " ";
        if (nullText) {
            alert('Add name')
        }
        let text = this.check.current.value;
        alert("Привет" + ' ' + text)

    };

    render = () => {
        return (<div>
                <span className={style.margin}>{this.state.number}</span>
                <input ref={this.check} type="text"/>
                <button onClick={this.send}>Отправить</button>
            </div>
        );
    };
}


export default Add;


