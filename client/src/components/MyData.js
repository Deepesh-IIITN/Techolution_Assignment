import React, { useState,useEffect } from 'react'
import axios from 'axios';
import ShowTable from './ShowTable';
import StraightLine from './StraightLine';
import LinkButton from './LinkButton';
const MyData = () => {
    const [data, setData] = useState([]);
    const handleData = async()=>{
        const res  = await axios.get("http://localhost:8000/mydata/");
        setData(res.data);
    }
    useEffect(() => {
       handleData();
    }, [])
    return (
        <div>
        <StraightLine color="#08407d" />
        <div className="container mt-5">
            <div className="row">
                {
                    data && data.map((x,i)=>{
                        return(
                        <div className="col-md-12 planogram-box">
                            <h6>Planogram Name: <span>{x.planogramName}</span></h6>
                            <ShowTable tableData={x.data} />
                        </div>
                        );
                    })
                }    
                {
                    data.length <=0 && (
                        <div className="col-md-12 planogram-box text-center" style={{color:"red"}}>
                            No Data
                        </div>
                    )
                }
            </div>
             
        </div>
        <LinkButton path="Home" link="/"/>   
    </div>
    )
}

export default MyData;
