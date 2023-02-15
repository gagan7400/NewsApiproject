import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {edit} from 'react-icons-kit/feather/edit'

export const View = ({login,deletedata ,update}) => {
    
    return login.map(data=>(
        
        <tr key={data.userId}>
            {/* <td>{data.userId}</td> */}
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td className='delete-btn' onClick={()=>deletedata(data.userId)}>
                <Icon icon={trash}/>
            </td>           
            <td className='update-btn' onClick={()=> update(data.userId)}>
                <Icon icon={edit}/>
            </td>           
        </tr>            
    
))
}
