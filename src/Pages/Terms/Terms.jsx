import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='w-75 mx-auto my-5'>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quam fugit, itaque cum sapiente ut velit magnam doloribus delectus quos nemo ipsa minus, porro dolore harum incidunt consequatur blanditiis accusantium ad provident ab ipsam pariatur?</p>

            <p>Go back to <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Terms;