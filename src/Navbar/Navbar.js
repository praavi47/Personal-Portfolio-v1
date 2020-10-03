import React, { Component } from 'react';
import {Link} from 'react-scroll';
import style from './Navbar.css';

export default class Navbar extends Component {

    state = {
        btn: false
    }

    togglebtn = () => {
        this.setState({btn: !this.state.btn});
    }

    navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.Nav-links');

            nav.classList.toggle('Navbar-active');

    }

    // scrollEffect = () => {
    //     (document).addEventListener('scroll', function() {
    //         if((document).scrollTop()) {
    //             ('header').removeClass('scrollEffect')
    //         }
    //         else{
    //             ('header').addClass('scrollEffect')
    //         }
    //     });
    // }
 
    render() {
        return (
            <header>
            <div className="Navbar">
                <div>
                    <ul className="Nav-links">
                        <li>
                        <Link
                            activeClass="active"
                            className="Links"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            >Home</Link></li>
                        <li>
                            <Link
                            activeClass="active"
                            className="Links"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            >Skills</Link></li>
                        <li>
                            <Link
                            activeClass="active"
                            className="Links"
                            to="exp"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            >Experience</Link></li>
                        <li>
                            <Link
                            activeClass="active"
                            className="Links"
                            to="proj"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            >Projects</Link></li>
                        </ul>
                    </div>
                    <div className="burger" onClick={this.navSlide}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
            </div>
            </header>
        )
    }
}
