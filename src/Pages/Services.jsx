import CategorySection from "../Components/Categorysection";
import Footer from "../Components/Footer";
import PageTitleBanner from "../Components/Pagetitlebanner";
import Service from "../Components/Service";

const Services = () => {
  return (
    <section>
      <PageTitleBanner
        title="Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#", active: true },
        ]}
      />
      <CategorySection />
      <Service />
      <Footer />
    </section>
  );
};
export default Services;
