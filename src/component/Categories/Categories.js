import axios from "axios";
import { useState } from "react";

import { BaseURL } from "../../config/staging";
import NavigationBar from "../NavigationBar/NavigationBar";
const Categories = (props) => {
  const [enterName, setEnterName] = useState("");
  const [enterType, setEnterType] = useState(0);

  const enterNameHandle = (event) => {
    setEnterName(event.target.value);
  };

  const enterTypeHandle = (event) => {
    setEnterType(event.target.value);
  };

  const addCategoryHandle = async (data) => {
    try {
      const response = await axios.post(`${BaseURL}/categories/add`, data, {
        headers: { Authorization: `Bearer ${props.token}` },
      });
      console.log("response ", response.data);
      if (response.data.success) {
        alert("Successfully Added");
      }
    } catch (error) {
      console.log("error ", error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addCategoryHandle({
      name: enterName,
      type: enterType,
    });
    setEnterName("");
    setEnterType("");
  };
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div style={{ width: "50%", marginBottom: "80px" }} className="container">
        <form onSubmit={submitHandler}>
          <h3>Category</h3>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="name"
              className="form-control"
              placeholder="Enter name"
              value={enterName}
              onChange={enterNameHandle}
            />
          </div>
          <div className="mb-3">
            <label>Type</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter type"
              value={enterType}
              onChange={enterTypeHandle}
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "20px" }}
            >
              Add Category
            </button>
          </div>
          <p
            className="forgot-password text-right"
            style={{ marginTop: "20px" }}
          ></p>
        </form>
      </div>
    </div>
  );
};
export default Categories;
