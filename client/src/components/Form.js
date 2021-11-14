import React, { useState } from "react";
import axios from 'axios'
const Form = (props) => {

  const [planogram, setPlanogram] = useState("");

  const handleFormData = (e) => {
    props.setFormData({...props.formData, [e.target.name]:e.target.value});
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    props.setTableData([...props.tableData, {category:props.formData.category, color:props.formData.color, points:props.selectedArr}]);
    // props.setSelectedArr([]);
  }
  const handleForm1 = (e) => {
    setPlanogram(e.target.value);
  }
  const handleSubmitForm1 = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8000/save/', {planogramName: planogram, data: props.tableData}); 
    if(res.status === 200)
    {
      alert("successfully saved");
      props.setSelectedArr([]);
      props.setTableData([]);
      props.setFormData({
        rows:0,
        columns:0,
        category:"",
        color:"#000000",
      });
    }
    else
    {
      alert("failed");
    }
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <form className="ml-3 mt-4" onSubmit={handleSubmitForm}>
          <div className="form-row">
            <div className="col">
              <label for="rows">Enter Rows</label>
              <input
                id="rows"
                type="text"
                className="form-control"
                placeholder=""
                name="rows"
                value={props.formData.rows}
                onChange={handleFormData}
                required
              />
            </div>
            <div className="col">
              <label for="columns">Enter Columns</label>
              <input
                id="columns"
                type="text"
                className="form-control"
                placeholder=""
                name="columns"
                value={props.formData.columns}
                onChange={handleFormData}
                required
              />
            </div>
            </div>
            <div className="form-row">
            <div className="col">
              <label for="category">Name a category</label>
              <input
                id="category"
                type="text"
                className="form-control"
                placeholder=""
                name="category"
                value={props.formData.category}
                onChange={handleFormData}
                required
              />
            </div>
            <div className="col">
              <label for="color">Color</label>
              <br/>
              <input
               type="color"
               name="color"
               value={props.formData.color}
               onChange={handleFormData}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Fix Selection
          </button>
        </form>
        {props.tableData.length > 0 && (
          <form className="mt-5" onSubmit={handleSubmitForm1}>
          <div className="form-row">
            <div className="col">
              <label for="planogramName">Enter Planogram Name</label>
              <input
                id="planogramName"
                type="text"
                className="form-control"
                placeholder=""
                name="planogramName" 
                onChange={handleForm1}
              />
            </div>
            {/* <div class="col">
             
            </div> */}
        </div>
          <button type="submit" className="btn btn-info mt-4">
            Save Planogram
          </button>
        </form>
        )}
        
      </div>
    </div>
  );
};

export default Form;
