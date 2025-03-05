"use client";
import { baseImagePath, questionAnswerArray } from '@/utils/Constants';
import Image from 'next/image';
import { useState } from 'react';

const FrequentlyAskedQueSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="frequently-asked-que-section"
      className="bg-white bg-no-repeat bg-cover bg-center md:pb-24 pt-4 flex justify-center items-center"
      style={{ backgroundImage: `url(${baseImagePath}/gray_bg_img.svg)` }}
    >
      <div className="w-full max-w-[1320px] ml-4 mr-4 h-auto flex flex-col gap-6 xs:p-6">
        <h1 className="md:mb-4 md:text-center mt-16 md:flex md:justify-start font-extrabold tracking-tight leading-none text-gray-900 lg:text-4xl md:text-xl sm:text-sm lg:max-w-[736px] md:max-w-[430px] sm:max-w-[365px]">
          Frequently Asked Questions
        </h1>

        <div className="w-full bg-white shadow-[-16px_-16px_40px_rgba(0,0,0,0.2)]">
          <div id="accordion-collapse" data-accordion="collapse">
            {questionAnswerArray.map((item, index) => (
              <div key={index}>
                <h2 id={`accordion-collapse-heading-${index}`}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h4 className="text-xl font-bold text-gray-800">{`${index + 1}. ${item.question}`}</h4>
                    <Image
                      className="accordion-icon"
                      src={activeIndex === index ? `${baseImagePath}/minus.svg` : `${baseImagePath}/plus.svg`}
                      alt="Toggle"
                      width={32}
                      height={32}
                      style={{ width: 'auto', height: 'auto' }}
                      />
                  </button>
                </h2>

                <div
                  id={`accordion-collapse-body-${index}`}
                  className={activeIndex === index ? '' : 'hidden'}
                  aria-labelledby={`accordion-collapse-heading-${index}`}
                >
                  <div className="p-5 border border-b-0 border-gray-200">
                    <p className="mb-2 text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQueSection;
