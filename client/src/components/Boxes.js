import React, {useState} from 'react'
import SmallBox from './SmallBox'
const Boxes = (props) => {
    const [selectedArr, setSelectedArr] = useState([]);
    return (
        <div>
            {console.log(selectedArr)}
            {[...Array(props.rows)].map((x, i) =>
            {
                return (<>

                    {[...Array(props.columns)].map((y, j) =>
                {
                    return <SmallBox key={'key'+i+j} i={i} j={j} color={props.color} selectedArr = {selectedArr} setSelectedArr={setSelectedArr}/>
                })}
                <br />
                <br />
               
                </>);
                
            })}
        </div>
    )
}

export default Boxes
