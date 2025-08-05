import React, { useState } from 'react';
import { Search, ShoppingCart, Globe, ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Skill Forge
              </h1>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
              >
                Categories
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Development</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Business</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Design</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Marketing</a>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Become an Instructor</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Sign In</a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Sign Up
            </button>
            <button className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </button>
            <button className="p-2 text-gray-700 hover:text-purple-600 transition-colors">
              <Globe className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Categories</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Become an Instructor</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Sign In</a>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;