// pages/index.tsx
import { PROPERTYLISTINGSAMPLE } from "../constants";
import { PropertyProps } from "../interfaces";

const Home = () => {
  const filters = [
    "Top Villa",
    "Self Checkin",
    "Mountain View",
    "Beachfront",
    "Pool",
    "Free Parking",
    "Pet Friendly",
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="relative h-96 bg-blue-500 rounded-lg mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Property Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div
            key={property.name}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gray-200 relative">
              {/* Property Image */}
              {property.discount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                  {property.discount}% OFF
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{property.name}</h3>
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1">{property.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                {property.address.city}, {property.address.country}
              </p>
              <p className="font-semibold">${property.price} / night</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {property.category.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;