import "./Loader.css";

const Loader = (props) => {
  return (
    <div>
      <div className="overlay ">
        <div className="lds-dual-ring"></div>
      </div>
    </div>
  );
};

export default Loader;
