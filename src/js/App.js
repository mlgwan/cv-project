import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../assets/styles/styles.css"
import profilePicturePlaceholder from "../assets/images/profilePicturePlaceholder.png";

import UserData from "./components/UserData";
import ContactData from "./components/ContactData";
import EducationalData from "./components/EducationalData";
import PracticalData from "./components/PracticalData";
import Edit from "./components/Edit";
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
            edit: null,
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
        this.hideElement(document.querySelector(".add-experience"));
        this.showElement(document.querySelector(".display"));
    }
    
    showEdit() {
        this.updateEdit();
        this.hideElement(document.querySelector(".display"));
        this.hideElement(document.querySelector(".add-education"));
        this.hideElement(document.querySelector(".add-experience"));
        this.updateIsEditing();
    }

    updateIsEditing() {
        let isEditingUpdate = !this.state.isEditing;
        this.setState({
            isEditing: isEditingUpdate
        });
    }

    showEducationForm() {
        this.hideElement(document.querySelector(".display"));
        this.hideElement(document.querySelector(".add-experience"));
        this.showElement(document.querySelector(".add-education"));
    }

    showExperienceForm() {
        this.hideElement(document.querySelector(".add-education"));
        this.hideElement(document.querySelector(".display"));
        this.showElement(document.querySelector(".add-experience"));
    }

    submitEducationForm(educationDataArr) {
        this.setState(state => {
            const schools = state.schools.concat([educationDataArr]);
            return {
                schools
            };
        });
        this.updateEdit();
        this.showDisplay();
    }

    submitExperienceForm(experienceDataArr) {
        this.setState(state => {
            const jobs = state.jobs.concat([experienceDataArr]);
            return {
                jobs
            };
        });
        this.updateEdit();
        this.showDisplay();
    }

    submitEdit(editedState) {
        this.setState({
            name: editedState.name,
            image: editedState.image,
            email: editedState.email,
            address: editedState.address,
            phoneNumber: editedState.phoneNumber,
            schools: editedState.schools,
            jobs: editedState.jobs,
        });
        this.updateEdit();
        this.updateIsEditing();
    }

    updateEdit() {
        this.setState({
            edit: <Edit submitEdit={(editedState)=>this.submitEdit(editedState)} name={this.state.name} image={this.state.image} email={this.state.email} address={this.state.address} phoneNumber={this.state.phoneNumber} schools={this.state.schools} jobs={this.state.jobs}/>,
        });
    }

    render() {
        if (this.state.isEditing) {
            return (
                <div className="edit">
                    {this.state.edit}
                </div>
            );
        }
        else {
            return (
                <div className="App">
                    <div className="display">
                        <UserData image={this.state.image} name={this.state.name}/>
                        <ContactData isEditing={this.state.isEditing} email={this.state.email} address={this.state.address} phoneNumber={this.state.phoneNumber}/>
                        <EducationalData showEducationForm={() => this.showEducationForm()} schools={this.state.schools}/>
                        <PracticalData showExperienceForm={() => this.showExperienceForm()} jobs={this.state.jobs}/>
                        <button onClick={() => this.showEdit()}>Edit</button>
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
}