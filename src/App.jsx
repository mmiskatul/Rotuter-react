import React from 'react';
import Grandpa from './Component/Grandpa/Grandpa';
// import SimpleFrom from './Component/Simple-from/SimpleFrom';
// import StateFullform from './Component/StatefullForm/StateFullform';
// import Reform from './Component/Refrom/Reform';
// import Hookform from './Component/Hookform/Hookform';
// import ReusebleForm from './Component/ReuseableForm/ReusebleForm';

const App = () => {
    //  const handleSignUpSubmit=data=>{
    //    console.log(data);
    // }
    // const handleUpdateProfile=data=>{
    //   console.log(data)
    // }
  return (
    <div>
      {/* <SimpleFrom/> */}
      {/* <StateFullform/> */}
      {/* <Reform/> */}
      {/* <Hookform/> */}
      {/* <ReusebleForm handleSubmit={handleSignUpSubmit} formTitle={'Sign Up'}submitBtnText='Sign Up'>
        <div>
          <h1 className='text-center text-3xl mb-5' >Sign Up</h1>
          <p className='text-xl mb-5'>please Sign Up Now</p>
        </div>
      </ReusebleForm>
      <ReusebleForm handleSubmit={handleUpdateProfile} formTitle={'Profile Update'} submitBtnText='Update'>
        <div>
          <h1 className='text-center text-3xl mb-5' >Update Profile</h1>
          <p className='text-xl mb-5'>Always Keep your Profile Updated</p>
        </div>
      </ReusebleForm> */}

      <Grandpa />
    </div>
  );
};

export default App;