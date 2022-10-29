import "./register.css";

function RegisterIndv() {
	return (
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
							name="name"
							id="name"
							className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
							placeholder="Enter your Full Name"
							required
						/>
					</div>
				</div>

				<div>
					<p
						htmlFor="name"
						className="block text-[1rem] font-normal text-white"
					>
						Identity Proof (Adhaar Card, DL etc.)
					</p>
					<div className="mt-1 flex rounded-md shadow-sm">
						<input
							type="text"
							name="name"
							id="name"
							className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
							placeholder="Enter your ID Proof"
							required
						/>
					</div>
				</div>

				<div>
					<p
						htmlFor="name"
						className="block text-[1rem] font-normal text-white"
					>
						Phone Number
					</p>
					<div className="mt-1 flex rounded-md shadow-sm">
						<input
							type="text"
							name="name"
							id="name"
							className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
							placeholder="Enter your Phone Number"
							required
						/>
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
	);
}

export default RegisterIndv;
