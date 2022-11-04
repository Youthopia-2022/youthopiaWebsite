import "./register.css";
import RegisterIndv from "./RegisterIndv";
import RegisterIndvdit from "./RegisterIndvdit";
import Registerteamdit from "./Registerteamdit";
import Registerteam from "./Registerteam";
import toast, { Toaster } from "react-hot-toast";
import { supabase } from "../../supabaseClient";
import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const EventRegisterForm = (props) => {
	const { isTeam, isDit } = props;
	const [formData, setFormData] = useState({
		team_members_name: [""],
	});
	const event_id = useParams();
	const location = useLocation();

	const navigate = useNavigate();

	//storing values of inputs in useState
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	//for varifying email
	const validateEmail = (data) => {
		var res = /\S+@\S+\.\S+/.test(data.participant_email);
		!res && toast.error("Please Enter a Valid Email!");
		return res;
	};

	//validating phone
	const validatePhone = (data) => {
		var res =
			data.participant_phone &&
			data.participant_phone.length === 10 &&
			/^\d+$/.test(data.participant_phone);
		!res && toast.error("Please Enter a Valid Phone Number!");
		return res;
	};

	//validating sap
	const validateSap = (data) => {
		var res =
			data.participant_identity &&
			/^\d+$/.test(data.participant_identity) &&
			data.participant_identity.length > 9;
		!res && toast.error("Please Enter a Valid AADHAAR NUMBER!");
		return res;
	};

	//validate name
	const validateName = (data) => {
		var res =
			data.participant_name &&
			/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(
				data.participant_name
			) &&
			data.participant_name.length > 2 &&
			data.participant_name.length < 50;
		!res && toast.error("Please Enter a valid Name!");
		return res;
	};

	//function to upload verified data
	const uploadData = async (details, participant_id) => {
		const { data, error, status } = await supabase
			.from("registrations")
			.insert([details]);
		if (status === 200 || status === 201) {
			toast.success("Registeration Successful!", { duration: 5000 });
		} else if (status === 409) {
			toast.error("This user has already registered for this event!");
		}
		if (error && status !== 409) {
			console.log(error.message);
		}
		if (!error) {
			addToEvents(participant_id);
		}
	};

	//function to get participant id
	const getPID = async () => {
		const { data, error } = await supabase
			.from("profiles")
			.select("user_id")
			.eq("user_email", formData.participant_email);
		if (error) {
			toast.error("Some error occured, Please try again!");
			console.log(error);
			return false;
		}
		if (data.length === 0) {
			return navigate("/signup", {
				state: {
					formData: formData,
					submit: submit,
					handleChange: handleChange,
					url: location.pathname,
				},
			});
		}
		const participant_id = data[0].user_id;
		const order_id = event_id.id + "-" + formData.participant_identity;
		let details = formData;
		details = {
			...details,
			order_id: order_id,
			event_id: event_id.id,
			event_isTeamEvent: props.isTeam,
		};
		if (!error) {
			uploadData(details, participant_id);
		}
	};

	//to add participant it to events table
	const addToEvents = async (id) => {
		const { data, error } = await supabase
			.from("events")
			.select("registered_participant")
			.eq("event_id", event_id.id);
		let rp = data[0].registered_participant;
		if (error) {
			console.log(error);
		}
		if (!error) {
			rp.push(id);
			addToEventss(rp);
			addToParticipant();
		}
	};
	const addToEventss = async (rp) => {
		const { data, error } = await supabase
			.from("events")
			.update({ registered_participant: rp })
			.eq("event_id", event_id.id);
		if (error) {
			console.log(error);
		}
	};

	//add event to participatns registered events table
	const addToParticipant = async () => {
		const { data, error } = await supabase
			.from("profiles")
			.select("events_registered")
			.eq("user_email", formData.participant_email);
		let rp = data[0].events_registered;
		if (!error) {
			rp.push(event_id.id);
			addToParticipantt(rp);
		}
	};
	const addToParticipantt = async (rp) => {
		const { data, error } = await supabase
			.from("profiles")
			.update({ events_registered: rp })
			.eq("user_email", formData.participant_email);
		if (error) {
			console.log(error);
		}
	};

	//submit function
	const submit = async () => {
		if (
			validateName(formData) &&
			validateSap(formData) &&
			validateEmail(formData) &&
			validatePhone(formData)
		) {
			getPID();
		}
	};

	return (
		<>
			<Toaster />
			{isTeam ? (
				isDit ? (
					<Registerteamdit
						handleChange={handleChange}
						submit={submit}
						formData={formData}
						setFormData={setFormData}
					/>
				) : (
					<Registerteam
						handleChange={handleChange}
						submit={submit}
						formData={formData}
						setFormData={setFormData}
					/>
				)
			) : isDit ? (
				<RegisterIndvdit
					handleChange={handleChange}
					submit={submit}
					formData={formData}
				/>
			) : (
				<RegisterIndv
					handleChange={handleChange}
					submit={submit}
					formData={formData}
				/>
			)}
		</>
	);
};

export default EventRegisterForm;
