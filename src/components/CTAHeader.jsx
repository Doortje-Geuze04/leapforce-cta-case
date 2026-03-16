export default function CTAHeader({ section }) {
  return (
    <div className="flex w-full max-w-[864px] flex-col items-center gap-4 md:gap-5 lg:gap-6">
      <div className="flex w-full max-w-[335px] flex-col items-center gap-2 md:max-w-[642px]">
        <p
          className="w-full text-center text-[12px] leading-[14px] tracking-[0.02em] text-[#1f1f1f] md:text-[13px] md:leading-[15px] lg:text-[15px] lg:leading-4"
          style={{ fontFamily: "TTCommons", fontWeight: 450 }}
        >
          {section.label}
        </p>

        <h2 className="w-full text-center text-[28px] leading-[38px] tracking-[-0.03em] text-[#1f1f1f] md:max-w-[642px] md:text-[32px] md:leading-[38px] lg:text-[40px] lg:leading-[48px]">
          <span className="md:hidden">
            <span style={{ fontFamily: "TTCommons", fontWeight: 600 }}>
              Mandatory title
            </span>
            <br />
            <span style={{ fontFamily: "TTCommons", fontWeight: 600 }}>
              about the{" "}
            </span>
            <span style={{ fontFamily: "GTAlpina", fontWeight: 400 }}>
              call-to-
            </span>
            <br />
            <span style={{ fontFamily: "GTAlpina", fontWeight: 400 }}>
              action
            </span>
            <span style={{ fontFamily: "TTCommons", fontWeight: 600 }}>
              {" "}here
            </span>
          </span>

          <span className="hidden md:inline">
            <span style={{ fontFamily: "TTCommons", fontWeight: 600 }}>
              {section.titleStart}
            </span>
            <br />
            <span style={{ fontFamily: "GTAlpina", fontWeight: 400 }}>
              {section.titleAccent}
            </span>
            <span style={{ fontFamily: "TTCommons", fontWeight: 600 }}>
              {" "}{section.titleEnd}
            </span>
          </span>
        </h2>
      </div>

      <p
        className="w-full max-w-[864px] text-center text-[14px] leading-[20px] text-[#1E2526] md:text-[16px] md:leading-[22px] lg:text-[19px] lg:leading-6"
        style={{ fontFamily: "TTCommons", fontWeight: 450 }}
      >
        {section.body}
      </p>

      <a
        href={section.button.href}
        className="flex items-center gap-1 leading-none text-[#BF564D] hover:text-[#A6433A] transition-colors duration-200"
        style={{ fontFamily: "TTCommons", fontWeight: 450 }}
      >
        <span className="text-[14px] leading-[18px] md:text-[17px] md:leading-6 lg:text-[19px] lg:leading-6">
          {section.button.label}
        </span>

        <svg
          className="mt-[1px] h-[14px] w-[14px] md:h-4 md:w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="6" y1="12" x2="18" y2="12" />
          <polyline points="12 6 18 12 12 18" />
        </svg>
      </a>
    </div>
  )
}