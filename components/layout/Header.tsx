// components/layout/Header.tsx
const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">LuxuryStays</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-500">
              Home
            </a>
            <a href="#" className="hover:text-blue-500">
              Explore
            </a>
            <a href="#" className="hover:text-blue-500">
              Favorites
            </a>
            <a href="#" className="hover:text-blue-500">
              About
            </a>
          </nav>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded hover:bg-gray-100">Sign In</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;