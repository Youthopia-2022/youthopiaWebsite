import image1 from "../images/TECHNICAL.jpg";
import image2 from "../images/cultural2.jpg";
import image3 from "../images/INFORMAL.jpg";
import image4 from "../images/LITERARY .jpg"


export const events = [
  {
    id: 1,
    title: "Technical Events",
    desc: "A fest is totally incomplete without the the event which appreciates our techy side. Advancement done through technological measure is necessary for humanity, and we fulfill that necessity at Tech events of Youthopia.",
    thumbnail: image1,
    eventSlug: "evt",
    link: "/events?evt",
  },
  {
    id: 2,
    title: "Cultural Events",
    desc: "The incorporation of culture into every event adds a fun element. The what ifs and the nakkad nataks, the pantomime, the poetry and the mushairas, the beats and the notes sung, everything to uplift your mood, is found here.",
    thumbnail: image2,
    eventSlug: "evc",
    link: "/events?evc",
  },
  {
    id: 3,
    title: "Informal Events",
    desc: "When alarm clocks ring at 6 in the morning, when time is spent only on lectures, when speeches become absolutely dull and events get chaotic, that is the period when we need informal events to intervene and save us .",
    thumbnail: image3,
    eventSlug: "evi",
    link: "/events?evi",
  },
  {
    id: 4,
    title: "Literary Events",
    desc: "Literature is an eternal piece of art and entertainment. It is not just a bunch of statements, it's a way to portray one's emotions, and the literary events await your emotions to be evinced.",
    thumbnail: image4,
    eventSlug: "evd",
    link: "/events?evd",
  },
];
