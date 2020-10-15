import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class EducationalData extends Component {
    createData(dataArr) {
        let schools = [];

        for (let i = 0; i < this.props.schools.length; i+=1) {
            const school = [];
            const name = <div key={`name${i}_${Date().toString()}`}>{dataArr[i].name}</div>;
            const major = <div key={`major${i}_${Date().toString()}`}>{dataArr[i].major}</div>;
            const degree = <div key={`degree${i}_${Date().toString()}`}>{dataArr[i].degree}</div>;
            const graduationDate = <div key={`graduationDate${i}_${Date().toString()}`}>{dataArr[i].graduationDate}</div>;

            school.push(name);
            school.push(major);
            school.push(degree);
            school.push(graduationDate);

            schools.push(<div key={`school${i}_${Date().toString()}`} className="school">{school}</div>);
        }
        return schools;
    }
   
    render() {
        return (
            <div className="educational-data">
                {this.createData(this.props.schools)}
            </div>
        );
    }
}