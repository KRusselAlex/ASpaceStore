import React from "react";
import {
  FaTshirt,
  FaStore,
  FaHeadphonesAlt,
  FaShippingFast,
} from "react-icons/fa";
import CardServices from "./card/card"; // Ensure correct path

const services = [
  {
    icon: <FaTshirt size={40} />,
    title: "Anime Streetwear",
    description:
      "Level up your wardrobe with bold, anime-inspired street fashion designed for true fans.",
    iconColor: "text-green-500",
  },
  {
    icon: <FaStore size={40} />,
    title: "Exclusive Anime Accessories",
    description:
      "From headbands to hoodies, express your fandom with accessories that complete your style.",
    iconColor: "text-yellow-500",
  },
  {
    icon: <FaHeadphonesAlt size={40} />,
    title: "We’re Here for You",
    description:
      "Got a question? Our support team is always ready to help—day or night!",
    iconColor: "text-blue-500",
  },
  {
    icon: <FaShippingFast size={40} />,
    title: "Lightning-Fast Shipping",
    description:
      "Get your anime gear delivered quickly and securely, so you can flex your style ASAP.",
    iconColor: "text-red-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-primary py-20 px-2 sm:px-16">
      <div className="flex flex-col lg:flex-row gap-16 mx-auto text-center">
        <div className="lg:w-1/3  text-white text-center lg:text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            A&apos;Space: Elevate Your Streetwear with Anime Vibes
          </h2>
          <p className="text-base">
            Step into a world where anime meets street fashion! At A&apos;Space,
            we craft bold, high-quality apparel that lets you wear your fandom
            with pride. From exclusive anime-inspired designs to urban styles
            that stand out, our collection is made for true fans and
            trendsetters alike.
          </p>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2  gap-8">
          {services.map((service, index) => (
            <CardServices
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconColor={service.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
