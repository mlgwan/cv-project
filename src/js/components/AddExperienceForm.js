import React, { Component } from "react";

export default class AddExperienceForm extends Component { 
    constructor(props) {
        super();

        this.state = {
            experienceName: "",
            experiencePosition: "",
            experienceDescription: "",
            experienceBeginningDate: "",
            experienceEndDate: "",
        }
    }

    changeExperienceName(e) {
        this.setState({
            experienceName: e.target.value,
        });
    }

    changeExperiencePosition(e) {
        this.setState({
            experiencePosition: e.target.value,
        });
    }

    changeExperienceDescription(e) {
        this.setState({
            experienceDescription: e.target.value,
        });
    }

    changeExperienceBeginningDate(e) {
        this.setState({
            experienceBeginningDate: e.target.value,
        });
    }

    changeExperienceEndDate(e) {
        this.setState({
            experienceEndDate: e.target.value,
        });
    }

    submitExperienceForm() {
        let experienceDataObj = {
            name: this.state.experienceName,
            position: this.state.experiencePosition,
            description: this.state.experienceDescription,
            beginningDate: this.state.experienceBeginningDate,
            endDate: this.state.experienceEndDate,
        };
        this.props.submitExperienceForm(experienceDataObj);
        this.setState({
            experienceName: "",
            experiencePosition: "",
            experienceDescription: "",
            experienceBeginningDate: "",
            experienceEndDate: "",
        });
    }


    render() {
        return (
            <div className="add-experience-form">
                <input value={this.state.experienceName} onChange={(e) => this.changeExperienceName(e)} type="text" placeholder="Name"></input>
                <input value={this.state.experiencePosition} onChange={(e) => this.changeExperiencePosition(e)} type="text" placeholder="Position"></input>
                <textarea value={this.state.experienceDescription} onChange={(e) => this.changeExperienceDescription(e)} type="text" placeholder="Description"></textarea>
                <input value={this.state.experienceBeginningDate} onChange={(e) => this.changeExperienceBeginningDate(e)} type="date" placeholder="Beginning Date"></input>
                <input value={this.state.experienceEndDate} onChange={(e) => this.changeExperienceEndDate(e)} type="date" placeholder="End Date"></input>
                <button onClick={() => this.submitExperienceForm()}>Submit</button>
            </div>
        );
    }
}
