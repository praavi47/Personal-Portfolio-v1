import React, { Component } from 'react';
import style from './Exp.css';

export default class Exp extends Component {

    changeactive = () => {
        const btns = document.querySelectorAll('.tab-btn');
        const about = document.querySelector('.btn-container');
        const contents = document.querySelectorAll('.content');
    
        about.addEventListener('click', (e) => {
            console.log(e.target);
                const id = e.target.dataset.id;
                if (id) {
                btns.forEach((btn) => {
                btn.classList.remove('active');
                e.target.classList.add('active');
                });
                contents.forEach((content) => {
                content.classList.remove('active');
                });
                const elem = document.getElementById(id);
                elem.classList.add('active');
            }
        });
    }

    render() {
        return (
            <section className="Exp-Section">
            <div className="Exp-Section-Title">
                    <h2>Experience</h2>
            </div>
            <div className="Exp">
                <div className="btn-container" onClick={this.changeactive}>
                    <button className="tab-btn active" data-id="Java Intern">
                        Java Intern
                    </button>
                    <button className="tab-btn" data-id="Research Assistant-1">
                        Research Assistant
                    </button>
                    <button className="tab-btn" data-id="Research Assistant-2">
                        Research Assistant
                    </button>
                    <button className="tab-btn" data-id="Analyst Intern">
                        Analyst Intern
                    </button>
                </div>
                <div className="contents">
                    <div className="content active" id = "Java Intern">
                        <div className="content-header">
                            <h6 className="title">JAVA INTERN at Techmojo Solutions, Hyderabad, India</h6>
                            <h8 className="date">May 2017 - Jul 2017</h8>
                        </div>
                        <div className="content-body">
                            <p className="desc">
                            Implemented caching of data using Spring Boot.<br/>
                            Implemented REST API’s to provide services to dependent systems.<br/>
                            Collaborated with Team members to perform POC on Docker containerization.
                            </p>
                        </div>
                    </div>
                    <div className="content" id="Research Assistant-1">
                        <div className="content-header">
                            <h6 className="title">RESEARCH ASSISTANT at University of Memphis, TN</h6>
                            <h8 className="date">Jul 2019 - Aug 2019</h8>
                        </div>
                        <div className="content-body">
                            <p className="desc">
                            Automated datasets preprocessing.<br/>
                            Studied various Artificial Immune algorithms.<br/>
                            Studied architecture of CNN and PCA.
                            </p>
                        </div>
                    </div>
                    <div className="content" id="Research Assistant-2">
                        <div className="content-header">
                            <h6 className="title">RESEARCH ASSISTANT at University of Memphis, TN</h6>
                            <h8 className="date">Jan 2019 - May 2019</h8>
                        </div>
                        <div className="content-body">
                            <p className="desc">
                                Collected research data of professors and processed them.<br/>
                                Assisted professors in developing their own personal sites.
                            </p>
                        </div>
                    </div>
                    <div className="content" id="Analyst Intern">
                        <div className="content-header">
                            <h6 className="title">SYSTEMS ANALYST INTERN at UMRF Ventures, Memphis, TN</h6>
                            <h8 className="date">Jul 2019 - Aug 2019</h8>
                        </div>
                        <div className="content-body">
                            <p className="desc">
                            Performed log analysis using Splunk and created dashboard reports for the end users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}