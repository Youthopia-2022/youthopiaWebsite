import React from "react";
import absimage from "../../images/absimage.png";
import logo from "../../images/logo.png";
import "./Aboutus.css"

//import { propTypes } from "react-bootstrap/esm/Image";
import Abus from "../../components/Abus/Abus";
const Aboutus = () =>{
    const myStyle7={
        color:"white",
        fontFamily:"'IBM Plex Sans'",
        fontSize: 28,
    }
    
    return(
        <div  className=" maincontainer bg-[#3A3B5C]">
            <div >
            <center><h1 style={myStyle7}>Meet Our Team</h1></center> 
            <br></br>
            <div className="flex flex-row">
            <div className="cont1">
            <Abus title="Conveners"  membername="name" branchyear="branch-year" ></Abus>
            <Abus membername="name" branchyear="branch-year" ></Abus></div>
            <div className="cont2">
            <Abus title="Designer team"  membername="Head 1" branchyear="branch-year"></Abus>
            <Abus membername="Head2" branchyear="branch-year" ></Abus></div>
            <div className="cont3">
            <Abus title="Designer Team Members"  membername="Member 1" branchyear="branch-year"></Abus>
            <Abus  membername="Member 2" branchyear="branch-year"></Abus>
            <Abus  membername="Member 3" branchyear="branch-year" ></Abus>
            <Abus  membername="Member 4" branchyear="branch-year" ></Abus></div>
            <div className="cont4" >
            <Abus title="Development team"  membername="Head 1" branchyear="branch-year" ></Abus>
            <Abus membername="Head 2" branchyear="branch-year" ></Abus>
            </div>
            <div className="cont5" >
            <Abus title="Development team members" membername="Member 1" branch-year="branch-year"></Abus>
            <Abus  membername="Member 2" branchyear="branch-year"></Abus>
            <Abus  membername="Member 3" branchyear="branch-year"></Abus>
            <Abus  membername="Member 4" branchyear="branch-year"></Abus>
            </div>
            
            
            </div>
            <div className="flex flex-row">
                <img className="logo" src={logo} alt="img not availabe"></img>
                <img className="absimage" src={absimage} alt="img not avilable"></img>
            </div>

            </div>
            
        </div>
    )
}
export default Aboutus;