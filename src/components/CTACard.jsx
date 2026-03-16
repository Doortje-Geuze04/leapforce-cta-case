export default function CTACard({ card, index }) {
  return (
    <a
      key={`${card.title}-${index}`}
      href={card.href}
      className="relative block h-[252px] w-full overflow-hidden rounded-[4px] md:h-[420px] lg:h-[515px]"
    >
      <img
        src={card.image}
        alt={card.title}
        className="h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#141414]/80 to-transparent" />

      <div className="absolute bottom-6 left-4 right-4 flex items-end justify-between md:bottom-6 md:left-6 md:right-6">
        <div className="flex flex-col gap-2 text-white">
          <h3
            className="text-[18px] leading-[22px] tracking-[-0.02em] md:text-[22px] md:leading-[26px] lg:text-[28px] lg:leading-[32px]"
            style={{ fontFamily: "TTCommons", fontWeight: 600 }}
          >
            {card.title}
          </h3>

          <p
            className="max-w-[200px] text-[12px] leading-[16px] text-white/50 md:max-w-[260px] md:text-[14px] md:leading-[18px] lg:max-w-[508px] lg:text-[19px] lg:leading-[24px]"
            style={{ fontFamily: "TTCommons", fontWeight: 450 }}
          >
            {card.description}
          </p>
        </div>

        <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[4px] border-2 border-white/30 hover:border-white/50 transition-colors duration-200 md:h-[48px] md:w-[48px] lg:h-[56px] lg:w-[56px]">
          <svg
            className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
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
  )
}