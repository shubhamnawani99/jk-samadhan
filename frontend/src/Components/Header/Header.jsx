import React from 'react';
import './Header.css';

export default function(){
    return (
        <header className="header">
            <div className="wrapper header-top-first">
                <div className="container container-top">
                    <div className="d-flex justify-content-center align-items-center">
                        {/* <a href="https://www.india.gov.in/" title="GOVERNMENT OF INDIA" target="_blank" className="govOfIndia_a">
                        <img src="img/Emblem.png"  alt="Emblem" className="img-fluid"> 
                        GOVERNMENT OF INDIA</a>  */}
                    </div>
                </div>
            </div>
            <div className="header__top">
                <div className="container">
                    <div className="container_head_1 text-center my-1">
                        <div className="row d-flex align-items-center w-100 mx-auto">
                            <div className="col d-flex justify-content-start align-items-center ps-0">
                                <a className="logo-img" title="JK Samadhan logo" role="Logo" rel="Logo">
                                    <img src="img/group_logo.png" alt="JK Samadhan logo" className="JKlogo" />
                                </a>
                            </div>
                            <div className="col d-flex justify-content-end text-end pe-0">
                                <div className="w-100">
                                    <div className="clearfix custom-box">
                                        <div id="sizer" className="head_user">
                                            <div className="dropdown clms-dd">
                                                <a href="javascript:void(0);" aria-label="This Button Opens A Dropdown" className="nav-link dropdown-toggle custom-dropdown-toggle ps-4" role="button" aria-expanded="false">
                                                    <div className="video-play-button">
                                                        <span></span>
                                                    </div>
                                                    LMS Videos
                                                </a>
                                                <ul className="dropdown-menu vidDropdown">
                                                    <li data-value="loginVideo.mp4">
                                                        <a href="javascript:void(0);" aria-label="This Button Opens A Modal Box" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#videoViewer">How to Login</a>
                                                    </li>
                                                    <li data-value="registerVideo.mp4">
                                                        <a href="javascript:void(0);" aria-label="This Button Opens A Modal Box" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#videoViewer">How to Register</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div tabindex="0" aria-label="Language Selection" id="customBhas" className="lang-switcher-block nodtranslate">
                                                <div className="dont-translate bhashini-skip-translation" id="bhashini-translation" title="Translate this page!">
                                                    <select className="translate-plugin-dropdown" id="translate-plugin-target-language-list">
                                                        <option className="dont-translate" value="">Language</option>
                                                        <option className="dont-translate" value="en">English</option>
                                                        <option className="dont-translate" value="hi">Hindi (हिन्दी)</option>
                                                        <option className="dont-translate" value="ur">Urdu (اردو)</option>
                                                    </select>
                                                    <img id="cusTag" src="img/bhashini_logo.png" alt="toggle translation popup" />
                                                </div>
                                            </div>
                                            <div className="user_accessibility">
                                                <a aria-label="This Button Opens A Dropdown for Accessibility Feature" href="javascript:void(0)" className="access_icon" title="text">
                                                    <i className="fa fa-wheelchair"></i>
                                                </a>
                                                <div className="access-type" id="chcp_font_size">
                                                    <a href="javascript:void(0)" className="changer" title="Decrease Text" aria-label="Decrease Text" id="font-decrease"><sup>-</sup>A</a>
                                                    <a href="javascript:void(0)" className="changer" aria-label="Default Text" id="font-original" title="Reset Text">A</a>
                                                    <a href="javascript:void(0)" className="changer" aria-label="Increase Text" id="font-increase" title="Increase Text"><sup>+</sup>A</a>
                                                    <div id="text_resize_clear"></div>
                                                </div>
                                            </div>
                                            <div className="theme-changer" id="toggleThemeButton">
                                                <label className="ui-switch" aria-label="Change Theme Toggle Button">
                                                    <input type="checkbox" tabindex="0" />
                                                    <div className="slider" tabindex="0">
                                                        <div className="circle" tabindex="0"></div>
                                                    </div>
                                                </label>
                                            </div>
                                            <button id="toggleSpeech" aria-label="Screen Reader Access">
                                                Screen Reader <i className="fas fa-power-off"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open" tabindex="0" title="Toggle Navbar">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </div>
            <div className="header__nav">
                <div className="container">
                    <div className="justify-content-between row">
                        <div className="widht-fit">
                            <nav className="header__menu" aria-label="Navigation Bar">
                                <ul className="read-tag">
                                    <li className="active">
                                        <a className="read-tag" href="login" role="Navigation Link">Home</a>
                                    </li>
                                    <li>
                                        <a href="#aboutBg" className="read-tag" role="Navigation Link">About</a>
                                    </li>
                                    <li>
                                        <a href="#contactUs" className="read-tag" role="Navigation Link">Contact Us</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="javascript:void(0);" className="head-menu read-tag" role="Navigation Link" aria-label="This Link Opens A Dropdown">
                                            Grievance <i className="fa fa-angle-down"> </i>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="publicGrievance" role="Navigation Link">Lodge Grievance</a>
                                            </li>
                                            <li>
                                                <a href="trackApp" target="_blank" role="Navigation Link">Check Status</a>
                                            </li>
                                            <li>
                                                <a href="publicGrievanceAppeal" role="Navigation Link">Lodge Appeal</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="javascript:void(0);" className="head-menu read-tag" role="Navigation Link" aria-label="This Link Opens A Dropdown">
                                            Help &amp; Support <i className="fa fa-angle-down"> </i>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0)" className="opfaqz" role="Navigation Link">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="suggestions" role="Navigation Link">Suggestion</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="widht-fit">
                            <div className="header__social d-flex">
                                <a href="https://pgportal.gov.in/" target="_blank" aria-label="This Link Opens A New Window" className="btn btn-maroon text-white read-tag">CPGRAMS</a>
                                <a href="#" aria-label="This Link Opens A Modal Box" className="btn btn-success text-white read-tag">LG-Grievance (Department of Public Grievances)</a>
                                <a href="#" aria-label="This Link Opens A Modal Box" className="btn btn-secondary text-white read-tag" data-bs-toggle="modal" data-bs-target="#formRegister">Registration</a>
                                <div className="dropdown clms-dd text-center menuWithDropdown">
                                    <a aria-label="This Link Opens A Dropdown" className="btn btn-primary dropdown-toggle read-tag" href="#" role="button">Login</a>
                                    <ul className="dropdown-menu logCls">
                                        <li>
                                            <a className="dropdown-item citiLog" href="#" aria-label="This Link Opens A Modal Box" data-bs-toggle="modal" data-bs-target="#formLogin" data-value="1">Citizen Login</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item adminisLog" href="#" aria-label="This Link Opens A Modal Box" data-bs-toggle="modal" data-bs-target="#formLogin" data-value="2">Administrative Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};