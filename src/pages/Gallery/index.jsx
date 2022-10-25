import imageA from "../../images/imageA.jpg";
import imageB from "../../images/imageB.jpg";
import imageC from "../../images/imageC.jpg";
import imageD from "../../images/imageD.jpg";
import image6 from "../../images/image6.jpg";
import image7 from "../../images/image7.jpg";
import image8 from "../../images/image8.jpg";
import image9 from "../../images/image9.jpg";
import image12 from "../../images/image12.jpg";
import image11 from "../../images/image11.jpg";

const Gallery = () => {
  return (
    <div className="bg-[#0B0A1B] py-10">
      <div className="flex flex-col md:flex-row items-center justify-center px-5 md:px-10 w-full">
        {/* First Column Images */}
        <div className="flex flex-col">
          <h3 className="text-white text-6xl font-bold">A NIGHT</h3>
          <h3 className="text-white text-6xl font-bold">TO</h3>
          <h3 className="text-white text-6xl font-bold">REMEMBER</h3>
          <h3 className="text-[#3F2EA1] text-6xl font-bold">YOUR</h3>
          <h3 className="text-[#3F2EA1] text-6xl font-bold">ENTIRE LIFE</h3>
          <img className="h-96 w-96 mt-10" src={imageB} alt="image.jpg" />
        </div>
        {/* Second Column Images */}
        <div className="flex flex-col mt-8 md:mt-0 md:ml-10">
          <img className="h-96 w-auto" src={imageA} alt="image.jpg" />
          <img className="h-96 w-auto mt-10" src={imageC} alt="image.jpg" />
        </div>
      </div>

      {/* Second Row */}
      <div className="px-5 md:px-10 py-10">
        <img className="h-96 w-full" src={imageD} alt="image.jpg" />
      </div>

      {/* Third Row */}
      <h2 className="px-10 pb-10 text-[#D44865] font-bold text-5xl md:text-7xl text-center">
        DO JOIN US FOR THE GRAND EVENT
      </h2>

      <div className="flex flex-col md:flex-row w-full items-center">
        <img
          className="py-5 px-5 md:px-10 md:w-1/3 h-30"
          src={image6}
          alt="image.jpg"
        />
        <img
          className="py-5 px-5 md:px-10 md:w-1/3 h-30"
          src={image7}
          alt="image.jpg"
        />
        <img
          className="py-5 px-5 md:px-10 md:w-1/3 h-30"
          src={image8}
          alt="image.jpg"
        />
      </div>

      <img
        className="w-full h-auto object-contain px-5 md:px-10 mt-10"
        src={image9}
        alt="image.jpg"
      />

      <img
        className="w-full h-auto object-contain px-5 md:px-10 mt-10"
        src={image11}
        alt="image.jpg"
      />

      <img
        className="w-full h-auto object-contain px-5 md:px-10 mt-10"
        src={image12}
        alt="image.jpg"
      />
    </div>
  );
};
export default Gallery;
