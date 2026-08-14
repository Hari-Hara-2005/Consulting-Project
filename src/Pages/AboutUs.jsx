import AboutCompany from "../Components/Aboutcompany";
import Footer from "../Components/Footer";
import PageTitleBanner from "../Components/Pagetitlebanner";
import StatsCounter from "../Components/Statscounter";
import TeamMembers from "../Components/Teammembers";
import Testimonials from "../Components/Testimonials";
import WorkingProcess from "../Components/Workingprocess";

const About = () => {
  return (
    <section >
      <PageTitleBanner
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "#", active: true },
        ]}
      />
      <AboutCompany />
      <WorkingProcess />
      <StatsCounter />
      <TeamMembers />
      <Testimonials />
      <Footer />
    </section>
  );
};

export default About;
