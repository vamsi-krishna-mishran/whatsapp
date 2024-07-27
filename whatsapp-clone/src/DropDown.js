import React from 'react'
import {useState} from 'react'

function DropDown() {
    let options=['abc','def','ghi'];
    let [option,setOption]=useState(options[0]);
   
  return (
    <div>
        <select name="cars" id="cars" value={option}  onChange={(e)=>{console.log(e.target.value);setOption(e.target.value)}}>
        {
            options.map((element,index) =>(<option key={index} value={element}>{element}</option>))
        }
</select>
<select name="cars" id="cars" value={option}  onChange={(e)=>{console.log(e.target.value);setOption(e.target.value)}}>
        {
            options.map((element,index) =>(<option key={index} value={element}>{element}</option>))
        }
</select>
    </div>
  )
}

export default DropDown