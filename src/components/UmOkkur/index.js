import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UmOkkur = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <section id="um-okkur" data-aos="fade-up" data-aos-duration="2600">
      <div className="w-full h-auto rounded-xl flex flex-col text-center items-center justify-items-start">
        <h3 className="text-teal">Hvað er stigagangurinn?</h3>
        <h4 className="text-maindarkblue text-2xl md:text-4xl font-bold mt-5">Reynslumikil áhöfn bíður þín!</h4>
        <p className="w-full md:w-2/3 mt-8">
          Stigagangurinn er nýstofnað fyrirtæki með það hlutverk að einfalda
          rekstur húsfélagsins fyrir íbúa og sameina alla þjónustu sem tengist
          húsfélögum undir eitt þak. Þjónusta okkar er sniðin að einstökum
          þörfum hvers húsfélags. Reynslan hefur sýnt að viðskiptavinir kjósa að
          eiga við einn aðila sem býður upp á alhliða þjónustu.
        </p>
        <br></br>
        <p className="w-full md:w-2/3">
          Við hjá Stigaganginum skiljum þær áskoranir sem húsnæðisfélög og
          félagsmenn þeirra standa frammi fyrir. Markmið okkar er að hagræða
          ferli, draga úr stjórnunarbyrði og auka heildarupplifun íbúa. Með því
          að sameina fjölbreytta þjónustu, allt frá fjármálastjórnun til
          samræmingar viðhalds, búum við til einhliða lausn fyrir húsfélög.
        </p>
        <br></br>
        <p className="w-full md:w-2/3">
          Viðskiptamiðuð nálgun okkar tryggir að hvert húsfélag fái persónulega
          athygli og stuðning. Við trúum því að með því að einfalda og miðstýra
          þjónustu getum við hlúið að sterkari húsfélögum og hjálpað íbúum að
          finna fyrir meiri tengingu við húsfélög sín.
        </p>
        <br></br>
        <p className="w-full md:w-2/3">
          Með Stigaganginum getur þú treyst því að þarfir húsfélagsins séu í
          færum höndum. Teymið okkar leggur metnað sinn í að veita skilvirka,
          áreiðanlega og gagnsæja þjónustu sem styrkir húsnæðisfélög og íbúa
          þeirra.
        </p>
        <br></br>
        <p className="w-full md:w-2/3">
          Upplifðu þægindin við að hafa alla þína húsnæðistengdu þjónustu undir
          einu þaki. Vertu með í Stigaganginum þar sem við endurskilgreinum
          eignastýringu og samfélagslíf til hins betra.
        </p>
      </div>
    </section>
  );
};

export default UmOkkur;
