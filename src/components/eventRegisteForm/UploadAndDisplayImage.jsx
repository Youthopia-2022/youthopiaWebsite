const UploadAndDisplayImage = (props) => {
	return (
		<div>
			<h1 className=" my-3 block text-[1rem] font-normal text-white">
				Upload Your ID Proof
			</h1>
			{props.selectedImage && (
				<div>
					<img
						className="border"
						alt="not fount"
						width={"250px"}
						src={URL.createObjectURL(props.selectedImage)}
					/>
					<br />
					<button
						className="border border-[#FC0160] bg-[#2C0022] py-2 px-4 text-lg font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						onClick={() => props.setSelectedImage(null)}
					>
						Remove
					</button>
				</div>
			)}

			<br />
			<input
				type="file"
				name="myID"
				onChange={(event) => {
					console.log(event.target.files[0]);
					props.setSelectedImage(event.target.files[0]);
				}}
			/>
		</div>
	);
};

export default UploadAndDisplayImage;
