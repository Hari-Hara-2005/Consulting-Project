const Service = () => {
  const services = [
    {
      title: "Finance Planning",
      iconBg: "#a9d18e",
      iconColor: "text-[#0d2b26]",
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2v10l7.07 7.07A10 10 0 1 1 12 2Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h6" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.5a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 1 0 3"
          />
        </>
      ),
    },
    {
      title: "Business Strategy",
      iconBg: "#a9d18e",
      iconColor: "text-[#0d2b26]",
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
      title: "Digital Marketing",
      iconBg: "#a9d18e",
      iconColor: "text-[#0d2b26]",
      icon: (
        <>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="0.6" fill="currentColor" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 8l3-3m0 0h-2.5M19 5v2.5"
          />
        </>
      ),
    },
    {
      title: "Investment Idea",
      iconBg: "#a9d18e",
      iconColor: "text-[#0d2b26]",
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
    <section className="max-w-6xl mx-auto px-6 py-12">
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
              className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#F75709]"
              style={{ backgroundColor: service.iconBg }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-8 h-8 ${service.iconColor}`}
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
              className="title-font font-extrabold text-2xl text-[#0d2b26] uppercase mb-3"
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay={index * 150 + 400}
              className="text-gray-800 font-semibold leading-relaxed"
            >
              Our team prioritizes usability and accessibility to ensure that
              every visitor enjoys a seamless intuitive.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
