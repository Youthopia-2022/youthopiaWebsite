import { React, useState } from "react";
import "./register.css";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import { useLocation } from "react-router-dom";

function Registerteam(props) {
	const location = useLocation();
	const temp = location.state;
	let data;
	temp ? (data = temp) : (data = props);

	const [count, setCount] = useState(1);
	const decrease = () => {
		if (data.formData.team_members_name.length > 1) {
			let x = data.formData.team_members_name;
			x.pop();
			data.setFormData({ ...data.formData, team_members_name: x });
			setCount((current) => current - 1);
		}
	};
	const increase = () => {
		if (data.formData.team_members_name.length < 4) {
			let x = data.formData.team_members_name;
			x.push("member" + (data.formData.team_members_name.length + 1));
			data.setFormData({ ...data.formData, team_members_name: x });
			setCount((current) => current + 1);
		}
	};
	const changeData = (e) => {
		let x = data.formData.team_members_name;
		x[e.target.name] = e.target.value;
		data.setFormData({ ...data.formData, team_members_name: x });
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
							Your Name
						</p>
						<div className="mt-1 flex rounded-md shadow-sm">
							<input
								type="text"
								name="participant_name"
								id="participant_name"
								className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
								placeholder="Enter Your Name"
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
							Team Name
						</p>
						<div className="mt-1 flex rounded-md shadow-sm">
							<input
								type="text"
								name="team_name"
								id="team_name"
								className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
								placeholder="Enter your Team Name"
								required
								value={data.formData.team_name}
								onChange={(e) => data.handleChange(e)}
							/>
						</div>
					</div>

					<div>
						<p
							htmlFor="name"
							className="block text-[1rem] font-normal text-white"
						>
							Team Leader's Identity Proof (Adhaar Card, DL etc.)
						</p>
						<div className="mt-1 flex rounded-md shadow-sm">
							<input
								type="text"
								name="participant_identity"
								id="participant_identity"
								className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
								placeholder="Enter Team Leader's ID Proof"
								required
								value={data.formData.participant_identity}
								onChange={(e) => data.handleChange(e)}
							/>
						</div>
						<UploadAndDisplayImage />
					</div>

					<div>
						<p
							htmlFor="name"
							className="block text-[1rem] font-normal text-white"
						>
							Your EMAIL
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
							Team Leader's Phone Number
						</p>
						<div className="mt-1 flex rounded-md shadow-sm">
							<input
								type="text"
								name="participant_phone"
								id="participant_phone"
								className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
								placeholder="Enter Team Leader's Phone Number"
								required
								value={data.formData.participant_phone}
								onChange={(e) => data.handleChange(e)}
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

					{data.formData.team_members_name &&
						data.formData.team_members_name.map((member, id) => {
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
											name={id}
											id={id}
											className="registerFormInput h-[2.5rem] px-2 py-1 block w-[100%] rounded-[5px] bg-transparent"
											placeholder="Enter Name"
											required
											value={
												id === 0
													? data.formData.participant_name
													: data.formData.team_members_name[id]
											}
											disabled={id === 0}
											onChange={(e) => {
												changeData(e);
											}}
										/>
									</div>
								</div>
							);
						})}

					<div className=" px-4 py-3 text-left sm:px-0">
						<button
							type="submit"
							className="registerbtn inline-flex justify-center  border border-[#FC0160] bg-[#2C0022] py-2 px-4 text-lg font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							onClick={() => data.submit()}
						>
							REGISTER NOW
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Registerteam;
