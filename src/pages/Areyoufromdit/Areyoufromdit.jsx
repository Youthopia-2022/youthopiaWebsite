import React from "react";
//import background from "../../images/registerbackground.png";
import registerbackground from "../../images/registerbackground.png";
import sampleimage1 from "../../images/sampleimage1.png";
import "./Areyoufromdit.css"
const fromdit = () =>{
    return(
        <div className="maincontainer">
        <div style={{backgroundImage: `url(${registerbackground})`,}}>
            <div style={{display:'flex'}}>
                <div>
                <img className="w=72 h=72  pl-5 pt-5"src={sampleimage1}/>
                </div>

                <div style={{width:'100%'}}>
                    <div className="class1 mt-9">
                        <div>Technical Events</div>
                    </div>
                    <div className="class2"
                    style={{display:'flex', justifyContent:'center'}}>
                        <div style={{width:'100%'}}>Vedanta Hall</div>
                        <div style={{width:'100%'}}>21/21/2022</div>
                        <div style={{width:'100%'}}>13:07</div>
                    </div>
                    <div className="class3"
                    style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <div style={{justifyContent:'flex-start', width:'100%'}}>
                        <p>EventCoordinator:Joestar Jotare</p>
                        <p>Over All Head:Dio Brando</p>
                        </div>
                        <div style={{justifyContent:'flex-end', width:'100%', display:'flex', marginRight:'12px'}}>
                           Frees:300/Head
                        </div>
                    </div>
                    {/* <div className="class3 flex flex-row space-x-72  ">
                        <div>
                        <p>EventCoordinator:Joestar Jotare</p>
                        <p>Over All Head:Dio Brando</p>
                        </div>
                        <div >
                            <p>Frees:300/Head</p>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <div className="flex flex-row">
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

            </div> */}
            {/* <br/><br/><br/><br/><br/> */}
            <br></br>
            <div>
                <div className="class5">
                    <p>Are you From DIT University?</p>
                </div>
                <div className="flex flex-row  ">
                    <div className="button1 ml-5 mr-5 ">
                        <button><p className="buttonfont">Yes</p></button>
                    </div>
                    <div className="button2 mr-5  "> 
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