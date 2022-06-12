import React, { useEffect, useState } from "react";
import { MDBDataTableV5 } from "mdbreact";

export default function Basic(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: "Make",
        field: "make",
        width: 100,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Model",
        field: "model",
        width: 100,
      },
      {
        label: "Color",
        field: "color",
        width: 100,
      },
      {
        label: "Price",
        field: "price",
        width: 100,
      },
      {
        label: "Registration",
        field: "registration",
        sort: "disabled",
        width: 100,
      },
    ],
    rows: props.data,
  });

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      btn={true}
    />
  );
}
