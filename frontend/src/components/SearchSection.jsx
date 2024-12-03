import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchSection = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className="max-w-4xl mx-auto -mt-16 relative z-10 px-4">
      <div className="bg-green-300 rounded-lg shadow-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-950">
          <div className="relative ">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <select
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="labor">Labor</option>
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="carpenter">Carpenter</option>
            </select>
          </div>
        </div>
        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
          Search Workers
        </button>
      </div>
    </div>
  );
};

export default SearchSection;