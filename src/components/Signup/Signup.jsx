import React from 'react'
import './Signup.css'

function Signup() {
    const [status, setStatus] = React.useState(0) // 0: no show, 1: show yes, 2: show no.

    const radioHandler = (status) => {
        setStatus(status);
    }
    return (
        <div>
            <div className="flex justify-center w-[100vw] items-center my-[2rem]">
                <div className="formResponsive space-y-6 px-[2rem] w-[75vw]">
                    <div>
                        <p
                            htmlFor="name"
                            className="block text-[1rem] font-normal text-white"
                        >
                            Name
                        </p>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="signUpForm h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                                placeholder="&#xf007;&nbsp;&nbsp;&nbsp;Enter your Name"
                                required
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
                                name="email"
                                id="email"
                                className="signUpForm h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                                placeholder="&#xf0e0;&nbsp;&nbsp;&nbsp;Enter your Email"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <p
                            htmlFor="phnumber"
                            className="block text-[1rem] font-normal text-white"
                        >
                            Phone Number
                        </p>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                                type="text"
                                name="phnumber"
                                id="phnumber"
                                className="signUpForm h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                                placeholder="&#xf095;&nbsp;&nbsp;&nbsp;Enter your Phone Number"
                                required
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
                            <input className='mx-3' type="radio" name="gender" value="male" /> Male
                            <input className='mx-3' type="radio" name="gender" value="female" /> Female
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
                            <input className='mx-3' type="radio" name="university" checked={status === 1} value="DIT University" onClick={(e) => radioHandler(1)} />DIT UNIVERSITY
                            <input className='mx-3' type="radio" name="university" checked={status === 2} onClick={(e) => radioHandler(2)} />Other
                        </div>
                        <div className='mt-3 ml-3'>
                            {status === 2 && <div>
                                <p
                                    htmlFor="universityName"
                                    className="block text-[1rem] font-normal text-white"
                                >
                                    University Name
                                </p>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="universityName"
                                        id="universityName"
                                        className="signUpForm h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                                        placeholder="&#xf19d;&nbsp;&nbsp;&nbsp;Enter your University Name"
                                        required
                                    />
                                </div>
                            </div>}
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
                            <input className='mx-3' type="radio" name="year" value="firstYear" /> 1st
                            <input className='mx-3' type="radio" name="year" value="secondYear" /> 2nd
                            <input className='mx-3' type="radio" name="year" value="thirdYear" /> 3rd
                            <input className='mx-3' type="radio" name="year" value="forthYear" /> 4th
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
                                name="cnfrmpassword"
                                id="cnfrmpassword"
                                className="signUpForm h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
                                placeholder="&#xf023;&nbsp;&nbsp;&nbsp;Re-Enter password"
                                required
                            />
                        </div>
                    </div>
                    <div className=" px-4 py-3 text-left sm:px-0">
                        <button
                            type="submit"
                            className="createAcbtn inline-flex justify-center  border border-[#FC0160] bg-[#2C0022] py-2 px-4 text-lg font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
