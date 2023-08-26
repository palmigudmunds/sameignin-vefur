import React from "react";
import Container from "../../components/container";
import Loading from "../../components/Loading";
import { Suspense } from "react";
import Hero from "../../components/Hero";
import UmOkkur from "../../components/UmOkkur";
import Services from "../../components/Services";

const FrontPageView = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="space-y-12 md:space-y-20 mb-20">
          <Hero />
          <Container>
            <Services />
            <UmOkkur />
          </Container>
        </div>
      </Suspense>
    </>
  );
};

export default FrontPageView;
