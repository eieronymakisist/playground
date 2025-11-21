import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="container w-75 d-flex align-items-center justify-content-center mt-5">
                <Link to="/bikeshop" className='fs-3 fw-bold btn btn-warning btn-lg border border-3'>
                    Bike Shop
                </Link>
            </div>
        </div>
    );
}

export default Home;
