import Title from "./Title";

export default function AboutCompany() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-xl ml-6">
            <img
              src="assets/1.jpg"
              alt="Team discussing sales results"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <Title
            align="left"
            subtitle="About Company"
            title={
              <>
                We Committed To Helping You
                <br />
                Achieve Your Goals
              </>
            }
          />
          <p className="text-gray-500 leading-relaxed mb-8 max-w-lg mt-6">
            At the core of our ethos lies a dedication to our clients. Your
            success is our shared triumph, and we're unwavering in our
            commitment to delivering exceptional,
          </p>
          <button className="bg-[#0d2b26] text-white uppercase font-bold text-sm tracking-wide px-8 py-4 rounded-lg hover:bg-[#F75709] transition-colors duration-300">
            Let's Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
