import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class SubmitBtn extends Component {

    render() {
        return (
            <div className="submit-btn">
                <button onClick={this.props.onClick}>Submit</button>
            </div>
        );
    }
}