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

const sectionClass = `
  w-full bg-white
`

const containerClass = `
  mx-auto w-full max-w-[1440px]

  px-5
  pt-12 pb-16

  md:px-8
  md:pt-12 md:pb-16

  lg:px-16
  lg:pt-16 lg:pb-24
`

const layoutClass = `
  flex flex-col items-center
  gap-8
  md:gap-14
  lg:gap-20
`

const cardsGridClass = `
  grid w-full max-w-[1312px]
  grid-cols-1 gap-4
  md:grid-cols-2 md:gap-6
`

export default function CTASection() {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className={layoutClass}>
          <CTAHeader section={ctaSection} />

          <div className={cardsGridClass}>
            {ctaSection.cards.map((card, index) => (
              <CTACard key={`${card.title}-${index}`} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}