import "./register.css";
import { useLocation } from "react-router-dom";

function RegisterIndvdit(props) {
	const location = useLocation();
	const temp = location.state;
	let data;
	temp ? (data = temp) : (data = props);
	return (
		<div className="flex justify-center w-[100vw] items-center my-[2rem]">
			<div className="formResponsive space-y-6 px-[2rem] w-[75vw]">
				{temp && <p className="text-[#fc0160]">*refresh form to edit values</p>}
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
							name="participant_name"
							id="participant_name"
							className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
							placeholder="Enter your Full Name"
							required
							value={data.formData.participant_name}
							onChange={(e) => data.handleChange(e)}
						/>
					</div>
				</div>

				<div>
					<p
						htmlFor="name"
						className="block text-[1rem] font-normal text-white"
					>
						SAP ID
					</p>
					<div className="mt-1 flex rounded-md shadow-sm">
						<input
							type="number"
							name="participant_identity"
							id="participant_identity"
							className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
							placeholder="Enter your SAP ID"
							required
							value={data.formData.participant_identity}
							onChange={(e) => data.handleChange(e)}
						/>
					</div>
				</div>

				<div>
					<p
						htmlFor="name"
						className="block text-[1rem] font-normal text-white"
					>
						EMAIL
					</p>
					<div className="mt-1 flex rounded-md shadow-sm">
						<input
							type="text"
							name="participant_email"
							id="participant_email"
							className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
							placeholder="Enter your EMAIL"
							required
							value={data.formData.participant_email}
							onChange={(e) => data.handleChange(e)}
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
							type="number"
							name="participant_phone"
							id="participant_phone"
							className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
							placeholder="Enter your Phone Number"
							required
							value={data.formData.participant_phone}
							onChange={(e) => data.handleChange(e)}
						/>
					</div>
				</div>

				<div className=" px-4 py-3 text-left sm:px-0">
					<button
						type="submit"
						className="registerbtn inline-flex justify-center  border border-[#FC0160] bg-[#2C0022] py-2 px-4 text-lg font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						onClick={() => data.submitDit()}
					>
						REGISTER NOW
					</button>
				</div>
			</div>
		</div>
	);
}

export default RegisterIndvdit;
