import React from "react";
import absimage from "../../images/absimage.png";
import logo from "../../images/logo.png";
import "./Aboutus.css";
import Abus from "../../components/Abus/Abus";

const AllTeams = [
  {
    "Designing Team": {
      heads: [
        { membername: "John Doe (Head)", branchyear: "CSE" },
        { membername: "John Doe (Head)", branchyear: "CSE" },
      ],
      members: [
        { membername: "Jack", branchyear: "CSE" },
        { membername: "Jack", branchyear: "CSE" },
        { membername: "Jack", branchyear: "CSE" },
        { membername: "Jack", branchyear: "CSE" },
      ],
    },
  },
  {
    "Technical Team": {
      heads: [
        { membername: "John Doe (Head)", branchyear: "CSE" },
        { membername: "John Doe", branchyear: "CSE" },
      ],
      members: [
        { membername: "John Doe", branchyear: "CSE" },
        { membername: "John Doe", branchyear: "CSE" },
        { membername: "John Doe", branchyear: "CSE" },
        { membername: "John Doe", branchyear: "CSE" },
      ],
    },
  },
];

const Aboutus = () => {
  const myStyle7 = {
    color: "white",
    fontFamily: "'IBM Plex Sans'",
    fontSize: 28,
    fontWeight: 700,
  };
  const Conveners = [
    { membername: "Jack", branchyear: "CSE" },
    { membername: "Jack", branchyear: "CSE" },
  ];

  return (
    <div className="maincontainerAboutUs bg-[#3A3B5C]">
      <div className="aboutUsContent">
        <h1 style={myStyle7}>Meet Our Team</h1>
        <br></br>
        <div className="teamsHolder">
          <Abus title="Conveners" heads={[]} members={Conveners} />

          {AllTeams.map((team, id) => (
            <Abus
              key={id}
              title={Object.keys(team)[0]}
              heads={team[Object.keys(team)[0]].heads}
              members={team[Object.keys(team)[0]].members}
            />
          ))}
        </div>
      </div>
      <img className="logo" src={logo} alt="img not availabe"></img>
      <img className="absimage" src={absimage} alt="img not avilable"></img>
    </div>
  );
};
export default Aboutus;
