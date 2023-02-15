import React, { useState, useEffect } from 'react'
import { View } from './View';
import AddIcon from '@material-ui/icons/Add';


// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem('Formdata');
  
  if (data) { 
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export const Index = () => {
  const [btn, setBtn] = useState(true);
  const [login, setlogin] = useState(getDatafromLS());
  const [name, setname] = useState("");
  const [email, setemail] = useState('');
  const [userId, setuserId] = useState('');
  const [isEdit, setIsEdit] = useState(null);
 
  // main array of objects state || login state || login array of objects
  // input field states

  // form submit event
  const handleAddloginSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let logindata = {
      name,
      email,
      userId
    }
   if(!logindata){

   } else if (login && !btn){
    setlogin(
      login.map((elem) => {
        if (elem.userId === isEdit) {
          console.log("innersetlogin",isEdit)
          return { ...elem, email,  name }
        }
        return elem
      })
    )
    setBtn(true)
    setemail("");
    setname("");
    setuserId("")
   setIsEdit(null)
   }   
   else{
    setlogin([...login, logindata]);
    setname('');
    setemail('');
    setuserId('');
   }
  }

  const update = (userId) => {
    let newEdititem = login.find((elem) => {
      return elem.userId === userId
    })
    setBtn(false) ; 
    console.log(newEdititem);
    setemail(newEdititem.email);
    setname(newEdititem.name);
    setuserId(newEdititem.userId)
    setIsEdit(userId);

  }
  // delete data from LS
  const deletedata = (userId) => {
    const filteredlogin = login.filter((element, index) => {
      return element.userId !== userId;

    })

    setlogin(filteredlogin);
  }

  // saving data to local storage
  useEffect(() => {
 
    
    localStorage.setItem('Formdata', JSON.stringify(login));
  }, [login])

  return (
    <div className='wrapper'>
  
      <h1>Login Page</h1>
      <p>Add and view your login using local storage</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
            onSubmit={handleAddloginSubmit}>
            <label>userName</label><AddIcon/>
            <input type="text" className='form-control' required
              onChange={(e) => setname(e.target.value)} value={name}></input>
            <br></br>
            <label>email</label>
            <input type="text" className='form-control' required
              onChange={(e) => setemail(e.target.value)} value={email}></input>
            <br></br>
            <label>userId#</label>
            <input type="text" className='form-control' required
              onChange={(e) => setuserId(e.target.value)} value={userId}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              {btn ? "ADD" : "Update"}
            </button>
          </form>
        </div>

        <div className='view-container'>
          {login.length > 0 && <>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    {/* <th>userId#</th> */}
                    <th>userName</th>
                    <th>email</th>
                    <th>Delete</th>
                    <th>edit</th>
                  </tr>
                </thead>
                <tbody>
                  <View login={login} deletedata={deletedata} update={update} />

                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
              onClick={() => setlogin([])}>Remove All</button>
          </>}
          {login.length < 1 && <div>No login are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default Index
