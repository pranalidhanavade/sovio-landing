import { baseImagePath } from "@/utils/Constants";
import Image from "next/image";
import React, { ReactNode } from "react";

interface InfoCardProps {
  id: string;
  title: ReactNode;
  details: string[];
  imgSrc: string;
}

const InfoCard = ({ id, title, details, imgSrc }: InfoCardProps) => (
  <div id={id} className="mt-2 max-w-lg rounded-lg shadow-lg overflow-hidden bg-white h-[220px] flex flex-col relative">
    <div className="relative px-4 py-4 bg-white rounded-xl shadow-sm border h-[220px] border-gray-100 overflow-hidden">
      <Image
        src={imgSrc}
        width={28}
        height={32}
        alt="icon"
        className="absolute top-0 right-0 w-52 -mt-6 h-full"
      />
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
          {title}
        </h3>
        <div className="space-y-2 text-gray-700">
          {details.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => {
  const infoCardsData = [
    {
      id: "open-source-card",
      title: (
        <span>
          Open Standards <br /> & Open Source
        </span>
      ),
      details: [
        "Built upon open standards of W3C",
        "Decentralized Identifiers, Verifiable",
        "Credentials, DIF Protocols & Hyperledger Aries.",
      ],
      imgSrc: `${baseImagePath}/resolution_img.svg`,
    },
    {
      id: "multiple-credential-card",
      title: (
        <span>
          Multiple Credential <br /> Exchange Formats
        </span>
      ),
      details: [
        "Supports multiple verifiable credential",
        "exchange formats such as AnonCreds",
        "JSON-LD, JWT, etc",
      ],
      imgSrc: `${baseImagePath}/resolution_img.svg`,
    },
    {
      id: "ledger-info-card",
      title: (
        <span>
          Ledger-agnostic & <br /> Ledger Less
        </span>
      ),
      details: [
        "Supports multiple ledgers such as Indy,",
        "Cheqd, Polygon. Also issue ledger-less",
        "VCs using did methods like did:web, did:peer, did:key.",
      ],
      imgSrc: `${baseImagePath}/resolution_img.svg`,
    },
    {
      id: "cloud-infra-card",
      title: (
        <span>
          Self-Host on Your <br /> Cloud Infra
        </span>
      ),
      details: [
        "You can self-host the entire Sovio",
        "platform and its components on your",
        "organization's cloud infrastructure of choice.",
      ],
      imgSrc: `${baseImagePath}/resolution_img.svg`,
    },
  ];

  return (
    <section
      className="bg-white bg-no-repeat bg-cover bg-center md:pb-24 pt-16 flex justify-center items-center"
      style={{
        backgroundImage: `url(${baseImagePath}/sovio_features_bg_img.svg)`,
      }}
    >
      <div className="w-full md:max-w-6xl px-8">
        <h2 className="mb-4 text-2xl lg:text-3xl tracking-tight leading-tight text-center font-extrabold text-gray-900">
          Why Sovio?
        </h2>

        <h4 className="mb-4 text-lg lg:text-xl tracking-tight leading-tight text-center font-extrabold text-gray-900">
          Built on Trusted Global Standards
        </h4>

        <p className="text-gray-600 sm:text-xl text-center">
          Leverage industry-leading technologies to build secure, scalable
          digital ecosystems:
        </p>

        <br />

        <span className="flex justify-center text-center text-gray-600 sm:text-xl">
          W3C Decentralized Identifiers (DID)
        </span>
        <span className="flex pb-8 justify-center text-center text-gray-600 sm:text-xl">
          Verifiable Credentials (VC)
        </span>

        <div className="md:grid md:grid-cols-2 gap-12">
          {infoCardsData.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}

          <div
            id="enterprise-card"
            className="mt-2 md:w-[524px] max-w-sm sm:max-w-md md:max-w-sm lg:max-w-xl rounded-lg shadow-lg overflow-hidden bg-white h-[228px] flex flex-col col-span-2 relative mx-auto"
          >
            <div
              id="enterprise-card-container"
              className="relative px-4 py-4 sm:px-6 md:px-4 h-[228px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <Image
                src={`${baseImagePath}/resolution_img.svg`}
                alt="resolution_image"
                width={64}
                height={64}
                className="absolute top-0 right-0 w-52 -mt-6 h-full"
              />
              <div id="enterprise-card-content" className="relative z-10">
                <h3
                  id="enterprise-card-title"
                  className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mb-4"
                >
                  Enterprise Grade,
                  <br />
                  Large Scale
                </h3>
                <div
                  id="enterprise-card-details"
                  className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base"
                >
                  <p id="enterprise-card-detail-1">
                    Built for large scale using highly
                  </p>
                  <p id="enterprise-card-detail-2">
                    scalable micro-services architecture,
                  </p>
                  <p id="enterprise-card-detail-3">
                    and asynchronous message-driven communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
