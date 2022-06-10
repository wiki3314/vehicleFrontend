import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import DashBoard from "../DashBoard/DashBoard";
import Items from "../Items/Items";

import { BaseURL } from "../../config/staging";

const Home = (props) => {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  // const [token, setToken] = useState(
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NWZiOTcwMC1lNzBmLTExZWMtYWNjMy1hYjk5YWFlOWQ1ZGUiLCJlbWFpbCI6Indpa2kzMzE0QGdtYWlsLmNvbSIsImlhdCI6MTY1NDg0NDA2NSwiZXhwIjoxNjU0OTMwNDY1fQ.wLURyXS-3yMq0wIp3BS3xD4ZMJBLPPpDpVgzLEGonbg"
  // );

  // useEffect(() => {
  //   async function getData() {
  //     axios
  //       .get(`${BaseURL}/categories`, {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((response) => {
  //         console.log("res data", response.data.categories);
  //         if (response.data.success) {
  //           setData(response.data.categories);
  //           ReactDOM.unstable_batchedUpdates(() => {
  //             setData(response.data.categories);
  //             console.log("category data", data);
  //             setLoading(false);
  //           });
  //         }
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         setData([]);
  //         setLoading(true);
  //       });
  //   }
  //   if (loading) {
  //     // if the result is not ready so you make the axios call
  //     getData();
  //   }
  // }, [loading]);

  // useEffect(async () => {
  //   await axios
  //     .get(`${BaseURL}/categories`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((response) => {
  //       console.log("DATA IS", response.data);
  //       setData(response.data.categories);
  //       console.log("items>>>>,", data);
  //     });
  // }, []);

  useEffect(() => {
    let isCancelled = false;
    async function fetchData() {
      // You can await here
      const response = await axios.get(`${BaseURL}/categories`, {
        headers: { Authorization: `Bearer ${props.token}` },
      });
      // if (!isCancelled) {
      //   ReactDOM.unstable_batchedUpdates(() => {
      //     setData(response.data.categories);
      //     console.log("category data", data);
      //     console.log(loading);
      //     setLoading(false);
      //   });
      // }
      if (response.data.success && !isCancelled) {
        setData(response.data.categories);

        ReactDOM.unstable_batchedUpdates(() => {
          setData(response.data.categories);
          console.log("category data", data);
          console.log(loading);
          setLoading(false);
        });
      }
      // ...
    }
    fetchData();
    return () => {
      isCancelled = true;
    };
  }, [loading]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div>
      <DashBoard></DashBoard>
      <div style={{ width: "50%", marginLeft: "10%" }}>
        {loading ? (
          <p>Loading</p>
        ) : (
          <>
            {/* <h1>{data}</h1> */}(
            {data.forEach((el) => {
              <Items name={el.name} key={el.id} />;
            })}
            {/* {data.forEach((el) => {
              <Items name={el.name} />;
            })} */}
            )
          </>
        )}
      </div>
    </div>
  );
};
export default Home;
