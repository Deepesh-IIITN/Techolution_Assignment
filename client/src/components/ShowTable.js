import React from "react";

const ShowTable = (props) => {
  return (
    <div className="row mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Category Name</th>
            <th scope="col">Category Color</th>
            <th scope="col">Row,Column points</th>
          </tr>
        </thead>
        <tbody>
            
            {props.tableData.map((x,ind)=>{

                return <tr id={ind} key={ind}>
                    <td>{x.category}</td>
                    <td><div style={{background:x.color, height:"20px", width:"50px"}}></div></td>
                    <td>{x.points.map((y,i)=>{
                        return ("("+y+") ")
                    })}</td>
              </tr>
            })}
          
        </tbody>
      </table>
    </div>
  );
};

export default ShowTable;
