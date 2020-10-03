import React, { Component } from 'react';
import style from './About.css';
import img from '../images.png';

export default class About extends Component {
    render() {
        return (
            <section className = "About">
                <div className="About-Sec-Img">
                    <img src={img} alt=""/>
                </div>
                <div className="Name">
                    <p>Raavi Pavan Venkat</p>
                </div>
                <div className="About-div">
                    <p className="About-para">
                        To seek an internship position in the fields of programming,<br/> databases and networking where my technical
                        skills can be<br/> utilized and enhanced.
                    </p>
                </div>
            </section>
        )
    }
}
