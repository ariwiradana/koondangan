import Image from "next/image";
import React from "react";
import Title from "../../elements/title";

const persons = [
  "Ayu Vrindha Widina",
  "Ni Kadek Noviana Nita Putri",
  "I Wayan Kusuma Adinata",
];

const Persons = () => {
  return (
    <div className="px-5 pb-24 pt-16 bg-[url('/images/wave-pattern.png')] bg-center bg-no-repeat bg-cover">
      <div data-aos-duration="2000" data-aos="fade-up">
        <div className="flex justify-center transform rotate-45 translate-y-2">
          <Image
            alt="flower-top"
            src="/images/flower-1.png"
            width={80}
            height={80}
          />
        </div>
      </div>

      <Title
        dataAosDuration="2000"
        dataAosDelay="200"
        dataAos="fade-up"
        title="Om Swastyastu"
        extendClass="uppercase"
      />
      <p
        data-aos-duration="2000"
        data-aos="fade-up"
        data-aos-delay="400"
        className="mt-5 text-center text-base font-public-sans text-dark leading-6 max-w-screen-md mx-auto"
      >
        Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha
        Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara Manusa
        Yadnya Mepandes (Potong Gigi) putra-putri kami.
      </p>
      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        data-aos-delay="600"
        className="flex flex-col gap-y-4 items-center mt-8"
      >
        {persons?.map((person) => (
          <h5
            key={person}
            className="text-lg font-public-sans font-medium text-primary"
          >
            {person}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default Persons;
