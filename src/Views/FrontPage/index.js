import React from "react";
import Container from "../../components/container";
import Loading from "../../components/Loading";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero";
import UmOkkur from "../../components/UmOkkur";
import Umsagnir from "../../components/Umsagnir";


const FrontPageView = () => {
  let navigate = useNavigate();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="space-y-12 md:space-y-20 mb-36">
          <Hero />
          <Container>  
            <UmOkkur />
            {/* <Umsagnir /> */}
          </Container>
        </div>
      </Suspense>
    </>
  );
};

export default FrontPageView;
