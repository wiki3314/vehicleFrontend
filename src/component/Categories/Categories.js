import DashBoard from "../DashBoard/DashBoard";
const Categories = () => {
  return (
    <div>
      <DashBoard></DashBoard>
      <div style={{ width: "50%", marginBottom: "80px" }} className="container">
        <form>
          <h3>Category</h3>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="name"
              className="form-control"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-3">
            <label>Type</label>
            <input
              type="name"
              className="form-control"
              placeholder="Enter type"
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
export default Categories;
