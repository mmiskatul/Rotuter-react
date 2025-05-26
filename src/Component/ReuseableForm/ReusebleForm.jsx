import React from 'react';

const ReusebleForm = ({formTitle,handleSubmit,submitBtnText ='Submit',children}) => {
    const handleLocalSubmit =e=>{
        e.preventDefault();
        const data={
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }
        handleSubmit(data);
    }
 
    return (
        <div>
             <form  className='px-10 flex flex-col items-center ' onSubmit={handleLocalSubmit}>
                {
                    children
                }
                <input className='px-4 py-2 mt-5 rounded-xl' type="text"  placeholder='Enter Name :' name='name'/> <br />
                <input className='px-4 py-2 mt-5 rounded-xl' type="email"  placeholder='Enter email :' name='email'/>
                <br />
                <input className='px-4 py-2 mt-5 rounded-xl' type="password"  placeholder='Password' name='password'/>
                <br />
                    <input type="submit" value={submitBtnText} className='text-xl bg-gray-500 text-white px-6 py-3 rounded-xl hover:cursor-pointer active:scale-95' />
            </form>
        </div>
    );
};

export default ReusebleForm;