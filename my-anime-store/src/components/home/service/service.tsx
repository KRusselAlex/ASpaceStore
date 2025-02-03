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
    title: "Clothing Collection",
    description:
      "Discover a wide range of stylish and comfortable clothing for every occasion.",
    iconColor: "text-green-500",
  },
  {
    icon: <FaStore size={40} />,
    title: "Anime Accessories",
    description:
      "Complete your look with unique anime-themed accessories. From cosplay to casual wear!",
    iconColor: "text-yellow-500",
  },
  {
    icon: <FaHeadphonesAlt size={40} />,
    title: "24/7 Customer Support",
    description:
      "Our team is always ready to assist you with any queries or concerns you may have.",
    iconColor: "text-blue-500",
  },
  {
    icon: <FaShippingFast size={40} />,
    title: "Fast & Reliable Shipping",
    description:
      "Enjoy fast and reliable delivery to your doorstep with our trusted shipping partners.",
    iconColor: "text-red-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-primary py-20 px-2 sm:px-16">
      <div className="flex flex-col lg:flex-row gap-16 mx-auto text-center">
        <div className="lg:w-1/3  text-white text-center lg:text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            A&apos;Space Services: Where Your Style Comes to Life
          </h2>
          <p className="text-base">
            At A&apos;Space, we bring your creative vision to life! Whether
            you&apos;re looking for one-of-a-kind clothing that reflects your
            personal style or unique anime accessories that showcase your
            fandom, we&apos;ve got you covered. Our services are designed to
            offer you the best in customization and quality.
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
