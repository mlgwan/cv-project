import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class UserData extends Component {
    constructor(props) {
        super();

    }
    render() {
        return (
            <div className="user-data">
                <image style={{display: "flex", height: "200px", width: "200px", backgroundSize: "cover", backgroundImage: this.props.image}}></image>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}