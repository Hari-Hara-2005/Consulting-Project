import ClientFeedback from "../Components/Clientfeedback";
import FaqSection from "../Components/FaqSection";
import Footer from "../Components/Footer";
import PageTitleBanner from "../Components/Pagetitlebanner";

const Faq = () => {
  return (
    <>
      <PageTitleBanner
        title="FAQS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQS", href: "#", active: true },
        ]}
      />
      <FaqSection />
      <ClientFeedback />
      <Footer />
    </>
  );
};

export default Faq;
