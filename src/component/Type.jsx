import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
    return (
        <div>

      <Typewriter 
  options={{
    strings: ['Hello', 'World' ,'bhai ' ,"kya hal chal"],
    autoStart: true,
    loop: true,
     
  }}
/>
        </div>
    );
}

export default Type;
