import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Image from "next/image";
// import catana from "@/assets/cartana.jpg";

export default function CarouselProduct() {
  return (
    <Carousel className="w-full max-w-4xl">
      {/* Adjust max-w to fit 4 cards */}
      <CarouselContent>
        {Array.from({ length: 12 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/4">
            {/* Display 4 items per slide on medium screens and up */}
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center  p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
