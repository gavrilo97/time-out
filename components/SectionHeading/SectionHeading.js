const SIZES = {
  lg: { text: "text-3xl sm:text-4xl", tick: "h-[0.7em] w-1.5 mr-2.5" },
  sm: { text: "text-2xl", tick: "h-[0.65em] w-1 mr-2" },
};

const SectionHeading = ({ title, kicker, as: Tag = "h2", size = "lg", rule = true }) => {
  const { text, tick } = SIZES[size];

  return (
    <div className="flex w-full items-end gap-4 pb-1">
      <div className="flex flex-col gap-1.5">
        {kicker ? <span className="kicker text-volt-deep">{kicker}</span> : null}
        <Tag className={`display text-primary ${text}`}>
          <span className={`inline-block translate-y-[0.02em] bg-volt align-baseline ${tick}`} />
          {title}
        </Tag>
      </div>
      {rule ? <span className="mb-2.5 h-px flex-1 bg-grayBase" /> : null}
    </div>
  );
};

export default SectionHeading;
