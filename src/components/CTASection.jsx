import CTAHeader from "./CTAHeader"
import CTACard from "./CTACard"

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
}

export default function CTASection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-12 pb-16 md:px-8 md:pt-12 md:pb-16 lg:px-16 lg:pt-16 lg:pb-24">
        <div className="flex flex-col items-center gap-8 md:gap-14 lg:gap-20">
          <CTAHeader section={ctaSection} />

          <div className="grid w-full max-w-[1312px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {ctaSection.cards.map((card, index) => (
              <CTACard key={`${card.title}-${index}`} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}