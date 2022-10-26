import React from 'react'
import './RegisterIndvdit.css'

function RegisterIndvdit() {
    return (
        <div className='form'>
            <div className="md:grid md:grid-cols-3 md:gap-6 my-3">
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                        <div className=" sm:overflow-hidden sm:rounded-md">
                            <div className="content space-y-6 px-4 py-5 sm:p-6">
                                <div>
                                    <div className="mt-1 flex items-center">
                                        <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-300">
                                            <svg className="h-full w-full text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </span>
                                        <label className="block text-lg font-medium text-white mx-5">Upload Your Profile Photo</label>
                                    </div>
                                </div>
                                <hr />

                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="name" className="block text-lg font-medium text-white">
                                            Your Name
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="px-2 py-1 block w-full flex-1 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg bg-transparent"
                                                placeholder="Enter your Full Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="studentId" className="block text-lg font-medium text-white">
                                            SAP ID
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                type="number"
                                                name="studentId"
                                                id="studentId"
                                                className="px-2 py-1 block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg bg-transparent"
                                                placeholder="Enter your SAP ID"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="phNumber" className="block text-lg font-medium text-white">
                                            Phone Number
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                type="number"
                                                name="phNumber"
                                                id="phNumber"
                                                className="px-2 py-1 block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg bg-transparent"
                                                placeholder="Enter your Phone Number"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterIndvdit;
