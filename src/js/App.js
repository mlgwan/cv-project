import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../assets/styles/styles.css";

import UserData from "./components/UserData";
import ContactData from "./components/ContactData";
import EducationalData from "./components/EducationalData";
import PracticalData from "./components/PracticalData";
import SubmitBtn from "./components/SubmitBtn";
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

        this.setState({
            edit: <Edit name={this.state.name} image={this.state.image} email={this.state.email} address={this.state.address} phoneNumber={this.state.phoneNumber} schools={this.state.schools} jobs={this.state.jobs}/>,
        })

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
                    <SubmitBtn onClick={() => this.showEdit()} isEditing={this.state.isEditing}/>
                </div>
            <div className="edit">
                {this.state.edit}
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