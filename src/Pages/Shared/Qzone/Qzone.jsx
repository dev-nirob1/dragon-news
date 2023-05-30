import React from 'react';
import qZone1 from './../../../assets/qZone1.png'
import qZone2 from './../../../assets/qZone2.png'
import qZone3 from './../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-light mt-5 py-4 text-center'>
            <h3>Q-Zone</h3>
            <div>
                <img src={qZone1} alt="photos" />
                <img src={qZone2} alt="photos" />
                <img src={qZone3} alt="photos" />
            </div>
        </div>
    );
};

export default Qzone;