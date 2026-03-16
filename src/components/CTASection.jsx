const ctaSection = {
  label: "Label",

  titleStart: "Mandatory title about the",
  titleAccent: "call-to-action",
  titleEnd: "here",

  body: "Optional body copy goes here.",

  button: {
    label: "Optional button",
    href: "#",
  },

  cards: [
    {
      title: "Title",
      description: "Supporting text about the call-to-action goes here.",
      image: "/images/cta-image.jpg",
      href: "#",
    },
    {
      title: "Title",
      description: "Supporting text about the call-to-action goes here.",
      image: "/images/cta-image.jpg",
      href: "#",
    },
  ],
};

export default function CTASection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[1440px] px-16 pt-16 pb-24">
        <div className="flex flex-col items-center gap-20">
          
          {/* bovenste intro */}
          <div className="flex h-[217px] w-[864px] flex-col items-center gap-6">
            <div className="flex h-[121px] w-[642px] flex-col items-center gap-2">
              <p
                className="h-4 w-[642px] text-center text-[15px] leading-4 tracking-[0.02em] text-[#1f1f1f]"
                style={{ fontFamily: "TTCommons", fontWeight: 450 }}
              >
                {ctaSection.label}
              </p>

              <h2 className="h-[97px] w-[642px] text-center text-[40px] leading-[48px] tracking-[-0.03em] text-[#1f1f1f]">
                <span style={{ fontFamily: "TTCommons", fontWeight: 600 }}>
                  {ctaSection.titleStart}
                </span>
                <br />
                <span style={{ fontFamily: "GTAlpina", fontWeight: 400 }}>
                  {ctaSection.titleAccent}
                </span>
                <span style={{ fontFamily: "TTCommons", fontWeight: 600 }}>
                  {" "}{ctaSection.titleEnd}
                </span>
              </h2>
            </div>

            <p
              className="h-6 w-[864px] text-center text-[19px] leading-6 text-[#1f1f1f]/80"
              style={{ fontFamily: "TTCommons", fontWeight: 450 }}
            >
              {ctaSection.body}
            </p>

            <a
              href={ctaSection.button.href}
              className="flex h-6 items-center gap-1 text-[#d46f5d]"
              style={{ fontFamily: "TTCommons", fontWeight: 450 }}
            >
            <span className="text-[19px] leading-6">
              {ctaSection.button.label}
            </span>

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d46f5d"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="6" y1="12" x2="18" y2="12" />
              <polyline points="12 6 18 12 12 18" />
            </svg>
          </a>
          </div>

          {/* image cards */}
          <div className="flex w-[1312px] gap-6">
            {ctaSection.cards.map((card, index) => (
              <a
                key={`${card.title}-${index}`}
                href={card.href}
                className="relative block h-[515px] w-[644px] overflow-hidden rounded-[4px]"
              >
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover"
              />

            {/* gradient */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-[257.5px] w-full bg-gradient-to-t from-[#141414]/80 to-transparent" />

            {/* content */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">

          <div className="flex flex-col gap-2 text-white">
            <h3
            className="text-[28px] leading-[32px] tracking-[-0.02em]"
            style={{ fontFamily: "TTCommons", fontWeight: 600 }}
            >
            {card.title}
          </h3>

          <p
            className="text-[19px] leading-[24px] text-white/50"
            style={{ fontFamily: "TTCommons", fontWeight: 450 }}
          >
          {card.description}
          </p>
          </div>

          {/* arrow button */}
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[4px] border-2 border-white/30">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
                <line x1="6" y1="12" x2="18" y2="12" />
              <polyline points="12 6 18 12 12 18" />
            </svg>
          </div>

          </div>
          </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}