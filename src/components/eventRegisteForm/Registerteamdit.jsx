import { React, useState } from "react";
import "./register.css";

function Registerteamdit() {
  const [arr, setArr] = useState([{ name: "" }]);
  const [count, setCount] = useState(1);
  const decrease = () => {
    if (arr.length > 1) {
      let x = arr;
      x.pop();
      setArr(x);
      setCount((current) => current - 1);
    }
  };
  const increase = () => {
    if (arr.length < 4) {
      let x = arr;
      x.push({ name: arr.length });
      setArr(x);
      setCount((current) => current + 1);
    }
  };
  return (
    <>
      <div className="flex justify-center w-[100vw] items-center my-[2rem]">
        <div className="formResponsive space-y-6 px-[2rem] w-[75vw]">
          <div>
            <p
              htmlFor="name"
              className="block text-[1rem] font-normal text-white"
            >
              Team Name
            </p>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="teamName"
                id="teamName"
                className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                placeholder="Enter your Team Name"
                required
              />
            </div>
          </div>

          <div>
            <p
              htmlFor="name"
              className="block text-[1rem] font-normal text-white"
            >
              Team Leader's SAP ID
            </p>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="name"
                id="name"
                className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                placeholder="Enter Team Leader's SAP ID"
                required
              />
            </div>
          </div>

          <div>
            <p
              htmlFor="name"
              className="block text-[1rem] font-normal text-white"
            >
              Team Leader's Phone Number
            </p>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="name"
                id="name"
                className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                placeholder="Enter Team Leader's Phone Number"
                required
              />
            </div>
          </div>
          <div className="counter flex">
            <button className="counter-btn" onClick={() => decrease()}>
              -
            </button>
            <div className="number-display py-4">{count}</div>
            <button className="counter-btn" onClick={() => increase()}>
              +
            </button>
          </div>

          {arr.map((member, id) => {
            return (
              <div key={id}>
                <p
                  htmlFor="name"
                  className="block text-[1rem] font-normal text-white"
                >
                  Team Member Name {id + 1}
                </p>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                    placeholder="Enter Name"
                    required
                  />
                </div>
              </div>
            );
          })}

          <div className=" px-4 py-3 text-left sm:px-0">
            <button
              type="submit"
              className="registerbtn inline-flex justify-center  border border-[#FC0160] bg-[#2C0022] py-2 px-4 text-lg font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Registerteamdit;
