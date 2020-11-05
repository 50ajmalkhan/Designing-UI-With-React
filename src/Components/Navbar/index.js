import React from "react";
import { Navbar, Nav, } from "react-bootstrap";
import "./style.css"
const navbar = () => {
    return (
        <div className="nav-items">

            <Navbar className="mr-auto1" >

                <Navbar.Collapse className="justify-content-center">
                    <Nav >
                        <Nav.Link href="#home" ><h7 >Not Sure how to start your course ! grab your course</h7></Nav.Link>

                    </Nav>

                </Navbar.Collapse>


                <span style={{ fontSize: "18px", margin: "5px", float: "right" }}>&#10005;</span>
            </Navbar>

            <Navbar bg="light" variant="light" >


                <Navbar.Collapse className="justify-content-center nav-sp">
                    <Nav >

                        <Nav.Link href="#home"><span class="nav-entities">Home</span></Nav.Link>
                        <Nav.Link href="#about"><span class="nav-entities">About</span></Nav.Link>
                        <Nav.Link href="#courses"><span class="nav-entities">Courses</span></Nav.Link>
                        <h3 >Flourish Collective</h3>
                        <Nav.Link href="#Blog"><span class="nav-entities">Blog</span></Nav.Link>
                        <Nav.Link href="#Shop"><span class="nav-entities">Shop</span></Nav.Link>
                        <Nav.Link href="#Contact"><span class="nav-entities">Contact</span></Nav.Link>


                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div >
    );
}
export default navbar;