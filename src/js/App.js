import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../assets/styles/styles.css";

import UserData from "./components/UserData";
import ContactData from "./components/ContactData";
import EducationalData from "./components/EducationalData";
import PracticalData from "./components/PracticalData";
import SubmitBtn from "./components/SubmitBtn";

export default class App extends Component {
    constructor(props){
        super();
        this.state = {
            name: "Max Mustermann",
            image: "url('../src/assets/images/profilePicturePlaceholder.png')",
            email: "generic@email.com",
            address: "Generic Street 12",
            phoneNumber: "49 176 1234 5678",
            schools: [
                {
                    name: "generic school",
                    major: "genericism",
                    degree: "master",
                    graduationDate: "10.10.2020"
                },
            ],
            jobs: [
                {
                    name: "generic company",
                    position: "genericist",
                    description: "generic practices in a generic environment",
                    beginningDate: "11.11.2011",
                    endDate: "12.12.2012"
                },
                {
                    name: "generic company2",
                    position: "genericist2",
                    description: "2generic practices in a generic environment",
                    beginningDate: "11.11.2012",
                    endDate: "12.12.2013"
                },
            ],
            isEditing: false,
        };
    }

    enterEditMode(edit) {
        this.setState({
            isEditing: !edit
        });
    }

    changeFields() {
        if (this.props.isEditing) {
            this.setState({
                email: <input onChange={(e) => {this.setState({emailData: e.target.value})}} type="text" value={this.state.emailData}></input>,
                phoneNumber: <input onChange={(e) => {this.setState({phoneNumberData: e.target.value})}} type="text" value={this.state.phoneNumberData}></input>,
                address: <input onChange={(e) => {this.setState({addressData: e.target.value})}} type="text" value={this.state.addressData}></input>
            
            });            
        }
        else {
            this.setState({
                email: <div>{this.state.emailData}</div>,
                phoneNumber: <div>{this.state.phoneNumberData}</div>,
                address: <div>{this.state.addressData}</div>
            });
        }
    }

    render() {
        return (
            <div className="App">
                <UserData image={this.state.image} name={this.state.name}/>
                <ContactData setEmail={(newEmail) => this.setEmail(newEmail)} isEditing={this.state.isEditing} email={this.state.email} address={this.state.address} phoneNumber={this.state.phoneNumber}/>
                <EducationalData schools={this.state.schools}/>
                <PracticalData jobs={this.state.jobs}/>
                <SubmitBtn onClick={() => this.enterEditMode(this.state.isEditing)} isEditing={this.state.isEditing}/>
            </div>
        );
    }
}