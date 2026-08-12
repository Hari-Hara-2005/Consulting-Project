import Navbar from "./Navbar";

export default function PageTitleBanner({ title, breadcrumbs }) {
  return (
    <section className="relative bg-[#0d2b26] px-6 overflow-hidden min-h-[60vh] py-10 flex flex-col">
      <Navbar />

      {/* fills remaining space below navbar, centers title + breadcrumb */}
      <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
        <h1 className="font-black text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-wide mb-6">
          {title}
        </h1>

        <nav aria-label="breadcrumb">
          <ol className="flex items-center justify-center gap-2 text-base">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-4 h-4 text-[#a9d18e]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
                {crumb.active ? (
                  <span className="text-[#a9d18e] font-medium">
                    {crumb.label}
                  </span>
                ) : (
                  <a
                    href={crumb.href}
                    className="text-white hover:text-[#a9d18e] transition-colors duration-300"
                  >
                    {crumb.label}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
