'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ModeTextilePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 2,
      name: 'Veste Business Homme',
      price: '€45-€120',
      minOrder: '50 pièces',
      supplier: 'Fashion Europe',
      rating: 4.6,
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20suit%20jacket%20for%20men%2C%20high-quality%20fabric%2C%20elegant%20design%2C%20commercial%20product%20photography%2C%20clean%20white%20background%2C%20centered%20composition%2C%20detailed%20view%2C%20premium%20quality%20clothing%2C%20sharp%20focus&width=200&height=200&seq=jacket1&orientation=squarish'
    },
    {
      id: 7,
      name: 'Robe Cocktail Femme',
      price: '€69-€189',
      minOrder: '30 pièces',
      supplier: 'Elegant Designs',
      rating: 4.7,
      image: 'https://readdy.ai/api/search-image?query=Elegant%20cocktail%20dress%20for%20women%2C%20premium%20fabric%2C%20sophisticated%20design%2C%20commercial%20product%20photography%2C%20clean%20white%20background%2C%20centered%20composition%2C%20detailed%20view%2C%20premium%20quality%20clothing%2C%20sharp%20focus&width=200&height=200&seq=dress1&orientation=squarish'
    },
    {
      id: 8,
      name: 'Chemise Bureau Coton',
      price: '€25-€65',
      minOrder: '100 pièces',
      supplier: 'Cotton World',
      rating: 4.5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20cotton%20office%20shirt%2C%20high-quality%20fabric%2C%20classic%20design%2C%20commercial%20product%20photography%2C%20clean%20white%20background%2C%20centered%20composition%2C%20detailed%20view%2C%20premium%20quality%20clothing%2C%20sharp%20focus&width=200&height=200&seq=shirt1&orientation=squarish'
    },
    {
      id: 9,
      name: 'Jeans Premium Denim',
      price: '€39-€99',
      minOrder: '75 pièces',
      supplier: 'Denim Masters',
      rating: 4.4,
      image: 'https://readdy.ai/api/search-image?query=Premium%20denim%20jeans%2C%20high-quality%20fabric%2C%20modern%20fit%2C%20commercial%20product%20photography%2C%20clean%20white%20background%2C%20centered%20composition%2C%20detailed%20view%2C%20premium%20quality%20clothing%2C%20sharp%20focus&width=200&height=200&seq=jeans1&orientation=squarish'
    },
    {
      id: 10,
      name: 'Accessoires Cuir',
      price: '€15-€89',
      minOrder: '200 pièces',
      supplier: 'Leather Craft Co.',
      rating: 4.6,
      image: 'https://readdy.ai/api/search-image?query=Premium%20leather%20accessories%20belt%20wallet%2C%20high-quality%20craftsmanship%2C%20elegant%20design%2C%20commercial%20product%20photography%2C%20clean%20white%20background%2C%20centered%20composition%2C%20detailed%20view%2C%20premium%20quality%20leather%20goods%2C%20sharp%20focus&width=200&height=200&seq=leather1&orientation=squarish'
    },
    {
      id: 11,
      name: 'Chaussures Sport',
      price: '€55-€149',
      minOrder: '50 pièces',
      supplier: 'Athletic Wear Pro',
      rating: 4.8,
      image: 'https://readdy.ai/api/search-image?query=Professional%20athletic%20sports%20shoes%20sneakers%2C%20high-quality%20materials%2C%20modern%20design%2C%20commercial%20product%20photography%2C%20clean%20white%20background%2C%20centered%20composition%2C%20detailed%20view%2C%20premium%20quality%20footwear%2C%20sharp%20focus&width=200&height=200&seq=shoes1&orientation=squarish'
    }
  ];

  const subCategories = [
    { name: 'Vêtements Homme', count: '320K+' },
    { name: 'Vêtements Femme', count: '450K+' },
    { name: 'Chaussures', count: '280K+' },
    { name: 'Accessoires', count: '190K+' },
    { name: 'Maroquinerie', count: '150K+' },
    { name: 'Textile Maison', count: '210K+' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="w-6 h-6 flex items-center justify-center">
              <i className="ri-arrow-left-line text-gray-700"></i>
            </Link>
            <h1 className="text-lg font-semibold text-gray-900">Mode & Textile</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button className="w-8 h-8 flex items-center justify-center">
              <i className="ri-search-line text-gray-600"></i>
            </button>
            <button className="w-8 h-8 flex items-center justify-center">
              <i className="ri-filter-line text-gray-600"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-16 pb-20">
        {/* Search Bar */}
        <div className="px-4 py-4 bg-white border-b border-gray-100">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher dans Mode & Textile..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-4 pr-12 bg-gray-50 !rounded-button text-gray-900 border-none text-sm"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
              <i className="ri-search-line text-gray-500"></i>
            </button>
          </div>
        </div>

        {/* Sub Categories */}
        <div className="px-4 py-6 bg-white">
          <h2 className="text-sm font-medium text-gray-900 mb-4">Sous-catégories</h2>
          <div className="grid grid-cols-2 gap-3">
            {subCategories.map((category, index) => (
              <button
                key={index}
                className="bg-gray-50 rounded-lg p-3 text-left"
              >
                <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{category.count}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Products List */}
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-gray-900">1.8M+ produits trouvés</h2>
            <button className="flex items-center space-x-1 text-sm text-gray-600">
              <span>Prix</span>
              <i className="ri-arrow-down-s-line"></i>
            </button>
          </div>
          
          <div className="space-y-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 block"
              >
                <div className="flex space-x-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-sm mb-1">{product.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm mb-1">{product.price}</p>
                    <p className="text-gray-500 text-xs mb-2">Min. {product.minOrder}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-600 text-xs">{product.supplier}</p>
                      <div className="flex items-center">
                        <i className="ri-star-fill text-yellow-400 text-xs"></i>
                        <span className="text-gray-600 text-xs ml-1">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-0 py-0">
        <div className="grid grid-cols-4 h-16">
          <Link href="/" className="flex flex-col items-center justify-center space-y-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-home-line text-gray-600"></i>
            </div>
            <span className="text-xs text-gray-600">Accueil</span>
          </Link>
          
          <Link href="/categories" className="flex flex-col items-center justify-center space-y-1 bg-blue-50">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-grid-fill text-blue-600"></i>
            </div>
            <span className="text-xs text-blue-600 font-medium">Catégories</span>
          </Link>
          
          <Link href="/messages" className="flex flex-col items-center justify-center space-y-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-message-3-line text-gray-600"></i>
            </div>
            <span className="text-xs text-gray-600">Messages</span>
          </Link>
          
          <Link href="/profile" className="flex flex-col items-center justify-center space-y-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-user-line text-gray-600"></i>
            </div>
            <span className="text-xs text-gray-600">Profil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}