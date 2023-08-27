import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const SERVICE_ID = "service_3anh1r5";
  const TEMPLATE_ID = "template_fc2lnun";
  const USER_ID = "9PRgSPCC08L_z8urx";

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Fyrirspurn send",
          text: "Við verðum í bandi um leið og við getum!",
          confirmButtonColor: "#26B5B2",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Eitthvað fór úrskeiðis, prófaðu aftur",
          confirmButtonColor: "#26B5B2",
        });
      }
    );
    e.target.reset();
  };

  return (
    <div
      id="hafdu-samband"
      className="flex flex-col md:flex-row justify-start max-w-none mt-40 md:mt-48 2xl:mt-62 pb-32"
    >
      <div className="md:w-1/2 flex flex-col items-start md:items-center">
        <h2 className="text-start md:w-10/12 lg:w-8/12 text-white">Hafðu samband!</h2>
        <p className="pt-5 italic md:w-10/12 lg:w-8/12 text-white">
          Nýttu þetta form til að fá tilboð í húsfélagsþjónustu að kostnaðarlausu eða til
          að senda fyrirspurnir. Einnig getur þú sent okkur póst á
          stigagangurinn@stigagangurinn.is.
        </p>
      </div>
      <div className="flex flex-col justify-start items-start md:w-1/2 pt-5 md:pt-0">
        <form className="w-full md:w-10/12" onSubmit={onSubmit}>
          <div className="md:mb-6 flex flex-col items-center justify-between space-y-4">
            <div className="w-full">
              <label className="label md:mb-2" for="name">
                Nafn tengiliðs*
              </label>
              <input
                className="appearance-none bg-gray-50 border-2 border-gray-300 text-gray-900 w-full mb-3 md:mb-0 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="form-input-control-last-name"
                name="user_name"
                type="text"
                required
              />
            </div>
            <div className="w-full">
              <label className="label md:mb-2" for="form-input-control-email">
                Netfang*
              </label>
              <input
                className="appearance-none bg-gray-50 border-2 border-gray-300 text-gray-900 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="form-input-control-email"
                name="user_email"
                type="email"
                required
              />
            </div>
            <div className="w-full">
              <label className="label md:mb-2" for="form-input-control-phone">
                Símanúmer
              </label>
              <input
                className="appearance-none bg-gray-50 border-2 border-gray-300 text-gray-900 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="form-input-control-phone"
                name="user_phone"
                type="tel"
              />
            </div>
            <div className="w-full">
              <label className="label md:mb-2" for="form-input-control-phone">
                Heimilisfang húsfélags*
              </label>
              <input
                className="appearance-none bg-gray-50 border-2 border-gray-300 text-gray-900 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="form-input-control-title"
                name="user_address"
                type="text"
                required
              />
            </div>
            <div className="w-full">
              <label className="label md:mb-2" for="form-input-control-phone">
                Fjöldi íbúða í húsfélagi
              </label>
              <input
                className="appearance-none bg-gray-50 border-2 border-gray-300 text-gray-900 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="form-input-control-title"
                name="apartments_count"
                type="number"
              />
            </div>
            <div className="w-full h-24">
              <label className="label md:mb-2" for="message">
                Skilaboð
              </label>
              <textarea
                className="block appearance-none h-full border-2 bg-gray-50 border-gray-300 text-gray-900 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="form-textarea-control-opinion"
                name="user_message"
                type="text"
              ></textarea>
            </div>
          </div>
          <div className="mt-12 md:mt-10 flex items-start">
            <button
              className="bg-brown text-white text-lg md:text-xl py-2 px-10 hover:bg-darkbrown ease-in-out duration-300 rounded-full"
              type="submit"
            >
              Senda
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
