import { Link } from "react-router-dom";
import Title from "./Title";

export default function AboutCompany() {
  return (
    <section className="md:max-w-6xl mx-auto px-10 md:px-0 py-10 md:py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16  items-center">
        <div className="relative w-full">
          <div
            className="
      relative
      z-10
      w-full
      md:ml-4
      lg:ml-6
    "
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            {/* Orange flowing background */}
            <div
              className="
        absolute
        z-0

        /* Mobile */
        -top-5
        -left-4
        w-[75%]
        h-[70%]
        rounded-[2rem]
        bg-gradient-to-br
        from-[#f7bd02]
via-[#f7bd02]
to-[#f7bd02]

        /* Tablet */
        sm:-top-7
        sm:-left-6
        sm:w-[72%]
        sm:h-[72%]
        sm:rounded-[2.5rem]

        /* Desktop */
        md:-top-9
        md:-left-8
        md:w-[70%]
        md:h-[75%]
        md:rounded-[3rem]

        /* Large desktop */
        lg:-top-12
        lg:-left-12
        lg:w-[70%]
        lg:h-[75%]
      "
            />

            {/* Image */}
            <div
              className="
        relative
        z-10
        w-full
        overflow-hidden
        rounded-[1.5rem]
        shadow-xl

        sm:rounded-[1.75rem]
        md:rounded-[2rem]
      "
            >
              <img
                src="/assets/3.jpg"
                alt="Team discussing sales results"
                className="
          block
          w-full
          h-auto
          object-cover
          aspect-[4/3]
          sm:aspect-[4/3]
          md:aspect-[4/3]
          lg:aspect-auto
        "
              />
            </div>
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
            className="text-yellow-500 font-semibold leading-relaxed ml-5 mb-8 max-w-lg mt-6"
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
              className="bg-[#f7bd02] text-black uppercase font-bold text-sm tracking-wide ml-5 px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-colors duration-300"
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
