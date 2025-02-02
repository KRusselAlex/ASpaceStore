"use client";

import CarouselSection from "@/components/home/newProduct/carouselProduct/carouselProduct";

const images = ["/pink.jpg", "/pink.jpg", "/pink.jpg"];
const content = {
  title: "Category Of Product",
  description: "Here we show our variety of accesosires.",
};

export default function NewProductSection() {
  return (
    <div className="h-full">
      <CarouselSection images={images}>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl mt-4 text-center">
            {content.description}
          </p>
        </div>
      </CarouselSection>
    </div>
  );
}
