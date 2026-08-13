import { Link } from "react-router-dom";
import Title from "./Title";

export default function AboutCompany() {
  return (
    <section className="md:max-w-6xl mx-auto px-10 md:px-0 py-10 md:py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16  items-center">
        <div className="relative">
          <div
            className="relative z-10 rounded-[2rem] overflow-hidden shadow-xl md:ml-6"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            <img
              src="assets/1.jpg"
              alt="Team discussing sales results"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
            data-aos-easing="ease-out-cubic"
            className=""
          >
            <Title
              align="left"
              subtitle="About Company"
              title={<>We Committed To Helping You Achieve Your Goals</>}
            />
          </div>
          <p
            className="text-gray-800 font-semibold leading-relaxed ml-5 mb-8 max-w-lg mt-6"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="250"
            data-aos-easing="ease-out-cubic"
          >
            At the core of our ethos lies a dedication to our clients. Your
            success is our shared triumph, and we're unwavering in our
            commitment to delivering exceptional,
          </p>
          <Link to="/contact-us">
            <button
              className="bg-[#0d2b26] text-white uppercase font-bold text-sm tracking-wide ml-5 px-8 py-4 rounded-lg hover:bg-[#F75709] transition-colors duration-300"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="400"
              data-aos-easing="ease-out-cubic"
            >
              Let's Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
