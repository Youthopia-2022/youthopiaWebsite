import React from "react";
import EventsRoot from "./EventsRoot";
import image from "../../images/DSC_0542.JPG";

function DjNight() {
  return (
    <>
      <EventsRoot
        title="DJ NIGHT BY RITIVIZ"
        date="20/11/2022"
        location="Chanakya Lawn"
        time="6:20 PM"
        image={image}
      ></EventsRoot>
    </>
  );
}

export default DjNight;
