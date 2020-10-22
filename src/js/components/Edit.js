import React, { Component } from 'react';

export default class Edit extends Component {
    constructor(props) {
        super();

        this.state = {
            name: props.name,
            image: props.image,
            email: props.email,
            address: props.address,
            phoneNumber: props.phoneNumber,
            schools: props.schools,
            jobs: props.jobs,
        };
    }

    changeValue(valueName, value) {
        this.setState({
            [valueName]: value
        })
    }
    
    changeSchoolValue(valueName, value, i) {
        this.setState(({schools}) => ({
            schools: [
                ...schools.slice(0, i), 
                {   
                ...schools[i],
                [valueName]: value,            
                },
                ...schools.slice(i+1)
            ]
        }));
    }

    changeJobValue(valueName, value, i) {
        this.setState(({jobs}) => ({
            jobs: [
                ...jobs.slice(0, i), 
                {   
                ...jobs[i],
                [valueName]: value,            
                },
                ...jobs.slice(i+1)
            ]
        }));
    }

    render() {
        let schools = [];
        this.state.schools.forEach((school, i) => schools.push(
            <div className="school" key={`school${i}`}>
                <input onChange={(e) => this.changeSchoolValue("name", e.target.value, i)} type="text" placeholder="Name" value={school.name}></input>
                <input onChange={(e) => this.changeSchoolValue("degree", e.target.value, i)} type="text" placeholder="Degree" value={school.degree}></input>
                <input onChange={(e) => this.changeSchoolValue("graduationDate", e.target.value, i)} type="text" placeholder="Graduation Date" value={school.graduationDate}></input>
                <input onChange={(e) => this.changeSchoolValue("major", e.target.value, i)} type="date" placeholder="Major" value={school.major}></input>
            </div>
        ));

        let jobs = [];
        this.state.jobs.forEach((job, i) => jobs.push(
            <div className="jobs" key={`job${i}`}>
                <input onChange={(e) => this.changeJobValue("name", e.target.value, i)} type="text" placeholder="Name" value={job.name}></input>
                <input onChange={(e) => this.changeJobValue("position", e.target.value, i)} type="text" placeholder="Position" value={job.position}></input>
                <input onChange={(e) => this.changeJobValue("description", e.target.value, i)} type="text" placeholder="Description" value={job.description}></input>
                <input onChange={(e) => this.changeJobValue("beginningDate", e.target.value, i)} type="date" placeholder="Beginning Date" value={job.beginningDate}></input>
                <input onChange={(e) => this.changeJobValue("endDate", e.target.value, i)} type="date" placeholder="End Date" value={job.endDate}></input>
            </div>
        ));

        return (
            <div className="edit-form">
                <input onChange={(e) => this.changeValue("name", e.target.value)} type="text" placeholder="Name" value={this.state.name}></input>
                <input onChange={(e) => this.changeValue("email", e.target.value)} type="text" placeholder="Email" value={this.state.email}></input>
                <input onChange={(e) => this.changeValue("address", e.target.value)} type="text" placeholder="Address" value={this.state.address}></input>
                <input onChange={(e) => this.changeValue("phoneNumber", e.target.value)} type="text" placeholder="Phone Number" value={this.state.phoneNumber}></input>
                <div className="schools-list">{schools}</div>
                <div className="jobs-list">{jobs}</div>
            </div>
        )
    }
}