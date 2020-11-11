import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router, Link,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import './Layout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Layout() {
    const [sidebarOpened, setSidebarOpened] = useState(false);

    function toggleSidebar() {
        setSidebarOpened(!sidebarOpened);
    }
    return (<div className="dashboard">
        <div style={{
            padding: "20px 15px 15px",
            position: "relative", background: "#233d7b",
            marginBottom: "10px",
            boxShadow: "0 0 10px 0 rgba(35,61,123,.8)"
        }}>
            <div className="d-flex flex-column">
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                    <button className="float-left height-20" type="button" onClick={() => toggleSidebar()}>
                        {sidebarOpened ? "Close" : "Open"}
                    </button>
                    <div>
                        <img className="d-flex align-items-center justify-content-center" height="40"
                            src="https://lite1.pakwheels.com/app/6.0.12/assets/images/PakWheels-Tagline-Logo.svg" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center push-right">
                        <FontAwesomeIcon icon={faHeart} style={{ color: "white", verticalAlign: "middle" }} />
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center search-area my-3">
                    <button className="btn btn-block btn-white"
                        style={{
                            padding: "10px 16px 12px",
                            fontSize: "15px",
                            textAlign: "left",
                            fontFamily: "font-custom-icons,Lato,sans-serif",
                            whiteSpace: "pre-wrap",
                            borderRadius: "25px",
                            border: "none",
                            width: "100%",
                            display: "block",
                            backgroundColor: "white"

                        }}
       >Start searching new cars</button>
                </div>
            </div>
        </div>
        {
            sidebarOpened ?
                <div id="wrapper" style={{
                    minWidth: "280px",
                    color: "#373737",
                    backgroundColor: "#fff",
                    top: "0", position: "absolute"

                }}>
                    <div className="d-flex flex-column">
                        <Router>
                            <div className="sidebar-wheel d-flex align-items-center justify-content-center">
                                <Link to="/"  style={{ marginTop: "20px", marginBottom: "30px", borderBottom:"1px solid #e6e6e6" }}>
                                    <img src="https://lite1.pakwheels.com/app/6.0.12/assets/images/PakWheels-Blue-Tagline-Logo.svg" height="50" />
                                </Link>

                            </div>
                            <Nav className="d-flex flex-column">
                                <Nav.Item style={{ marginBottom:"2.5rem" ,borderBottom:"1px solid #e6e6e6"}}>
                                    <Nav.Link>


                                        <span>Used Cars</span>


                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{ marginBottom:"2.5rem" , borderBottom:"1px solid #e6e6e6"}}>
                                    <Nav.Link>


                                        <span>New  Cars</span>

                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{ marginBottom:"2.5rem" , borderBottom:"1px solid #e6e6e6"}}>
                                    <Nav.Link>


                                        <span>Bikes</span>

                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Router>
                    </div>
                </div >
                : ''
        }

    </div >)
}