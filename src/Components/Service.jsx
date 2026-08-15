const Service = () => {
  const services = [
    {
      title: "Finance Planning",
      desc: "Our finance planning services help you organize your finances, make informed decisions, manage risks, and build a clear strategy for long-term financial growth.",
      iconBg: "#f7bd02",
      iconColor: "text-black",
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 7.5C16.5 6.12 14.49 5 12 5S7.5 6.12 7.5 7.5 9.51 10 12 10s4.5 1.12 4.5 2.5S14.49 15 12 15s-4.5-1.12-4.5-2.5"
          />
        </>
      ),
    },

    {
      title: "Business Strategy",
      desc: "Our business strategy services help you define clear goals, identify growth opportunities, overcome challenges, and build a practical roadmap for sustainable long-term success.",
      iconBg: "#f7bd02",
      iconColor: "text-black",
      icon: (
        <>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
          />
          <path strokeLinecap="round" d="M3 12h18" />
          <rect x="10.5" y="10.5" width="3" height="3" rx="0.5" />
        </>
      ),
    },

    {
      title: "Risk & Performance Consulting",
      desc: "Our risk and performance consulting services help you identify potential risks, improve operational efficiency, strengthen decision-making, and maximize business performance for sustainable growth.",
      iconBg: "#f7bd02",
      iconColor: "text-black",
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3 5 6v5c0 4.5 2.9 8.3 7 10 4.1-1.7 7-5.5 7-10V6l-7-3Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12 2 2 4-4"
          />
        </>
      ),
    },

    {
      title: "Investment Idea",
      desc: "Our investment idea services help you evaluate opportunities, understand market trends, assess potential risks, and make informed investment decisions aligned with your financial goals.",
      iconBg: "#f7bd02",
      iconColor: "text-black",
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 4.5c0-.8.9-2 3-2s3 1.2 3 2c0 1-1 1.5-1 1.5H10s-1-.5-1-1.5Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 6h8l2 4.5c.8 1.8 1 3 1 4.5a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5c0-1.5.2-2.7 1-4.5L8 6Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12v3m-1.3-3.7c0 .8.6 1.3 1.3 1.3s1.3.5 1.3 1.3-.6 1.4-1.3 1.4-1.3-.4-1.3-1"
          />
        </>
      ),
    },
  ];

  return (
    <section className="max-w-6xl mx-auto  px-6 lg:px-0 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="900"
            className="group bg-[#f4f6f5] rounded-xl p-8 hover:shadow-md transition-shadow duration-300"
          >
            {/* Icon */}
            <div
              data-aos="zoom-in"
              data-aos-delay={index * 150 + 200}
              className="w-16 h-16  rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 group-hover:!bg-[black]"
              style={{ backgroundColor: service.iconBg }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-8 h-8 ${service.iconColor} group-hover:!text-white`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {service.icon}
              </svg>
            </div>

            {/* Title */}
            <h3
              data-aos="fade-up"
              data-aos-delay={index * 150 + 300}
              className="title-font font-extrabold text-2xl text-black uppercase mb-3"
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay={index * 150 + 400}
              className="text-yellow-500 font-semibold leading-relaxed"
            >
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
