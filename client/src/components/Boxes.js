import React, {useState} from 'react'
import SmallBox from './SmallBox'
const Boxes = (props) => {
    // const [selectedArr, setSelectedArr] = useState([]);
    return (
        <div>
            {/* {console.log(props)} */}
            {[...Array(parseInt(props.rows))].map((x, i) =>
            {
                return (<>

                    {[...Array(parseInt(props.columns))].map((y, j) =>
                {
                    return <SmallBox key={'key'+i+j} i={i} j={j} color={props.color} selectedArr = {props.selectedArr} setSelectedArr={props.setSelectedArr}/>
                })}
                <br />
                <br />
               
                </>);
                
            })}
        </div>
    )
}

export default Boxes
