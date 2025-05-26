import React from 'react';

const SimpleFrom = () => {
    const handleSubmit=e=>{
        e.preventDefault();

        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value)
    }
    return (
        <div>
            <form  className='px-10 flex flex-col items-center ' onSubmit={handleSubmit}>
                <input className='px-4 py-2 mt-5 rounded-xl' type="text"  placeholder='Enter Name :' name='name'/> <br />
                <input className='px-4 py-2 mt-5 rounded-xl' type="email"  placeholder='Enter email :' name='email'/>
                <br />
                <input className='px-4 py-2 mt-5 rounded-xl' type="password"  placeholder='Password' name='password'/>
                <br />
                    <input type="submit" value="Submit" className='text-xl bg-gray-500 text-white px-6 py-3 rounded-xl hover:cursor-pointer active:scale-95' />
            </form>
        </div>
    );
};

export default SimpleFrom;