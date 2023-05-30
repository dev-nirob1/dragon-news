import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => { console.error(error) })
    }, [])
    return (
        <div>
            <h3>All Category</h3>
            <h4 className='py-3 px-4 bg-light mt-4 rounded'>National Category</h4>
            <div className='fw-semibold ms-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`category/${category.id}`} className='text-decoration-none text-secondary'> 
                        {category.name}</Link>
                    </p>)
                }
            </div>

        </div>
    );
};

export default LeftNav;