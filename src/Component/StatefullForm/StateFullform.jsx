import React, { useState } from 'react';

const StateFullform = () => {
    const [name,setName]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const handleSubmit =e=>{
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(name);

    }
    const handleEmailchange=e=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=e=>{
        setPassword(e.target.value);
    }
    const handleNameChange=e=>{
        setName(e.target.value);
    }
    return (
        <div>
          <form  className='px-10 flex flex-col items-center ' onSubmit={handleSubmit}>
                <input className='px-4 py-2 mt-5 rounded-xl' type="text"  onChange={handleNameChange} placeholder='Enter Name :' name='name'/> <br />
                <input 
                onChange={handleEmailchange }
                 className='px-4 py-2 mt-5 rounded-xl' type="email"  placeholder='Enter email :' name='email'/>
                <br />
                <input className='px-4 py-2 mt-5 rounded-xl' type="password"  placeholder='Password' name='password' onChange={handlePasswordChange} required/>
                <br />
                    <input type="submit" value="Submit" className='text-xl bg-gray-500 text-white px-6 py-3 rounded-xl hover:cursor-pointer active:scale-95' />
            </form>
        </div>
    );
};

export default StateFullform;