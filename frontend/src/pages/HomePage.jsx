import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

import SearchSection from "../components/SearchSection";

import { BrickWall, Zap, Paintbrush, Hammer, Droplet, Plane } from 'lucide-react'; // Import your icons

const categories = [
  { href: "/labor-and-mistry", title: " LABOR ", subtitle: "Explore Services", bgColor: "bg-blue-600", Icon: BrickWall },
  { href: "/electrician", title: "ELECTRICIAN", subtitle: "Find Electricians", bgColor: "bg-yellow-600", Icon: Zap },
  { href: "/painter", title: "PAINTER", subtitle: "Hire Painters", bgColor: "bg-purple-600", Icon: Paintbrush },
  { href: "/carpenter", title: "CARPENTER", subtitle: "Book Carpenters", bgColor: "bg-green-600", Icon: Hammer },
  { href: "/plumber", title: "PLUMBER", subtitle: "Best Deals", bgColor: "bg-pink-800", Icon: Droplet },
  { href: "/travel", title: "TRAVEL", subtitle: "Best Deals", bgColor: "bg-red-800", Icon: Plane },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="text-center py-10">
      <h1 className="text-6xl text-green-500 font-extrabold">MajdoorBajar</h1>{" "}
      <br />
      <h2 className="text-3xl text-green-400 font-bold mt-2">
        Find Skilled Workers Near You
      </h2>
      <p className="text-gray-400 mt-2" style={{ fontSize: "20px" }}>
	  Connect with reliable laborers, electricians, and more
      </p>{" "}
      <br />

<br /><br />
      <div className="flex justify-center ">
      <SearchSection />  
      </div>
      <br />






      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryItem category={category} key={category.name} />
        ))}
      </div>
      {!isLoading && products.length > 0 && (
        <FeaturedProducts featuredProducts={products} />
      )}
    </div>
  );
};
export default HomePage;
