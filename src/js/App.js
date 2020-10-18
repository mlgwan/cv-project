import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../assets/styles/styles.css";

import UserData from "./components/UserData";
import ContactData from "./components/ContactData";
import EducationalData from "./components/EducationalData";
import PracticalData from "./components/PracticalData";
import SubmitBtn from "./components/SubmitBtn";

import AddEducationForm from "./components/AddEducationForm"
import AddExperienceForm from "./components/AddExperienceForm";

export default class App extends Component {
    constructor(props){
        super();
        this.state = {
            name: "Max Mustermann",
            image: "url('../src/assets/images/profilePicturePlaceholder.png')",
            email: "generic@email.com",
            address: "Generic Street 12",
            phoneNumber: "49 176 1234 5678",
            schools: [],
            jobs: [],
            isEditing: false,
        };
    }

    hideElement(element) {
        element.style.display = "none";
    }

    showElement(element) {
        element.style.display = "block";
    }

    showDisplay() {
        this.hideElement(document.querySelector(".add-education"));
        this.hideElement(document.querySelector(".edit"));
        this.hideElement(document.querySelector(".add-experience"));
        this.showElement(document.querySelector(".display"));
    }
    showEdit() {
        this.hideElement(document.querySelector(".display"));
        this.hideElement(document.querySelector(".add-education"));
        this.hideElement(document.querySelector(".add-experience"));
        this.showElement(document.querySelector(".edit"));
    }

    showEducationForm() {
        this.hideElement(document.querySelector(".display"));
        this.hideElement(document.querySelector(".edit"));
        this.hideElement(document.querySelector(".add-experience"));
        this.showElement(document.querySelector(".add-education"));
    }

    showExperienceForm() {
        this.hideElement(document.querySelector(".add-education"));
        this.hideElement(document.querySelector(".edit"));
        this.hideElement(document.querySelector(".display"));
        this.showElement(document.querySelector(".add-experience"));
    }
    
    enterEditMode(edit) {
        this.setState({
            isEditing: !edit
        });
        this.showEdit();
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

    submitEducationForm(educationDataArr) {
        this.setState(state => {
            const schools = state.schools.concat([educationDataArr]);

            return {
                schools
            };
        });
        this.showDisplay();
    }

    submitExperienceForm(experienceDataArr) {
        this.setState(state => {
            const jobs = state.jobs.concat([experienceDataArr]);
            return {
                jobs
            };
        });
        this.showDisplay();
    }

    render() {
        return (
            <div className="App">
                <div className="display">
                    <UserData image={this.state.image} name={this.state.name}/>
                    <ContactData isEditing={this.state.isEditing} email={this.state.email} address={this.state.address} phoneNumber={this.state.phoneNumber}/>
                    <EducationalData showEducationForm={() => this.showEducationForm()} schools={this.state.schools}/>
                    <PracticalData showExperienceForm={() => this.showExperienceForm()} jobs={this.state.jobs}/>
                    <SubmitBtn onClick={() => this.enterEditMode(this.state.isEditing)} isEditing={this.state.isEditing}/>
                </div>
            <div className="edit">
                <div>edit window</div>
            </div>
            <div className="add-education">
                <AddEducationForm submitEducationForm={(arr) => this.submitEducationForm(arr)}/>
            </div>
            <div className="add-experience">
                <AddExperienceForm submitExperienceForm={(arr) => this.submitExperienceForm(arr)}/>
            </div>
      </div>
        );
    }
}