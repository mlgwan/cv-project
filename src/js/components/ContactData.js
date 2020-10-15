import React, { Component } from "react";
import ReactDOM from "react-dom";


export default class ContactData extends Component {
    render() {
        return (
            <div className="contact-data">
                <h2>Contact</h2>
                <div>{this.props.email}</div>
                <div>{this.props.phoneNumber}</div>
                <div>{this.props.address}</div>
            </div>
        );
    }
}