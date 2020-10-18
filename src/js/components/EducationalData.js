import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class EducationalData extends Component {
    createData(dataArr) {
        let schools = [];

        for (let i = 0; i < this.props.schools.length; i+=1) {
            const school = [];
            const name = <h3 key={`name${i}_${Date().toString()}`}>{dataArr[i].name}</h3>;
            const major = <div key={`major${i}_${Date().toString()}`}>{dataArr[i].major}</div>;
            const degree = <div key={`degree${i}_${Date().toString()}`}>{dataArr[i].degree}</div>;
            const graduationDate = <div key={`graduationDate${i}_${Date().toString()}`}>{dataArr[i].graduationDate}</div>;

            school.push(name);
            school.push(major);
            school.push(degree);
            school.push(graduationDate);
            school.push(<br key={`br${i}_${Date().toString()}`}/>);

            schools.push(<div key={`school${i}_${Date().toString()}`} className="school">{school}</div>);
        }
        return schools;
    }
   
    render() {
        return (
            <div className="educational-data">
                <div className="subsection">
                    <h2>Education</h2>
                    <div className="add-btn" onClick={this.props.showEducationForm}></div>
                </div>
                {this.createData(this.props.schools)}
            </div>
        );
    }
}