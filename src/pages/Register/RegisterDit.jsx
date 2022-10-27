import React from "react";
import EventRegisterForm from "../../components/eventRegisteForm/EventRegisterForm";
import registerbackground from "../../images/registerbackground.png";
import sampleimage1 from "../../images/sampleimage1.png";
import "./Register.css";
const RegisterDit = () => {
  return (
    <div className="maincontainer">
      <div
        className="div2"
        style={{ backgroundImage: `url(${registerbackground})` }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <img className="w-72 h-72 pl-5 pt-5" alt="" src={sampleimage1} />
          </div>

          <div className="div1" style={{ width: "100%" }}>
            <div className="class1 mt-9">
              <div>Technical Events</div>
            </div>
            <div
              className="class2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%" }}>Vedanta Hall</div>
              <div style={{ width: "100%" }}>21/21/2022</div>
              <div style={{ width: "100%" }}>13:07</div>
            </div>
            <div
              className="class3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ justifyContent: "flex-start", width: "100%" }}>
                <p>EventCoordinator:Joestar Jotare</p>
                <p>Over All Head:Dio Brando</p>
              </div>
              <div
                style={{
                  justifyContent: "flex-end",
                  width: "100%",
                  display: "flex",
                  marginRight: "12px",
                }}
              >
                Frees:300/Head
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <EventRegisterForm isDit={true} />
      </div>
    </div>
  );
};
export default RegisterDit;
