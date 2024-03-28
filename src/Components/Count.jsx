import React, { useState } from 'react'
import './Count.css'

export const Count = () => {

    const [val, setVal] = useState('');
    const [data, setData] = useState([]);

    const dataAdd = (o) => {

        setVal(o.target.value);
        
    }
    const showData = () => {
        setData([...data, val]);
        setVal('');
        
    }



    return (
      
        <div className='container'>
            <input type="text" placeholder='Enter Your Age' value={val} onChange={dataAdd} />    
    <button className='button' onClick={showData}>ADD</button>        
        
            <div className="showAge">
                <ul>
                    {
                        data.map((Data, ind) => {
                            return <li key={ind}>{ Data}</li>
                            
                        })
                  }
                </ul>


            </div>
            
        </div>
        
  )
}
