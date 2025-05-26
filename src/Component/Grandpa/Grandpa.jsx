import React from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const Grandpa = () => {
    return (
        <div className='border-2 flex flex-col items-center gap-10 '>
            <h1>Grandpa</h1>
            <div className='flex gap-10 '>
                <Dad/>
            <Uncle/>
            <Aunty/>
            </div>
        </div>
    );
};

export default Grandpa;