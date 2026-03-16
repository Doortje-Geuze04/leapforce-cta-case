const ctaBlocks = [
  {
    title: "Start your project",
    description: "Tell us about your project and we’ll help you get started.",
    buttonLabel: "Get started",
    href: "#",
  },
  {
    title: "View our work",
    description: "Explore recent projects and see what we build.",
    buttonLabel: "See cases",
    href: "#",
  },
]

export default function CTASection() {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {ctaBlocks.map((block) => (
          <article
            key={block.title}
            className="rounded-3xl bg-neutral-100 p-8 md:p-10"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
              {block.title}
            </h2>

            <p className="mt-4 text-base leading-7 text-neutral-600">
              {block.description}
            </p>

            <a
              href={block.href}
              className="mt-6 inline-block rounded-full border border-neutral-900 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
            >
              {block.buttonLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}