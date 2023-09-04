import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { ReactComponent as Gjaldkerinn } from "../../resources/icons/piggy-bank.svg";
import { ReactComponent as Husvordur } from "../../resources/icons/person-dolly.svg";
import { ReactComponent as Formadurinn } from "../../resources/icons/user-crown.svg";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="thjonusta" data-aos="fade-up" data-aos-duration="2600">
      <div className="w-full rounded-xl flex flex-col text-center items-center justify-items-start -mt-10 md:-mt-20">
        <h3 className="text-teal">Þjónusta</h3>
        <h4 className="text-maindarkblue text-2xl md:text-4xl font-bold mt-5">
          Hvaða pakki hentar húsfélaginu þínu?
        </h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-screen-xl w-full mt-8">
        <div className="w-full rounded-xl bg-white flex flex-col p-10 pb-7 border-2 h-fit">
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
          <div className="flex flex-col items-center pt-3">
            <NavLink to={`/hafdu-samband`} className="front-service-button">
              Fá tilboð
            </NavLink>
          </div>
        </div>
        <div className="w-full rounded-xl bg-white flex flex-col p-10 pb-7 border-2 h-fit">
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
          <div className="flex flex-col items-center pt-3">
            <NavLink to={`/hafdu-samband`} className="front-service-button">
              Fá tilboð
            </NavLink>
          </div>
        </div>
        <div className="w-full rounded-xl bg-white flex flex-col p-10 pb-7 border-2 h-fit">
          <div className="flex items-center">
            <Husvordur className="mb-px w-10 h-auto mr-5 fill-teal" />
            <h2>Húsvörðurinn</h2>
          </div>
          <p className="mt-5">
            Húsvörðurinn elskar að dunda sér við það sem þarf að gera í og við
            húsið og fer í flest minni verk. Hann kemur eftir samkomulagi, allt
            frá einu til tvisvar sinnum á ári yfir í daglegar heimsóknir. Allt
            eftir stærð og þörfum húsfélagsins. Húsvörðurinn er í góðum
            samskiptum við stjórn húsfélagsins og skilar inn skýrslu eftir
            hverja heimsókn.
          </p>
          <ul className="list-disc space-y-5 p-4">
            <li>
              Grunnþjónusta húsfélaga, eftirlit með ljósaperum, neyðarlýsingu,
              húsbúnaði og umhirðu á lóð og stigagöngum
            </li>
            <li>
              Fer yfir húsið einu sinni á ári og gerir skýrslu um viðhaldsþörf
              hússins
            </li>
            <li>
              Eftirlit með kerfum og búnaði í sameign s.s. snjóbræðsla,
              sorphirða, ræstingar, aðgangskerfi
            </li>
            <li>Álestur sameiginlegra mæla</li>
            <li>
              Skiptir um rafhlöður í reykskynjurum á 6 mánaða fresti og yfirfer
              slökkvitæki
            </li>
            <li>
              Samskipti við verktaka sem eru að vinna í húsinu ef þess er óskað
            </li>
            <li>
              Fer yfir húsið einu sinni á ári og gerir skýrslu um viðhaldsþörf
              hússins í samstarfi við sérfræðinga, ef þess er óskað
            </li>
            <li>Pantar iðnaðarmenn eftir þörfum og samkomulagi</li>
            <li>
              Kemur með tillögur og ábendingar um það sem betur mætti fara
            </li>
          </ul>
          <div className="flex flex-col items-center pt-3">
            <NavLink to={`/hafdu-samband`} className="front-service-button">
              Fá tilboð
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
