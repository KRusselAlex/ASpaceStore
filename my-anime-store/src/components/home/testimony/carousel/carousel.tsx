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
import TestimonialCard from "../card/card"; // Import the DressCard component

interface Testimonial {
  name: string;
  title: string;
  text: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    title: "CEO of Company",
    text: "This is the best service I've ever used. It really transformed our business.",
    image: "/profile.png", // Ensure image exists at the specified path
    rating: 4,
  },
  {
    name: "John Doe",
    title: "CEO of Company",
    text: "This is the best service I've ever used. It really transformed our business.",
    image: "/profile.png", // Ensure image exists at the specified path
    rating: 5,
  },
  {
    name: "John Doe",
    title: "CEO of Company",
    text: "This is the best service I've ever used. It really transformed our business.",
    image: "/profile.png", // Ensure image exists at the specified path
    rating: 3,
  },
  {
    name: "John Doe",
    title: "CEO of Company",
    text: "This is the best service I've ever used. It really transformed our business.",
    image: "/profile.png", // Ensure image exists at the specified path
    rating: 5,
  },
  {
    name: "Jane Smith",
    title: "Product Manager",
    text: "Incredible experience. The support team is very responsive, and the product is top-notch.",
    image: "/profile.png", // Ensure image exists at the specified path
    rating: 1,
  },
  {
    name: "Sam Wilson",
    title: "Software Engineer",
    text: "I highly recommend this to anyone looking to scale their product quickly and efficiently.",
    image: "/profile.png", // Ensure image exists at the specified path
    rating: 4,
  },
];

export default function CarouselTestimonial() {
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
    <div className="relative w-full max-w-6xl mx-auto px-2">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="px-0">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3  py-2"
            >
              <TestimonialCard
                image={testimonial.image}
                title={testimonial.title}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="hidden lg:block ">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
