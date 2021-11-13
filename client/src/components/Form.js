import React from "react";
import { SketchPicker } from 'react-color';
import ColorPick from "./ColorPicker";
const Form = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <form className="ml-3 mt-4">
          <div class="form-row">
            <div class="col">
              <label for="rows">Enter Rows</label>
              <input
                id="rows"
                type="text"
                class="form-control"
                placeholder=""
                name="rows" 
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
              />
            </div>
            <div class="col">
              <label for="color">Color</label>
              <br/>
              <input
               type="color"
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
            <div class="col">
             
            </div>
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
