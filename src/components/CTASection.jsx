export default function CTASection() {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        <article className="rounded-3xl bg-neutral-100 p-8 md:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Start your project
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            Tell us about your project and we’ll help you get started.
          </p>

          <button className="mt-6 rounded-full border border-neutral-900 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white">
            Get started
          </button>
        </article>

        <article className="rounded-3xl bg-neutral-200 p-8 md:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            View our work
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            Explore recent projects and see what we build.
          </p>

          <button className="mt-6 rounded-full border border-neutral-900 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white">
            See cases
          </button>
        </article>
      </div>
    </section>
  )
}