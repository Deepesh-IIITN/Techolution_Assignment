import React, { useState } from 'react'

const SmallBox = (props) => {
    const [selected, setSelected] = useState(false);
    
    const setBoxColor = (e) =>{
        // console.log(e.target.id);
        if(selected)
        {
            let arr = props.selectedArr.filter((x)=>{
                return x !== e.target.id;
            })
            props.setSelectedArr(arr);
        }
        else
        {
           props.setSelectedArr([...props.selectedArr, e.target.id]);
        }
        setSelected(selected^true);
    }
    return (
        <span id={props.i + "," +props.j} className="small-box" style={selected ?  {backgroundColor: props.color} : {backgroundColor: ""}} onClick={setBoxColor}>
            {props.i},{props.j}
        </span>
    )
}

export default SmallBox
