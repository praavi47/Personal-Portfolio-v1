import React, { Component } from 'react';
import styles from './Skills.css';
import $ from 'jquery';

export default class Skills extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            skills: {
                Programming: {
                    Java: 'Proficient', JavaScript: 'Expert', Python: 'Expert'
                },
                Databases: {
                    Oracle: 'Expert', MySQL: 'Expert', MongoDB: 'Practitioner'
                },
                Frameworks: {
                    Spring: 'Practitioner', SpringBoot: 'Practitioner'
                },
                WebTech: {
                    HTML5: 'Expert', CSS3: 'Expert', JavaScript: 'Expert', XML: 'Expert'
                },
                BigData: {
                    Hadoop: 'Practitioner', ApacheSpark: 'Practitioner'
                },
                WebAnalytics: {
                    GoogleAnalytics: 'Practitioner', KeywordPlanner: 'Practitioner'
                }
            },
            display: []
        }
        this.onClickSkills = this.onClickSkills.bind(this)
      }

    onClickSkills(e) { 
        // const skillCards = document.getElementById('cards');
        // skillCards.addEventListener('click', e => {
            const id = e.target.dataset.id;
            console.log(id);
            const idSkills = this.state.skills[id];
            this.setState({display: idSkills});
            console.log(idSkills);
        // })

    }

    render() {
        return (
            <section className="Skills">
                <div className="Skills-Section-Title">
                    <h2>Skills</h2>
                </div>
                <div className="cards" id="cards">
                    <div className="card" onClick={this.onClickSkills} data-id="Programming">
                        <h5 onClick={this.onClickSkills} data-id="Programming">Programming</h5>
                    </div>
                    <div className="card" onClick={this.onClickSkills} data-id="Databases">
                        <h5 onClick={this.onClickSkills} data-id="Databases">Databases</h5>
                    </div>
                    <div className="card" onClick={this.onClickSkills} data-id="Frameworks">
                        <h5 onClick={this.onClickSkills} data-id="Frameworks">Frameworks</h5>
                    </div>
                    <div className="card" onClick={this.onClickSkills} data-id="WebTech">
                        <h5 onClick={this.onClickSkills} data-id="WebTech">Web Tech</h5>
                    </div>
                    <div className="card" onClick={this.onClickSkills} data-id="BigData">
                        <h5 onClick={this.onClickSkills} data-id="BigData">Big Data</h5>
                    </div>
                    <div className="card" onClick={this.onClickSkills} data-id="WebAnalytics">
                        <h5 onClick={this.onClickSkills} data-id="WebAnalytics">Web Analytics</h5>
                    </div>
                </div>
                 {/* <div className="display-skills">
                    <div className="skill-container">
                        {this.state.display.map((skill) => { 
                            return(<div className="skill" id={skill}>
                                {skill}
                            </div>)
                        })}
                    </div> */}
                {/* </div>  */}
            </section>
        )
    }
}