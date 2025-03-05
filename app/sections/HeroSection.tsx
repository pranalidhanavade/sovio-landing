import { baseImagePath } from "@/utils/Constants";
import Link from "next/link";

const HeroSection = () => {
  const referenceLinkClass =
    "inline-flex justify-center items-center py-3 px-6 text-sm sm:text-base font-medium text-gray-900 rounded-lg bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 transition duration-300";

  return (
    <section
      id="hero-section"
      className="bg-white bg-no-repeat bg-cover bg-center lg:pb-56"
      style={{ backgroundImage: `url(${baseImagePath}/yellow_line_bg.svg)` }}
    >
      {" "}
      <div
        id="hero-grid"
        className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12"
      >
        <div id="hero-content" className="col-span-2">
          <div
            id="hero-text-container"
            className="py-8 md:py-12 lg:py-16 flex items-center flex-col text-center"
          >
            <h1
              id="hero-title"
              className="mb-6 font-extrabold tracking-tight leading-tight text-gray-900 sm:text-2xl md:text-4xl max-w-[90%] md:max-w-[80%] lg:mx-[250px]"
            >
              Build Decentralized Identity Solutions Faster - For Population
              Scale.
            </h1>

            <p
              id="hero-description"
              className="mt-4 mb-8 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-[95%] md:max-w-[80%] lg:max-w-[780px]"
            >
              Sovio helps you quickly create Decentralized Identity (SSI)
              solutions by eliminating the complexities of building them from
              the ground up.
            </p>

            <div
              id="cta-buttons"
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >

              {/* Currently not in use, but kept commented for potential future implementation. */}
              {/* <Link
                id="start-free-link"
                href="/"
                className={referenceLinkClass}
              >
                Start for Free
              </Link> */} 

              <Link
                id="request-demo-link"
                href={`${process.env.NEXT_REQUEST_DEMO_URL}`}
                className={referenceLinkClass}
                target="_blank"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
