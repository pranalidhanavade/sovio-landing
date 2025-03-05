import Link from "next/link";

const CtaSection = () => {
  const buttonClass =
    "inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-900 focus:ring-4";
  return (
    <section id="cta-section">
      <div
        id="cta-bg"
        className="bg-primary-600 bg-cover bg-center p-4 py-10 md:py-12"
      >
        <div id="cta-content" className="mx-auto max-w-screen-xl">
          <div
            id="cta-container"
            className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12"
          >
            <div
              id="cta-header"
              className="flex max-w-3xl flex-col items-center justify-center gap-4"
            >
              <h2
                id="cta-title"
                className="text-center text-2xl font-extrabold tracking-tight text-gray-900 lg:text-2xl"
              >
                Build, Scale, and Secure Your Digital Identity Solutions
                Effortlessly
              </h2>
              <p
                id="cta-description"
                className="text-lg max-w-sm text-gray-900 text-center"
              >
                Schedule a personalized demo or get in touch with our team to
                learn more.
              </p>
            </div>

            <div id="cta-buttons" className="justify-center flex space-x-9">
              <Link
                href={`${process.env.NEXT_REQUEST_DEMO_URL}`}
                id="demo-button"
                target="_blank"
                className={buttonClass}
              >
                Request a demo
              </Link>
              <Link
                href={`${process.env.NEXT_TALK_TO_US_URL}`}
                id="contact-button"
                className={buttonClass}
                target="_blank"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
