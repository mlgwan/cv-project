import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class PracticalData extends Component {
    createData(dataArr) {
        let jobs = [];

        for (let i = 0; i < this.props.jobs.length; i+=1) {
            const job = [];
            const name = <h3 key={`name${i}_${Date().toString()}`}>{dataArr[i].name}</h3>;
            const position = <div key={`position${i}_${Date().toString()}`}>{dataArr[i].position}</div>;
            const description = <div key={`description${i}_${Date().toString()}`}>{dataArr[i].description}</div>;
            const beginningDate = <div key={`beginningDate${i}_${Date().toString()}`}>{dataArr[i].beginningDate}</div>;
            const endDate = <div key={`endDate${i}_${Date().toString()}`}>{dataArr[i].endDate}</div>;

            job.push(name);
            job.push(position);
            job.push(description);
            job.push(beginningDate);
            job.push(endDate);
            job.push(<br key={`br${i}_${Date().toString()}`}/>);

            jobs.push(<div key={`job${i}_${Date().toString()}`} className = "job">{job}</div>);
        }
        return jobs;
    }
   
    render() {
        return (
            <div className="practical-data">
                <div className="subsection">
                    <h2>Experience</h2>
                    <div className="add-btn" onClick={this.props.showExperienceForm}></div>
                </div>
                {this.createData(this.props.jobs)}
            </div>
        );
    }
}