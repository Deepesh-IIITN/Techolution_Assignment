import "./App.css";
import Form from "./components/Form";
import StraightLine from "./components/StraightLine";
import Boxes from "./components/Boxes";
import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    rows:0,
    columns:0,
    category:"",
    color:"",
  });
  return (
    <>
      <StraightLine color="blue" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="planogram-ui-heading mt-5">
              Planogram Boxes
            </p>
            <Boxes rows={4} columns={4} color="blue"/>
          </div>
          <div className="col-md-6">
            <p className="planogram-ui-heading mt-5">
              Planogram UI
            </p>
            <Form />
          </div>
        </div>
        <div className="row"></div>
      </div>
    </>
  );
}

export default App;
