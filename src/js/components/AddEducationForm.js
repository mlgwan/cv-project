import React, { Component } from "react";

export default class AddEducationForm extends Component { 
    constructor(props) {
        super();

        this.state = {
            educationName: "",
            educationMajor: "",
            educationDegree: "",
            educationGraduationDate: "",
        }
    }

    changeEducationName(e) {
        this.setState({
            educationName: e.target.value,
        });
    }

    changeEducationMajor(e) {
        this.setState({
            educationMajor: e.target.value,
        });
    }

    changeEducationDegree(e) {
        this.setState({
            educationDegree: e.target.value,
        });
    }

    changeEducationGraduationDate(e) {
        this.setState({
            educationGraduationDate: e.target.value,
        });
    }

    submitEducationForm() {
        let educationDataObj = {
            name: this.state.educationName,
            major: this.state.educationMajor,
            degree: this.state.educationDegree,
            graduationDate: this.state.educationGraduationDate,
        };
        this.props.submitEducationForm(educationDataObj);
    }


    render() {
        return (
            <div className="add-education-form">
                <input onChange={(e) => this.changeEducationName(e)}type="text" placeholder="Name"></input>
                <input onChange={(e) => this.changeEducationMajor(e)}type="text" placeholder="Major"></input>
                <input onChange={(e) => this.changeEducationDegree(e)}type="text" placeholder="Degree"></input>
                <input onChange={(e) => this.changeEducationGraduationDate(e)}type="date" placeholder="Graduation Date"></input>
                <button onClick={() => this.submitEducationForm()}>Submit</button>
            </div>
        );
    }
}
