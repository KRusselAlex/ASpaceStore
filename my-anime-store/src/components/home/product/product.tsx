import CarouselProduct from "@/components/carousel/carousel";

export default function ProductSection() {
  return (
    <section className="flex justify-center px-3 py-6 md:py-10 lg:py-20   bg-fourthly">
      <div className="border-b border-gray-300 pb-20 w-full">
        <CarouselProduct />
      </div>
    </section>
  );
}
