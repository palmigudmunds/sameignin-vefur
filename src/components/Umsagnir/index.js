import React from "react";

const Umsagnir = () => {

  return (
    <section>
      <div className="w-full h-auto p-8 md:p-16 flex flex-col text-center items-center justify-items-start space-y-6">
        <h3 className="text-teal">Umsagnir</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl w-full mt-48 md:h-[31rem] px-8">
        <div className="w-full min-h-[26rem] h-full rounded-xl bg-white flex flex-col p-10 border border-black">
          <p className="text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            mauris sed dolor porttitor, vitae malesuada dolor pulvinar. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Vestibulum faucibus auctor elit ac posuere.
          </p>
          <h3 className="text-start mt-3">Jón Jónsson</h3>
          <h3 className="text-start text-gray-400 font-normal">Húseigandi, Hamraborg</h3>
        </div>
        <div className="w-full min-h-[26rem] h-full rounded-xl bg-white flex flex-col p-10 space-y-5 border border-black">
          <div className="flex items-start">
            <h2>Lorem ipsum</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            mauris sed dolor porttitor, vitae malesuada dolor pulvinar. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Vestibulum faucibus auctor elit ac posuere.
          </p>
        </div>
        <div className="w-full min-h-[26rem] h-full rounded-xl bg-white flex flex-col p-10 space-y-5 border border-black">
          <div className="flex items-center">
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
      </div>
    </section>
  );
};

export default Umsagnir;