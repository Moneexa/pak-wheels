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
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";


export default function Layout() {
    const [sidebarOpened, setSidebarOpened] = useState(false);

    function toggleSidebar() {
        setSidebarOpened(!sidebarOpened);
    }
    return (<>
        <div className="dashboard">
            <div style={{
                padding: "20px 15px 15px",
                position: "relative", background: "#233d7b",
                marginBottom: "10px",
                boxShadow: "0 0 10px 0 rgba(35,61,123,.8)"
            }}>
                <div className="d-flex flex-column">
                    <div className="d-flex" style={{ justifyContent: "space-between" }}>
                        <IconButton
                            color="default"
                            aria-label="open drawer"
                            edge="start"
                            onClick={() => toggleSidebar()}
                            className="float-left height-20"
                        >
                            <MenuIcon />
                        </IconButton>
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
                    <div id="wrapper"
                        style={{
                            minWidth: "280px",
                            color: "#373737",
                            backgroundColor: "#fff",
                            top: "0", position: "absolute"

                        }}>

                        <Router>
                            <nav className="d-flex flex-column">
                                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                                <Hidden smUp implementation="css">
                                    <Drawer

                                        variant="temporary"
                                        //anchor={theme.direction === "rtl" ? "right" : "left"}
                                        open={sidebarOpened}
                                        onClose={toggleSidebar}
                                        // classes={{
                                        //     paper: classes.drawerPaper
                                        // }}
                                        ModalProps={{
                                            keepMounted: true // Better open performance on mobile.
                                        }}
                                    >
                                        <div>
                                            <Divider />
                                            <List>
                                                <ListItem key="home" component={Link} to="/">
                                                    <div className="sidebar-wheel d-flex align-items-center justify-content-center">
                                                        <Link to="/" style={{ marginTop: "20px", marginBottom: "30px", borderBottom: "1px solid #e6e6e6" }}>
                                                            <img src="https://lite1.pakwheels.com/app/6.0.12/assets/images/PakWheels-Blue-Tagline-Logo.svg" height="50" />
                                                        </Link>

                                                    </div>
                                                </ListItem>
                                                <ListItem key="Used Cars" component={Link} to="/"
                                                    style={{ marginBottom: "2.5rem", borderBottom: "1px solid #e6e6e6" }}>
                                                    <ListItemIcon>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Used Cars" />
                                                </ListItem>
                                                <ListItem key="Buy New Cars" component={Link} to="/"
                                                    style={{ marginBottom: "2.5rem", borderBottom: "1px solid #e6e6e6" }}

                                                >
                                                    <ListItemIcon>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Buy New Cars" />
                                                </ListItem>
                                                <ListItem key="Post Adds" component={Link} to="/"
                                                    style={{ marginBottom: "2.5rem", borderBottom: "1px solid #e6e6e6" }}
                                                >

                                                    <ListItemIcon>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Post Adds" />
                                                </ListItem>

                                            </List>
                                        </div>
                                    </Drawer>
                                </Hidden>
                            </nav>
                        </Router>
                    </div>

                    : ''
            }

        </div ></>)
}