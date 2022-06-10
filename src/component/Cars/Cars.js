import Dropdown from "react-bootstrap/Dropdown";
import DashBoard from "../DashBoard/DashBoard";
const Cars = () => {
  return (
    <div>
      <DashBoard></DashBoard>
      <div style={{ width: "50%", marginBottom: "20px" }} className="container">
        <h3>Categories</h3>
        <select
          style={{
            width: "30%",
            height: "30px",
            marginBottom: "50px",
          }}
        >
          <option value="Orange">Orange</option>
        </select>

        <form>
          <h3>Cars</h3>
          <div className="mb-3">
            <label>Model</label>
            <input
              type="name"
              className="form-control"
              placeholder="Enter model"
            />
          </div>
          <div className="mb-3">
            <label>Color</label>
            <input
              type="name"
              className="form-control"
              placeholder="Enter color"
            />
          </div>
          <div className="mb-3">
            <label>Make</label>
            <input
              type="name"
              className="form-control"
              placeholder="Enter make"
            />
          </div>
          <div className="mb-3">
            <label>Registration</label>
            <input
              type="name"
              className="form-control"
              placeholder="Enter registration"
            />
          </div>
          <div className="mb-3">
            <label>Price</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter price"
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "20px" }}
            >
              Insert
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
export default Cars;
