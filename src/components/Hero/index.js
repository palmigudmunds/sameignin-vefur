import React from "react";
import { ReactComponent as HouseIcon } from "../../resources/icons/house-building.svg";

const Hero = () => {
  return (
    <section
      id="opening-header"
      className="relative flex flex-col items-center text-white py-0"
    >
      <div className="mt-72 xl:max-w-screen-xl space-y-2 flex flex-col justify-start items-start max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-8">
        <div className="w-full md:w-2/5">
          <h1 className="text-left leading-none">Fagleg og persónuleg húsfélagsþjónusta</h1>
        </div>
        <div className="pt-3 w-full md:w-2/5">
          <h4 className="text-left">
            Okkur er umhugað um húsfélagið þitt. Við tryggjum góðan rekstur,
            gerum áætlanir og fylgjum þeim eftir.
          </h4>
        </div>
      </div>
      <div id="thjonusta" className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-screen-xl w-full mt-48 px-8 mb-20">
        <div className="w-full h-auto rounded-xl bg-white flex flex-col p-10 space-y-5">
          <div className="flex items-center">
            <HouseIcon className="mb-px w-10 h-auto mr-5" />
            <h2>Lorem ipsum</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            mauris sed dolor porttitor, vitae malesuada dolor pulvinar. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Vestibulum faucibus auctor elit ac posuere.
          </p>
        </div>
        <div className="w-full h-auto rounded-xl bg-white flex flex-col p-10 space-y-5">
          <div className="flex items-center">
            <HouseIcon className="mb-px w-10 h-auto mr-5" />
            <h2>Lorem ipsum</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            mauris sed dolor porttitor, vitae malesuada dolor pulvinar. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Vestibulum faucibus auctor elit ac posuere.
          </p>
        </div>
        <div className="w-full h-auto rounded-xl bg-white flex flex-col p-10 space-y-5">
          <div className="flex items-center">
            <HouseIcon className="mb-px w-10 h-auto mr-5" />
            <h2>Lorem ipsum</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            mauris sed dolor porttitor, vitae malesuada dolor pulvinar. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Vestibulum faucibus auctor elit ac posuere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
