import CategorySection from "../Components/Categorysection";
import Footer from "../Components/Footer";
import PageTitleBanner from "../Components/Pagetitlebanner";

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
      <Footer />
    </section>
  );
};
export default Services;
