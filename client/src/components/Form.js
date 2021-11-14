import React from "react";

const Form = (props) => {
  const handleFormData = (e) => {
    props.setFormData({...props.formData, [e.target.name]:e.target.value});
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    props.setFormData1(props.formData);
    props.setTableData([...props.tableData, {category:props.formData.category, color:props.formData.color, points:props.selectedArr}]);
  }
  return (
    <div className="row">
      <div className="col-md-12">
        <form className="ml-3 mt-4" onSubmit={handleSubmitForm}>
          <div class="form-row">
            <div class="col">
              <label for="rows">Enter Rows</label>
              <input
                id="rows"
                type="text"
                class="form-control"
                placeholder=""
                name="rows"
                value={props.formData.rows}
                onChange={handleFormData}
                required
              />
            </div>
            <div class="col">
              <label for="columns">Enter Columns</label>
              <input
                id="columns"
                type="text"
                class="form-control"
                placeholder=""
                name="columns"
                value={props.formData.columns}
                onChange={handleFormData}
                required
              />
            </div>
            </div>
            <div class="form-row">
            <div class="col">
              <label for="category">Name a category</label>
              <input
                id="category"
                type="text"
                class="form-control"
                placeholder=""
                name="category"
                value={props.formData.category}
                onChange={handleFormData}
                required
              />
            </div>
            <div class="col">
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
          <button type="submit" class="btn btn-primary mt-4">
            Fix Selection
          </button>
        </form>
        <form className="mt-5">
          <div class="form-row">
            <div class="col">
              <label for="rows">Enter Planogram Name</label>
              <input
                id="rows"
                type="text"
                class="form-control"
                placeholder=""
                name="rows" 
              />
            </div>
            {/* <div class="col">
             
            </div> */}
        </div>
          <button type="submit" class="btn btn-info mt-4">
            Save Planogram
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
