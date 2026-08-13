import Title from "./Title";

const TEAM = [
  {
    name: "Linda F. Collins",
    role: "SR Marketer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sandra D. Rainey",
    role: "Executive officer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Brooklyn Simmons",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Patrick Stewart",
    role: "Finance advisor",
    image:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=600&q=80",
  },
];

export default function TeamMembers() {
  return (
    <section className="md:max-w-8xl mx-auto px-6 py-20">
      {/* Title */}
      <div className="mb-16" data-aos="fade-up" data-aos-duration="900">
        <Title
          align="center"
          subtitle="Our Team Members"
          title={
            <>
            Get Consulting From Our Best Consultants
            </>
          }
        />
      </div>

      {/* Team grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM.map((member, index) => (
          <div
            key={member.name}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay={index * 150}
          >
            {/* Image card */}
            <div className="group relative rounded-2xl overflow-hidden bg-gray-100 aspect-[3/4]">
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Social icons */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {/* X */}
                <a
                  href="#"
                  aria-label={`${member.name} on X`}
                  className="w-9 h-9 rounded-full bg-white/90 hover:bg-[#F75709] flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-[#0d2b26]"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label={`${member.name} on Instagram`}
                  className="w-9 h-9 rounded-full bg-white/90 hover:bg-[#F75709] flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-[#0d2b26]"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.204-.013-3.667-.072-4.947-.198-4.354-2.618-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 9.837a3.837 3.837 0 1 1 0-7.674 3.837 3.837 0 0 1 0 7.674zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Name + role */}
            <div
              className="text-center mt-4"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={index * 150 + 200}
            >
              <h3 className="font-black text-lg text-[#0d2b26] uppercase tracking-wide">
                {member.name}
              </h3>

              <p className="text-gray-500 text-sm mt-0.5">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
