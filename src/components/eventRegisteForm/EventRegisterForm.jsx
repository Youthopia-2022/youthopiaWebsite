import "./register.css";
import RegisterIndv from "./RegisterIndv";
import RegisterIndvdit from "./RegisterIndvdit";
import Registerteamdit from "./Registerteamdit";
import Registerteam from "./Registerteam";

const EventRegisterForm = (props) => {
  const { isTeam, isDit } = props;

  return (
    <>
      {isTeam ? (
        isDit ? (
          <Registerteamdit />
        ) : (
          <Registerteam />
        )
      ) : isDit ? (
        <RegisterIndvdit />
      ) : (
        <RegisterIndv />
      )}
    </>
  );
};

export default EventRegisterForm;
