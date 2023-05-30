import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0';

    
    const handleSignIn = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then((result) => {            
            const loggedUser = result.user
            console.log(loggedUser) 
            navigate(from, {replace: true})           
          })
          .catch((error) => {
            console.error(error)
          });
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <h2>Please Login</h2>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;