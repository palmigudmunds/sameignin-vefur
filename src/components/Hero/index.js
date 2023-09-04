import React, { useEffect, useState } from "react";
import { getAPI } from "../../services/api";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const [heroHeader, setHeroHeader] = useState("");

  useEffect(() => {
    getAPI(``)
      .then((resp) => {
        setHeroHeader(resp.data);
      })
  }, []);

  return (
    <section
      id="opening-header"
      className="relative flex flex-col items-center text-white py-0"
    >
      <div className="mt-60 md:mt-72 xl:max-w-screen-xl space-y-3 md:space-y-4 flex flex-col justify-start items-start max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-8 pb-28">
        <div className="w-full md:w-2/5">
          <h1 className="text-left leading-tight md:leading-none">
            {heroHeader}
          </h1>
        </div>
        <div className="w-full md:w-2/5">
          <h4 className="text-left">
            Upplifðu þægindin við að hafa alla þína húsnæðistengdu þjónustu
            undir einu þaki.
          </h4>
        </div>
          <NavLink
            to={`/hafdu-samband`}
            className="front-service-button text-sm md:hidden"
          >
            Fáðu ókeypis ráðgjöf
          </NavLink>
      </div>
    </section>
  );
};

export default Hero;
