import React from "react"
import style from "./Add.module.css";

class Add extends React.Component {
    check = React.createRef();

    state = {
        number: 1,
        id: 1
    };
    send = () => {
        this.setState({number: this.state.number + 1});
        let text = this.check.current.value;
        this.check.current.value = "";
        alert("Привет" + ' ' + text);
    };

    render = () => {
        return (<div className={style.wrapper}>
                <span className={style.margin}>{this.state.number}</span>
                <input ref={this.check} type="text"/>
                <button onClick={this.send}>Отправить</button>
            </div>
        );
    };
}


export default Add;


