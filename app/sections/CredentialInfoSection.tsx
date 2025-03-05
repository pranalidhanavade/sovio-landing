"use client";
import { baseImagePath } from "@/utils/Constants";
import Image from "next/image";

interface CredentialInfo {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  imageAlt: string;
  reverse: boolean;
}

const cardData = [
  {
    id: "credential-management",
    title: "Streamlined Credential Management",
    description:
      "Effortlessly define and tailor credentials with our user-friendly schema template. Customize credentials for employees, customers, students, citizens, or any user, incorporating detailed schema information and intuitive controls for seamless management.",
    imgSrc: `${baseImagePath}/credential_management.svg`,
    imageAlt: "credential-management-interface",
    reverse: false,
  },
  {
    id: "wallet-integration",
    title: "One wallet for all your verifiable digital credentials",
    description:
      "Streamline your identity & credentials effortlessly through advanced cryptography. From academic achievements to professional certifications, government identities / licenses / permits / certificates, event tickets, enterprise identities & certificates, and personal milestones. It is built using privacy-respecting W3C DID & VC standard and Hyperledger Aries RFCs.",
    imgSrc: `${baseImagePath}/one_wallet.svg`,
    imageAlt: "digital-wallet-interface",
    reverse: true,
  },
  {
    id: "selective-sharing",
    title: "Selectively share data from your credentials",
    description:
      "Instantly share the verifiable proof of your digital credential certificates. Empower your identity with selective (partial) disclosure on our SSI mobile wallet. Seamlessly present only the data you choose with confidence. Alternatively, you can share your personal milestones (e.g., achievements in sports) on social media directly.",
    imgSrc: `${baseImagePath}/selective_data_share.svg`,
    imageAlt: "selective-data-sharing",
    reverse: false,
  },
];

const CredentialInfoCard = ({
  id,
  title,
  description,
  imgSrc,
  imageAlt,
  reverse,
}: CredentialInfo) => (
  <div
    id={id}
    className={`flex items-center gap-20 rounded-lg flex-col md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className="relative">
      <Image
        src={imgSrc}
        alt={imageAlt}
        width={344}
        height={344}
        className="m-6"
      />
    </div>
    <div className="flex flex-col gap-2 w-2/3">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

const CredentialInfoSection = () => {
  return (
    <section
      id="credential-info-section"
      className="bg-[#fafbfb] bg-no-repeat bg-cover bg-center
       pt-4 flex justify-center items-center"
    >
      <div className="w-[1014px] mb-8 pr-3 pl-3 gap-6 md:m-6">
        {cardData.map((card) => (
          <CredentialInfoCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CredentialInfoSection;
