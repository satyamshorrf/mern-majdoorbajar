import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <div className='flex justify-center'>
      <div className={`relative overflow-hidden h-20 w-64 rounded-lg group ${category.bgColor}`}>
        <Link to={"/category" + category.href}>
          <div className='w-full h-full cursor-pointer'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 z-10' />
            <category.Icon className="h-12 w-12 text-white absolute top-4 left-4" /> {/* Icon positioned at the top left */}
            <div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
              <h3 className='text-white text-xl font-bold mb-1'>{category.title}</h3>
              <p className='text-gray-200 text-sm'>{category.subtitle}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;