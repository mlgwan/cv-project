import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class SubmitBtn extends Component {
    constructor(props){
        super();

        this.state = {
            isEditing: props.isEditing,
        }
    }

    showButton(isEditing) {
        let button;
        if (isEditing) {
            button = <button onClick={this.props.onClick}>Submit</button>;
        }

        else {
            button = <button onClick={this.props.onClick}>Edit</button>;
        }

        return button;
    }

    render() {
        return (
            <div className="submit-btn">
                {this.showButton(this.props.isEditing)}
            </div>
        );
    }
}