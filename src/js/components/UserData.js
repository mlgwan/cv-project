import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class UserData extends Component {
    constructor(props) {
        super();

    }
    render() {
        return (
            <div className="user-data">
                <image className="profile-picture"></image>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}