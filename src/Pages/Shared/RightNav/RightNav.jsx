import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button variant="outline-primary my-3"> < FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login With Github</Button>

            <div className='mt-5'>
                <h3>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className='position-relative mt-5'>
                <img src={bg} alt="bg" />
                <div className='position-absolute top-0 text-white m-5'>
                    <h2>Create an <br/> Amazing <br/> Newspaper</h2>
                    <p className='my-4'>
                    Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </p>
                    <button className='btn btn-danger'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;