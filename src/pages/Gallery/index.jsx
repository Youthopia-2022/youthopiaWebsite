import { Link } from "react-router-dom";
import React from "react";
//import galtop from "../../images/imageyt.jpg";
import imageA from "../../images/imageA.jpg";
import imageB from "../../images/imageB.jpg";
import imageC from "../../images/imageC.jpg";
import imageD from "../../images/imageD.jpg";
import image6 from "../../images/image6.jpg";
import image7 from "../../images/image7.jpg";
import image8 from "../../images/image8.jpg";
import image9 from "../../images/image9.jpg";
import image10 from "../../images/image10.png";
import image12 from "../../images/image12.jpg";
import image11 from "../../images/image11.jpg";
import ellipse1 from "../../images/ellipse1.png";
import ellipse2 from "../../images/ellipse2.png";




const Gallery = () =>{
    const myStyle={
        color:"white",
        fontFamily:"Franklin Gothic Heavy",
        fontSize: 32,
    }
    const myStyle2={
        color:"#120043",
        fontFamily:"Franklin Gothic Heavy",
        fontSize: 38,
    }
    const myStyle3={
        color:"#DC1436",
        fontFamily:"Arial Black",
        fontSize: 38,
    }
    return(
        <div  class="bg-[#3A3B5C]">
    
            
                <div class="items-center ">
                <img className="object-none object-center pr-7 pt-5 pb-5 h-84 ml-5 mr-5" src={imageA} alt="img not avilable"/>
                </div>
            <div class="flex flex-row ml-5  justify-center"  >
                <div class="flex flex-col space-y-1">
                    <h3 style={myStyle}>A NIGHT</h3>
                    <h3 style={myStyle}>TO</h3>
                    <h3 style={myStyle}>REMEMBER</h3>
                    <h3 style={myStyle2}>YOUR</h3>
                    <h3 style={myStyle2}>ENTIRE LIFE</h3>
                    <img className="object h-96 w-96" src={imageB} alt="img not avilable"/>
                </div>
                <div class ="flex flex-col h-84  ml-5 pr-10 object-fit-contain">
                    <img className="object h-96 w-96 pb-5 " src={imageA} alt="img not avilable"/>
                    <img className="object h-96 w-96 " src={imageC} alt="img not avilable"/>
                </div>
                
            </div>
            <div className="object w-full h-72">
                <img className=" object w-full h-72 pr-5 pl-5 pt-5 " src={imageD} alt="img not avilable"/>
            </div>
            <div class="space-x-4 ml-5">
            <h2 style={myStyle3}><b>DO JOIN US FOR  THE GRAND EVENT</b></h2>
            </div>
            <div class="photo 1 flex flex-row  mx-5 mr-5 space-x-4">
                <img className="object w-1/3 h-30" src={image6} alt="img not avilable"/>
                <img className="object w-1/3 h-30" src={image7} alt="img not avilable"/>
                <img className="object w-1/3 h-30" src={image8} alt="img not avilable"/>
            </div>
            <div >
                <img className="object-center w-full pr-10 h-72 ml-5  pt-5 " src={image9} alt="img not avilable"/>
            </div>
            <div class="flex flex-row ">
                <div class="grow">
                    <img className="object w-3/4 h-60 ml-5 mr-10 pt-5 h-48" src={image10} alt="img not avilable"/>
                </div>
                <div class="flex-none">
                <div class="flex flex-col mr-36">
                    <img  className="object w-12 h-12  mb-5 mt-5 " src={ellipse1} alt="img not avilable"/>
                    <img className=" w-12 h-12  "  src={ellipse2} alt="img not avilable"/>
                </div>
                </div>
            </div>
            <div>
                <img className="object-center w-full pr-10 h-72 ml-5  pt-5 " src={image11} alt="img not avilable"/>
            </div>
            <div>
                <img className="object-center w-full pr-10 h-72 ml-5  pt-5 " src={image12} alt="img not avilable"/>
            </div>
            
            <Link to="/"> </Link>
        </div>
    )
}
export default Gallery;