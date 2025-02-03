import React from "react";
import "./style.css";

interface CardServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: string; // Optional prop for icon color
}

const CardServices: React.FC<CardServiceProps> = ({
  icon,
  title,
  description,
  iconColor = "text-green-500",
}) => {
  return (
    <div className="cardSection bg-fourthly flex flex-col text-textColor justify-center md:justify-start gap-2 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
      <div
        className={`${iconColor} mb-4 w-full flex justify-center md:justify-start`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-center md:text-start  mb-2">
        {title}
      </h3>
      <p className="text-center md:text-start">{description}</p>
    </div>
  );
};

export default CardServices;
