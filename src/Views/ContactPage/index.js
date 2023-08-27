import Container from "../../components/container";
import Loading from "../../components/Loading";
import { Suspense } from "react";

import Contact from "../../components/Contact";

const ContactPageView = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div id="contact-background" className="space-y-12 md:space-y-32 md:mb-0">
          <Container>
            <Contact />
          </Container>
        </div>
      </Suspense>
    </>
  );
};

export default ContactPageView;
