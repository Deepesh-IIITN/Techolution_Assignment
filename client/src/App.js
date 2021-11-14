import "./App.css";
import Form from "./components/Form";
import StraightLine from "./components/StraightLine";
import Boxes from "./components/Boxes";
import { useState } from "react";
import ShowTable from "./components/ShowTable";

function App() {
  const [formData, setFormData] = useState({
    rows:0,
    columns:0,
    category:"",
    color:"#000000",
  });
  const [formData1, setFormData1] = useState({
    rows:0,
    columns:0,
    category:"",
    color:"",
  });
  const [tableData, setTableData] = useState([]);
  // console.log(tableData);
  const [selectedArr, setSelectedArr] = useState([]);
  return (
    <>
      <StraightLine color="#08407d" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="planogram-ui-heading mt-5">
              Planogram Boxes
            </p>
            <Boxes rows={formData.rows ? formData.rows : 0} columns={formData.columns ? formData.columns : 0} color={formData.color} selectedArr={selectedArr} setSelectedArr={setSelectedArr} />
          </div>
          <div className="col-md-6">
            <p className="planogram-ui-heading mt-5">
              Planogram UI
            </p>
            <Form formData={formData} setFormData={setFormData} setFormData1={setFormData1} tableData={tableData} setTableData={setTableData} selectedArr={selectedArr}/>
            {
              // console.log(formData1)
            }
          </div>
        </div>
        <ShowTable tableData={tableData}/>
      </div>
    </>
  );
}

export default App;
