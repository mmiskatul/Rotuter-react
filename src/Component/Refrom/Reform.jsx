import React, { useEffect, useRef } from 'react';

const Reform = () => {
    const nameRef=useRef(null);
    const emailRef=useRef(null);
    const passRef=useRef(null);

        useEffect(()=>{
            nameRef.current.focus();
        },[]);
    const handleSubmit=e=>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passRef.current.value);
    }
    return (
        <div>
             <form  className='px-10 flex flex-col items-center ' onSubmit={handleSubmit}>
                <input className='px-4 py-2 mt-5 rounded-xl' ref={nameRef} type="text"  placeholder='Enter Name :' name='name'/> <br />
                <input className='px-4 py-2 mt-5 rounded-xl'ref={emailRef} type="email"  placeholder='Enter email :' name='email'/>
                <br />
                <input className='px-4 py-2 mt-5 rounded-xl' type="password" ref={passRef} placeholder='Password' name='Password'/>
                <br />
                    <input type="submit" value="Submit" className='text-xl bg-gray-500 text-white px-6 py-3 rounded-xl hover:cursor-pointer active:scale-95' />
            </form>
        </div>
    );
};

export default Reform;