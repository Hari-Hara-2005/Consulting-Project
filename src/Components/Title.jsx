export default function Title({
  subtitle,
  title,
  align = "center",
  subtitleColor = "#f36f21",
  titleColor = "#073b38",
}) {
  const alignment = {
    left: {
      container: "items-start text-left",
      title: "text-left",
      circle: "left-0",
    },
    center: {
      container: "items-center text-center",
      title: "text-center",
      circle: "left-[10%]",
    },
    right: {
      container: "items-end text-right",
      title: "text-right",
      circle: "right-0",
    },
  };

  const currentAlignment = alignment[align] || alignment.center;

  return (
    <div
      className={`
        relative
        flex
        flex-col
        px-4
        ${currentAlignment.container}
      `}
    >
      {/* Subtitle */}
      <span
        className="
          mb-3
          text-sm
          font-extrabold
          uppercase
          tracking-wide
        "
        style={{ color: subtitleColor }}
      >
        {subtitle}
      </span>

      {/* Title */}
      <h2
        className={`
          max-w-[750px]
          text-[23px]
          font-black
          uppercase
          leading-[1.05]
          tracking-[-0.02em]
          sm:text-[52px]
          md:text-[62px]
          ${currentAlignment.title}
        `}
        style={{ color: titleColor }}
      >
        {title}
      </h2>
    </div>
  );
}
