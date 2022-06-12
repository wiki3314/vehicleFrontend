import axios from "axios";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { BaseURL } from "../../config/staging";
import NavigationBar from "../NavigationBar/NavigationBar";
import DropDownItem from "../Ui/DropDown";

const Cars = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("");

  const [enterMake, setEnterMake] = useState("");
  const [enterModel, setEnterModel] = useState("");
  const [enterColor, setEnterColor] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterRegistration, setEnterRegistration] = useState("");

  const enterMakeHandle = (event) => {
    setEnterMake(event.target.value);
  };

  const enterModelHandle = (event) => {
    setEnterModel(event.target.value);
  };

  const enterColorHandle = (event) => {
    setEnterColor(event.target.value);
  };

  const enterPriceHandle = (event) => {
    setEnterPrice(event.target.value);
  };

  const enterRegistrationHandle = (event) => {
    setEnterRegistration(event.target.value);
  };

  useEffect(() => {
    let isCancelled = false;
    async function fetchData() {
      // You can await here
      const response = await axios.get(`${BaseURL}/categories`, {
        headers: { Authorization: `Bearer ${props.token}` },
      });
      if (response.data.success && !isCancelled) {
        ReactDOM.unstable_batchedUpdates(() => {
          if (response.data.categories.length > 0) {
            response.data.categories.unshift({
              cId: -1,
              name: "select category",
            });
            setData(response.data.categories);
            console.log("category data", data);
            setLoading(false);
          } else {
            setLoading(true);
          }
        });
      }
    }
    fetchData();
    return () => {
      isCancelled = true;
    };
  }, [loading]);

  const addCarHandle = async (data) => {
    try {
      console.log("token ch", props.token);
      console.log("data ch", data);

      const response = await axios.post(`${BaseURL}/cars/add`, data, {
        headers: { Authorization: `Bearer ${props.token}` },
      });
      console.log("response ", response.data);
      if (response.data.success) {
        alert("Successfully Added");
        setEnterRegistration("");
        setEnterMake("");
        setEnterModel("");
        setEnterColor("");
        setEnterPrice("");
      } else {
        alert("Please Select Category");
      }
    } catch (error) {
      console.log("error ", error);
      alert("Please Select Category");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addCarHandle({
      model: enterModel,
      color: enterColor,
      make: enterMake,
      price: enterPrice,
      registration: enterRegistration,
      categoryName: selected,
    });
  };
  return (
    <div>
      <NavigationBar></NavigationBar>
      {loading && data.length === 0 ? (
        <p>Loading</p>
      ) : (
        <div
          style={{ width: "50%", marginBottom: "20px" }}
          className="container"
        >
          <h3>Categories</h3>

          <select
            onChange={(e) => {
              setSelected(e.target.value);
              console.log("selected ", selected);
            }}
            value={selected}
            style={{
              width: "30%",
              height: "30px",
              marginBottom: "50px",
            }}
          >
            {data.length > 0 &&
              data.map((el) => <DropDownItem key={el.cId} name={el.name} />)}
          </select>

          <form onSubmit={submitHandler}>
            <h3>Cars</h3>
            <div className="mb-3">
              <label>Make</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter make"
                value={enterMake}
                onChange={enterMakeHandle}
              />
            </div>
            <div className="mb-3">
              <label>Model</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter model"
                value={enterModel}
                onChange={enterModelHandle}
              />
            </div>
            <div className="mb-3">
              <label>Color</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter color"
                value={enterColor}
                onChange={enterColorHandle}
              />
            </div>
            <div className="mb-3">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter price"
                value={enterPrice}
                onChange={enterPriceHandle}
              />
            </div>
            <div className="mb-3">
              <label>Registration</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter registration"
                value={enterRegistration}
                onChange={enterRegistrationHandle}
              />
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: "20px" }}
              >
                Add Car
              </button>
            </div>
            <p
              className="forgot-password text-right"
              style={{ marginTop: "20px" }}
            ></p>
          </form>
        </div>
      )}
    </div>
  );
};
export default Cars;
