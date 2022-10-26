import React from "react";
//import background from "../../images/registerbackground.png";
import registerbackground from "../../images/registerbackground.png";
import sampleimage1 from "../../images/sampleimage1.png";
import "./Areyoufromdit.css"
const fromdit = () =>{
    return(
        <div className="maincontainer">
        <div style={{backgroundImage: `url(${registerbackground})`,}}>
            <div className="flex flex-row">
                <div>
                <img className="w=72 h=72 pl-12 pt-10"src={sampleimage1}/>
                </div>
                <div>
                    <div className="class1 pt-10">
                        <p>Technical Events</p>
                    </div>
                    <div className="  class2 flex flex-row space-x-36">
                        <p>Vedanta Hall</p>
                        <p>21/21/2022</p>
                        <p>13:07</p>
                    </div>
                    <div className="class3 flex flex-row space-x-72  ">
                        <div>
                        <p>EventCoordinator:Joestar Jotare</p>
                        <p>Over All Head:Dio Brando</p>
                        </div>
                        <div >
                            <p>Frees:300/Head</p>
                        </div>
                    </div>
                </div>

            </div>
            <br/><br/><br/><br/><br/>
            <div className="flex flex-col">
                <div className="class5">
                    <p>Are you From DIT University?</p>
                </div>
                <div className="  flex felx-row space-x-12">
                    <div className="button1">
                        <button><p className="buttonfont">Yes</p></button>
                    </div>
                    <div className="button2">    
                    <button><p className="buttonfont">No</p></button>
                    </div>
                </div>
            </div>
            <br></br><br/><br/><br/><br/><br/><br/><br/><br/>

        
        </div>
        </div>
    )

}
export default fromdit;