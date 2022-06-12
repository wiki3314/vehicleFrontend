import Basic from "../Cars/Basic";

const Items = (props) => {
  return (
    <>
      <h3>{props?.name}</h3>
      <Basic data={props.cars} />
    </>
  );
};
export default Items;
