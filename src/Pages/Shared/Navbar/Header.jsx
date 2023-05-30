import React, { useContext } from 'react';
import logo from './../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error))
    }

    return (
        <div className='container'>
            <div className="text-center mt-5">
                <img src={logo} alt="logo" />
                <p className='text-secondary mt-3'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
            </div>

            <div className='d-flex align-items-center bg-light p-3 mb-2'>
                <button className='btn btn-danger'>Latest</button>
                <Marquee className='text-danger' speed={60} pauseOnHover={true}>
                    I can be a React component, multiple React components, or just some text....... I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className='fw-semibold' href="">
                            <Link to={'/'}>Home</Link>
                        </Nav.Link>
                        <Nav.Link className='fw-semibold' href="">Features</Nav.Link>
                        <Nav.Link className='fw-semibold' href="">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user &&
                            <FaUserCircle className='fs-1' />
                        }

                        {
                            user ? <button onClick={handleLogOut} className='btn btn-dark'>Logout</button> :
                                <Link to="/login"><button className='btn btn-dark'>Login</button></Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;