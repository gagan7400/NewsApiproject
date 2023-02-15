import React,{ useState} from 'react';

const Usestate = () => {
    let [Data, setData] = useState( {name:"sonu" ,age:90});
 let changehandler =()=>{
     setData(   (p) =>{
        return { ...p , place:"indore" }} );
     console.log(Data);
 }
    return (
        <div className='text-center m-5'>
            <h2>hello hooks </h2>  
            <h3>  My state value is = {Data.name}</h3>
            <h3>  My state value is = {Data.age}</h3>
            <button onClick={changehandler}> Change the data</button>
        </div>
    );
}

export default Usestate;
