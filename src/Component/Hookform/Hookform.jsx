import React from 'react';
import useInputState from '../../Hooks/useInputState';

const Hookform = () => {
    // const [name,handleNameChange]=useInputState('Miskat');
    const emailState=useInputState('masabimiskat@gmail.com');

    const handleSubmit =e=>{
        console.log(emailState.value);
        e.preventDefault();
    }
    return (
        <div>
             <form  className='px-10 flex flex-col items-center ' onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} className='px-4 py-2 mt-5 rounded-xl' type="text"  placeholder='Enter Name :' name='name'/> <br /> */}
                <input  {...emailState} className='px-4 py-2 mt-5 rounded-xl' type="email"  placeholder='Enter email :' name='email'/>
                <br />
                <input className='px-4 py-2 mt-5 rounded-xl' type="password"  placeholder='password' name='password'/>
                <br />
                    <input type="submit" value="Submit" className='text-xl bg-gray-500 text-white px-6 py-3 rounded-xl hover:cursor-pointer active:scale-95' />
            </form>
        </div>
    );
};

export default Hookform;