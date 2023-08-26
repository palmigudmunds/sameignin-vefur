import React from "react";
import { ReactComponent as Gjaldkerinn } from "../../resources/icons/piggy-bank.svg";
import { ReactComponent as Husvordur } from "../../resources/icons/person-dolly.svg";
import { ReactComponent as Formadurinn } from "../../resources/icons/user-crown.svg";



const Services = () => {
  return (
    <section id="thjonusta">
      <div className="w-full rounded-xl flex flex-col text-center items-center justify-items-start -mt-10 md:-mt-20">
        <h3 className="text-teal">Þjónusta</h3>
        <h4 className="text-black text-2xl md:text-5xl font-bold mt-5">
          Hvaða pakki hentar húsfélaginu þínu?
        </h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-screen-xl w-full px-8 mt-8">
        <div className="w-full rounded-xl bg-white flex flex-col p-10 border-2 h-fit">
          <div className="flex items-center">
            <Husvordur className="mb-px w-10 h-auto mr-5 fill-teal" />
            <h2>Húsvörðurinn</h2>
          </div>
          <p className="mt-5">
            Húsvörðurinn elskar að dunda sér við það sem þarf að gera í húsinu.
          </p>
          <ul className="list-disc space-y-5 p-4">
            <li>Skiptir um batterí í reykskynjurum á 6 mánaða fresti</li>
            <li>Skiptir um perur sem springa</li>
            <li>Sér um samskipti við verktaka sem eru að vinna í húsinu</li>
            <li>
              Fer yfir húsið einu sinni á ári og gerir skýrslu um viðhaldsþörf
              hússins
            </li>
            <li>Fer yfir brunavarnir</li>
          </ul>
        </div>
        <div className="w-full rounded-xl bg-white flex flex-col p-10 border-2 h-fit">
          <div className="flex items-center">
            <Gjaldkerinn className="mb-px w-10 h-auto mr-5 fill-teal" />
            <h2>Gjaldkerinn</h2>
          </div>
          <p className="mt-5">
            Gjaldkerinn er nákvæmur og talna glöggur einstaklingur sem sér um
            fjármál og bókhald húsfélagsins.
          </p>
          <ul className="list-disc space-y-5 p-4">
            <li>Innheimta hús- og framkvæmdagjalda</li>
            <li>Senda út reikninga</li>
            <li>Greiðsla samþykktra reikninga</li>
            <li>Samskipti við bankann</li>
            <li>VSK - endurgreiðslur</li>
            <li>Færsla bókhalds og afstemmingar</li>
            <li>Gerð ársreiknings</li>
            <li>Útgáfa húsfélagayfirlýsinga</li>
          </ul>
        </div>
        <div className="w-full rounded-xl bg-white flex flex-col p-10 border-2 h-fit">
          <div className="flex items-center">
            <Formadurinn className="mb-px w-10 h-auto mr-5 fill-teal" />
            <h2>Formaðurinn</h2>
          </div>
          <p className="mt-5">
            Formaðurinn elskar fundi og er sérfræðingur í öllu sem við kemur
            húsfélaginu og rekstri þess. Er alltaf tilbúinn að setjast niður og
            ræða málefni húsfélagsins.
          </p>
          <ul className="list-disc space-y-5 p-4">
            <li>Gjaldkerinn er innifalinn</li>
            <li>Undirbýr og boðar til aðalfundar með stjórn</li>
            <li>Umsjón aðalfundar, ásamt fundarstjórn og fundarritun</li>
            <li>Kemur með tillögu að kostnaðar- og húsgjaldaáætlun</li>
            <li>Fær tilboð í alla þjónustu sem húsfélagið þarf</li>
            <li>Útvegar iðnaðarmenn í smærri viðhaldsverkefni</li>
            <li>
              Ráðgjöf um réttindi og skyldur, ágreiningsmál og
              viðhaldsframkvæmdir
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
