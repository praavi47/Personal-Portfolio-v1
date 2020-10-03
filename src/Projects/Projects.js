import React, { Component } from 'react';
import styles from './Projects.css';

export default class Projects extends Component {
    
    changeactiveproject = () => {
        const projbtns = document.querySelectorAll('.Project-tab-btn');
        const projabout = document.querySelector('.Project-btn-container');
        const projcontents = document.querySelectorAll('.Project-content');
    
        projabout.addEventListener('click', (e) => {
            console.log(e.target);
                const id = e.target.dataset.id;
                if (id) {
                projbtns.forEach((btn) => {
                btn.classList.remove('Project-active');
                e.target.classList.add('Project-active');
                });
                projcontents.forEach((content) => {
                content.classList.remove('Project-active');
                });
                const elem = document.getElementById(id);
                elem.classList.add('Project-active');
            }
        });
    }

    render() {
        return (
            <section className="Project-Section">
            <div className="Project-Section-Title">
                    <h2>Projects</h2>
            </div>
            <div className="Project">
                <div className="Project-btn-container" onClick={this.changeactiveproject}>
                    <button className="Project-tab-btn Project-active" data-id="Stock-Brokerage Application">
                        Stock-Brokerage
                    </button>
                    <button className="Project-tab-btn" data-id="Two Factor Authentication">
                        2-F Authentication
                    </button>
                    <button className="Project-tab-btn" data-id="Search Engine Optimization">
                        SEO
                    </button>
                    <button className="Project-tab-btn" data-id="Stock Viewer Application">
                        Stock-Viewer
                    </button>
                </div>
                <div className="Project-contents">
                    <div className="Project-content Project-active" id = "Stock-Brokerage Application">
                        <div className="Project-content-header">
                            <h6 className="Project-title">Stock-Brokerage Application<br/><spam className="ongoing">On-Going</spam></h6>
                        </div>
                        <div className="Project-content-body">
                            <p className="Project-desc">
                            Developing a full-stack Java project using Spring Boot and React.js.<br/> 
                            The goal is to design and develop a web application that gives a detailed, interactive plots <br/> on 10Ks and
                            10Qs. In addition, the website provides details of the stockbrokers and, rate them according to their 
                            previous work, as provided on EDGAR site.
                            </p>
                        </div>
                    </div>
                    <div className="Project-content" id="Two Factor Authentication">
                        <div className="Project-content-header">
                            <h6 className="Project-title">Two Factor Authentication</h6>
                        </div>
                        <div className="Project-content-body">
                            <p className="Project-desc">
                            Designed a web application to authenticate users using two-factor authentication.<br/>
                            Used Cipher encryption and SHA hashing algorithms to encrypt and hash the password & second factor<br/>
                            i.e., a two-character user-defined passcode.
                            </p>
                        </div>
                    </div>
                    <div className="Project-content" id="Search Engine Optimization">
                        <div className="Project-content-header">
                            <h6 className="Project-title">Search Engine Optimization</h6>
                        </div>
                        <div className="Project-content-body">
                            <p className="Project-desc">
                            Designed website-using WordPress and, used the SEO tools & <br/>
                            techniques to monitor, and track the user’s behavior on the site.<br/>
                            Used web-based analytical tools such as google analytics and google keyword planner.
                            </p>
                        </div>
                    </div>
                    <div className="Project-content" id="Stock Viewer Application">
                        <div className="Project-content-header">
                            <h6 className="Project-title">Stock-Viewer Application</h6>
                        </div>
                        <div className="Project-content-body">
                            <p className="Project-desc">
                            Designed a web application to simulate the function of a stock viewer application.<br/>
                            Implemented using the Spring Boot and JPA.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}