import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Elegant Dress",
    category: "Dresses",
    price: 50,
    date: "2024-01-01",
    image: "/cartana.jpg",
  },
  {
    id: 2,
    name: "Anime Keychain",
    category: "Anime Accessories",
    price: 10,
    date: "2024-01-05",
    image: "/cartana.jpg",
  },
  {
    id: 3,
    name: "Summer Dress",
    category: "Dresses",
    price: 40,
    date: "2024-02-01",
    image: "/cartana.jpg",
  },
  {
    id: 4,
    name: "Anime Hoodie",
    category: "Anime Accessories",
    price: 30,
    date: "2024-02-10",
    image: "/cartana.jpg",
  },
  {
    id: 5,
    name: "Anime Hoodie",
    category: "Anime Accessories",
    price: 30,
    date: "2024-02-10",
    image: "/cartana.jpg",
  },
  {
    id: 6,
    name: "Anime Hoodie",
    category: "Anime Accessories",
    price: 30,
    date: "2024-02-10",
    image: "/cartana.jpg",
  },
  {
    id: 7,
    name: "Anime Hoodie",
    category: "Anime Accessories",
    price: 30,
    date: "2024-02-10",
    image: "/cartana.jpg",
  },
  {
    id: 8,
    name: "Anime Hoodie",
    category: "Anime Accessories",
    price: 30,
    date: "2024-02-10",
    image: "/cartana.jpg",
  },
  {
    id: 9,
    name: "Anime Hoodie",
    category: "Anime Accessories",
    price: 30,
    date: "2024-02-10",
    image: "/cartana.jpg",
  },
  // Other products omitted for brevity...
];

export default function ShopSection() {
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortByDate, setSortByDate] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  let filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);
  filteredProducts = filteredProducts.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  if (sortByDate === "Newest") {
    filteredProducts.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  } else {
    filteredProducts.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    });
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className=" p-2 md:p-6 bg-fourthly">
      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4 items-start">
        <Card className="p-4 row-span-1 h-full">
          <h2 className="text-lg font-semibold mb-3">Filters</h2>
          <div className="flex flex-col gap-4">
            <Select onValueChange={setCategory} defaultValue="All">
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Dresses">Dresses</SelectItem>
                <SelectItem value="Anime Accessories">
                  Anime Accessories
                </SelectItem>
              </SelectContent>
            </Select>
            <div>
              <p className="mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </p>
              <Slider
                min={0}
                max={100}
                step={5}
                value={priceRange}
                onValueChange={setPriceRange}
                className="w-full"
              />
            </div>
            <Select onValueChange={setSortByDate} defaultValue="Newest">
              <SelectTrigger>
                <SelectValue placeholder="Sort by Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Newest">Newest First</SelectItem>
                <SelectItem value="Oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {displayedProducts.map((product) => (
          <Card
            key={product.id}
            className="p-2 shadow-lg hover:shadow-xl transition-all"
          >
            <Link
              href={process.env.NEXT_PUBLIC_BASE_URL + "/shop/" + product.id}
              className="w-full h-52 flex justify-center items-center overflow-hidden rounded-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={220}
                height={220}
                className="object-cover w-full h-full"
              />
            </Link>
            <CardContent className="mt-2 text-center">
              <h2 className=" text-lg">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            variant={i + 1 === currentPage ? "default" : "outline"}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}
