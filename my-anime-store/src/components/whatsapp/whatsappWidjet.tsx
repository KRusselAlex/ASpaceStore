"use client";

import CustomButton from "@/components/button/button";


const content = {
  title:
    "Your Anime Adventure Starts Here: Top-Tier Accessories & Manga for Every Fan!",

  buttonText: "Start Now",
};

export default function WhatsappWidjet() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col gap-12 w-full md:w-2/3    justify-center items-center  min-h-screen">
       
        <div className="flex justify-center">
          <CustomButton
           
            className="bg-fourthly text-textColor hover:bg-white"
          >
            {content.buttonText}
          </CustomButton>
        </div>
      </div>
    </main>
  );
}
