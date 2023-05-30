import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accept, setAccept] = useState(false);

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => console.log(error))

        console.log(name, email, photo, password)
    }

    const handleAccepted = event => {
        setAccept(event.target.checked)
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h3>Please Register </h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicphoto">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        onClick={handleAccepted}
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link></>}
                    />
                </Form.Group>
                <Button variant="primary" disabled={!accept} type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;