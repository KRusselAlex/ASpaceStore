"use client";
import * as React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DressCard from "@/components/card/card"; // Import the DressCard component

const dresses = [
  {
    imageUrl: "/cartana.jpg",
    title: "Elegant Evening Gown",
    price: "$199.99",
  },
  {
    imageUrl: "/anim.jpg",
    title: "Elegant Evening Gown",
    price: "$199.99",
  },
  {
    imageUrl: "/cartana.jpg",
    title: "Elegant Evening Gown",
    price: "$199.99",
  },
  {
    imageUrl: "/anim.jpg",
    title: "Summer Floral Dress",
    price: "$89.99",
  },
  {
    imageUrl: "/cartana.jpg",
    title: "Classic Black Dress",
    price: "$129.99",
  },
  // Add more dresses as needed
];

export default function CarouselProduct() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // Automatically change slide every 5 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="px-3">
          {dresses.map((dress, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/4 px-1"
            >
              <DressCard
                imageUrl={dress.imageUrl}
                title={dress.title}
                price={dress.price}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
          <CarouselPrevious className="pointer-events-auto bg-white/80 hover:bg-white/90 rounded-full p-2 shadow-lg transform -translate-x-4" />
          <CarouselNext className="pointer-events-auto bg-white/80 hover:bg-white/90 rounded-full p-2 shadow-lg transform translate-x-4" />
        </div>
      </Carousel>
    </div>
  );
}
