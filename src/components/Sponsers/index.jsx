import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { supabase } from "../../supabaseClient";

const Sponsers = () => {
  const [data, setData] = useState("");

  const sr = ScrollReveal({
    distance: "60px",
    reset: false,
    duration: 1200,
    delay: 50,
    origin: "bottom",
  });
  useEffect(() => {
    sr.reveal(`.sponser1`, {});
    sr.reveal(`.sponser2`, { delay: 90 });
    sr.reveal(`.sponser3`, { delay: 130 });
    sr.reveal(`.sponser4`, { delay: 170 });
    sr.reveal(`.sponser5`, { delay: 210 }); // eslint-disable-next-line
  }, []);

  const getData = async () => {
    try {
      const { data, error, status } = await supabase
        .from("sponsors")
        .select("*");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setData(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[#3A3B5]">
      <div className="py-4 md:py-10">
        <h3 className="self-center text-center font-normal text-3xl text-[#FFF]">
          Our Sponsors
        </h3>

        <div className="flex flex-col md:flex-row my-10 justify-center items-center">
          {data?.length > 0 &&
            data?.map((sponsors, id) => {
              return (
                <img
                  key={id}
                  className="object-cover h-12  w-50 mx-10 my-5  md:my-0 sponser1"
                  src={sponsors.sponsor_icon_url}
                  alt="sponsers"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
