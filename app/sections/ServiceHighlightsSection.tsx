import { baseImagePath, servicesData } from "@/utils/Constants";
import Image from "next/image";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  altText: string;
}

const ServiceCard = ({
  id,
  title,
  description,
  imgSrc,
  altText,
}: ServiceCardProps) => (
  <div
    id={id}
    className="mt-8 max-w-sm rounded-lg shadow-lg overflow-hidden bg-white h-[244px] flex flex-col"
  >
    <div className="p-6 flex-grow">
      <div className="flex justify-start mb-4">
        <div className="flex justify-center items-center">
          <Image src={imgSrc} width={52} height={52} alt={altText} style={{ width: 'auto', height: 'auto' }} />
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  </div>
);



const ServicesSection = () => {
  return (
    <section
      id="services-section"
      className="bg-white bg-no-repeat bg-cover bg-center pt-4 pb-12 sm:pb-16 md:pb-12 flex justify-center items-center"
      style={{ backgroundImage: `url(${baseImagePath}/gray_bg_img.svg)` }}
    >
      <div
        id="content-container"
        className="w-full max-w-[1500px] h-auto gap-10 md:gap-[70px] px-4 sm:px-6 md:px-12 lg:px-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service}/>
          ))}

          <div
            id="card-7-content"
            className="flex col-span-1 lg:col-start-2 sm:justify-start md:justify-center md:mr-9"
          >
            <div className="mt-8 max-w-sm rounded-lg shadow-lg overflow-hidden bg-white h-[244px] flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex justify-start mb-4">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-100">
                    <Image
                      src={`${baseImagePath}/privacy_icon.svg`}
                      width={52}
                      height={52}
                      alt="regulatory_compliance_icon"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Regulatory Compliance
                  </h3>
                  <p className="text-gray-600">
                    Supports DPDP and other evolving privacy regulations.
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

export default ServicesSection;
