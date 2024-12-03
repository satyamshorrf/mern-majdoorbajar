import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

import SearchSection from "../components/SearchSection";

const categories = [
  { href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
  { href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
  { href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
  { href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
  { href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
  { href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
  { href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
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
