import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const location = useLocation();
  const [status, setStatus] = useState(0);
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();

  //for varifying email
  const validateEmail = (data) => {
    var res = /\S+@\S+\.\S+/.test(data.user_email);
    !res && toast.error("Please Enter a Valid Email!");
    return res;
  };

  //validating phone
  const validatePhone = (data) => {
    var res =
      data.user_phone &&
      data.user_phone.length === 10 &&
      /^\d+$/.test(data.user_phone);
    !res && toast.error("Please Enter a Valid Phone Number!");
    return res;
  };

  //validate name
  const validateName = (data) => {
    var res =
      data.participant_name &&
      data.participant_name.length > 2 &&
      data.participant_name.length < 50;
    !res && toast.error("Please Enter a valid Name!");
    return res;
  };

  //validate password
  const validatePass = (data) => {
    var res = data.password.length >= 6 && data.cpassoword === data.password;
    !res && toast.error("Password must be >6 and comfirm pass must be same!");
    return res;
  };

  //validate college
  const validateCollege = (data) => {
    var res = data.user_college.length > 1;
    !res && toast.error("Please Enter College!");
    return res;
  };

  //validate gender
  const validateGender = (data) => {
    var res = data.user_gender.length > 1;
    !res && toast.error("Please select Gender!");
    return res;
  };

  //validate year
  const validateYear = (data) => {
    var res = data.user_year.length > 1;
    !res && toast.error("Please select Year!");
    return res;
  };

  //storing values of inputs in useState
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const radioHandler = (status) => {
    setStatus(status);
  };

  const submit = async () => {
    if (
      validateName(formData) &&
      validateEmail(formData) &&
      validatePhone(formData) &&
      validatePass(formData) &&
      validateCollege(formData) &&
      validateGender(formData) &&
      validateYear(formData)
    ) {
      const { error } = await supabase.auth.signUp({
        email: formData.user_email,
        password: formData.password,
      });

      if (error) {
        toast.error("Some Error occured! Please try again");
        return;
      } else {
        updateData();
      }
    }
  };
  const updateData = async () => {
    const { error } = await supabase
      .from("profiles")
      .update({
        user_name: formData.user_name,
        user_phone: formData.user_phone,
        user_gender: formData.user_gender,
        user_college: formData.user_college,
        user_year: formData.user_year,
        events_registered: [],
      })
      .eq("user_email", formData.user_email);

    if (error) {
      console.log(error);
    } else {
      toast.success("SignUp Successful!");
      navigate(location.state.url, {
        state: {
          formData: location.state.formData,
          submit: location.state.submit,
          handleChange: location.state.handleChange,
        },
      });
    }
  };

  return (
    <div>
      <Toaster />
      <div className="flex justify-center w-[100vw] items-center my-[2rem]">
        <div className="formResponsive space-y-6 px-[2rem] w-[75vw]">
          <div>
            <p
              htmlFor="name"
              className="block text-[1rem] font-normal text-white"
            >
              Your Name
            </p>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="signUpForm h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                placeholder="&#xf007;&nbsp;&nbsp;&nbsp;Enter your Name"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div>
            <p
              htmlFor="email"
              className="block text-[1rem] font-normal text-white"
            >
              Your Email
            </p>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="email"
                name="user_email"
                id="user_email"
                className="signUpForm h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                placeholder="&#xf0e0;&nbsp;&nbsp;&nbsp;Enter your Email"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div>
            <p
              htmlFor="phnumber"
              className="block text-[1rem] font-normal text-white"
            >
              Your Phone Number
            </p>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="user_phone"
                id="user_phone"
                className="signUpForm h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                placeholder="&#xf095;&nbsp;&nbsp;&nbsp;Enter your Phone Number"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div>
            <p
              htmlFor="gender"
              className="block text-[1rem] font-normal text-white"
            >
              Gender
            </p>
            <div className="mt-1 text-white flex rounded-md shadow-sm">
              <input
                className="mx-3"
                type="radio"
                name="user_gender"
                value="male"
                onChange={(e) => handleChange(e)}
              />{" "}
              Male
              <input
                className="mx-3"
                type="radio"
                name="user_gender"
                value="female"
                onChange={(e) => handleChange(e)}
              />
              Female
            </div>
          </div>
          <div>
            <p
              htmlFor="universityName"
              className="block text-[1rem] font-normal text-white"
            >
              University
            </p>
            <div className="mt-1 text-white flex rounded-md shadow-sm">
              <input
                className="mx-3"
                type="radio"
                name="user_college"
                checked={status === 1}
                value="DIT University"
                onClick={(e) => radioHandler(1)}
                onChange={(e) => handleChange(e)}
              />
              DIT University
              <input
                className="mx-3"
                type="radio"
                name="user_college"
                checked={status === 2}
                onClick={(e) => radioHandler(2)}
              />
              Other
            </div>
            <div className="mt-3 ml-3">
              {status === 2 && (
                <div>
                  <p
                    htmlFor="universityName"
                    className="block text-[1rem] font-normal text-white"
                  >
                    University Name
                  </p>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="user_college"
                      id="user_college"
                      className="signUpForm h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                      placeholder="&#xf19d;&nbsp;&nbsp;&nbsp;Enter your University Name"
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <p
              htmlFor="year"
              className="block text-[1rem] font-normal text-white"
            >
              Year
            </p>
            <div className="mt-1 text-white flex rounded-md shadow-sm">
              <input
                className="mx-3"
                type="radio"
                name="user_year"
                value="one"
                onChange={(e) => handleChange(e)}
              />
              1st
              <input
                className="mx-3"
                type="radio"
                name="user_year"
                value="two"
                onChange={(e) => handleChange(e)}
              />
              2nd
              <input
                className="mx-3"
                type="radio"
                name="user_year"
                value="three"
                onChange={(e) => handleChange(e)}
              />
              3rd
              <input
                className="mx-3"
                type="radio"
                name="user_year"
                value="four"
                onChange={(e) => handleChange(e)}
              />
              4th
              <input
                className="mx-3"
                type="radio"
                name="user_year"
                value="five"
                onChange={(e) => handleChange(e)}
              />
              5th
            </div>
          </div>
          <div>
            <p
              htmlFor="password"
              className="block text-[1rem] font-normal text-white"
            >
              Password
            </p>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="password"
                name="password"
                id="password"
                className="signUpForm h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                placeholder="&#xf023;&nbsp;&nbsp;&nbsp;Enter password"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div>
            <p
              htmlFor="cnfrmpassword"
              className="block text-[1rem] font-normal text-white"
            >
              Confirm Password
            </p>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="password"
                name="cpassoword"
                id="cpassoword"
                className="signUpForm h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                placeholder="&#xf023;&nbsp;&nbsp;&nbsp;Re-Enter password"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className=" px-4 py-3 text-left sm:px-0">
            <button
              type="submit"
              className="createAcbtn inline-flex justify-center  border border-[#FC0160] bg-[#2C0022] py-2 px-4 text-lg font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {
                submit();
              }}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
