import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import NavigationBar from "../NavigationBar/NavigationBar";
import Items from "../Items/Items";
import Basic from "../Cars/Basic";

import { BaseURL } from "../../config/staging";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isCancelled = false;
    async function fetchData() {
      // You can await here
      const response = await axios.get(`${BaseURL}/categories`, {
        headers: { Authorization: `Bearer ${props.token}` },
      });

      if (response.data.success && !isCancelled) {
        setData(response.data.categories);
        ReactDOM.unstable_batchedUpdates(() => {
          if (response.data.categories.length > 0) {
            setData(response.data.categories);
            console.log("category data", data);
            console.log(loading);
            setLoading(false);
          } else {
            setLoading(true);
          }
        });
      }
      // ...
    }
    fetchData();
    return () => {
      isCancelled = true;
    };
  }, [loading]);

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div style={{ width: "50%", marginLeft: "10%" }}>
        {loading ? (
          <p>Loading</p>
        ) : (
          <>
            {data.length > 0 &&
              data.map((el) => (
                <Items key={el._id} name={el.name} cars={el.categoryCars} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};
export default Home;
