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
    <section className="w-full">
      <div className="mx-auto w-[1440px] px-16 pt-16 pb-24">
        <div className="flex flex-col items-center gap-20">
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
              {" "} {ctaSection.titleEnd}
                </span>
              </h2>
            </div>

            <p
              className="h-6 w-[864px] text-center text-[19px] leading-6 tracking-[0em] text-[#1f1f1f]/80"
              style={{ fontFamily: "TTCommons", fontWeight: 450 }}
            >
              {ctaSection.body}
            </p>

            <a
              href={ctaSection.button.href}
              className="flex h-6 w-[158px] items-center justify-center gap-1 rounded-[26px] text-[#d46f5d]"
              style={{ fontFamily: "TTCommons", fontWeight: 450 }}
            >
              <span className="text-[19px] leading-6">
                {ctaSection.button.label}
              </span>
              <span aria-hidden="true" className="text-[19px] leading-6">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}