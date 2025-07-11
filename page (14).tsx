
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    {
      name: 'Électronique',
      slug: 'electronique',
      icon: 'ri-smartphone-line',
      products: '2.3M+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20electronic%20devices%20smartphone%20laptop%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=100&height=100&seq=electronics&orientation=squarish'
    },
    {
      name: 'Mode & Textile',
      slug: 'mode-textile',
      icon: 'ri-shirt-line',
      products: '1.8M+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20fashion%20clothing%20shirt%20dress%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=100&height=100&seq=fashion&orientation=squarish'
    },
    {
      name: 'Industrie',
      slug: 'industrie',
      icon: 'ri-hammer-line',
      products: '950K+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20industrial%20machinery%20tools%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=100&height=100&seq=industry&orientation=squarish'
    },
    {
      name: 'Automobile',
      slug: 'automobile',
      icon: 'ri-car-line',
      products: '680K+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20car%20automotive%20parts%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=100&height=100&seq=auto&orientation=squarish'
    },
    {
      name: 'Maison & Jardin',
      slug: 'maison-jardin',
      icon: 'ri-home-line',
      products: '1.2M+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20home%20house%20garden%20furniture%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=100&height=100&seq=home&orientation=squarish'
    },
    {
      name: 'Cosmétiques',
      slug: 'cosmetiques',
      icon: 'ri-heart-line',
      products: '520K+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20cosmetics%20beauty%20products%20lipstick%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=100&height=100&seq=beauty&orientation=squarish'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Smartphone Premium Pro',
      price: '€299-€899',
      minOrder: '100 pièces',
      supplier: 'TechGlobal Ltd.',
      rating: 4.8,
      image: 'https://readdy.ai/api/search-image?query=Modern%20premium%20smartphone%20with%20sleek%20design%2C%20high-quality%20product%20photography%2C%20professional%20lighting%2C%20clean%20white%20background%2C%20centered%20composition%2C%20detailed%20view%2C%20realistic%20rendering%2C%20commercial%20photography%20style%2C%20sharp%20focus%2C%20premium%20quality&width=200&height=200&seq=smartphone1&orientation=squarish'
    },
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
      id: 3,
      name: 'Machine CNC Industrielle',
      price: '€15,000-€45,000',
      minOrder: '1 pièce',
      supplier: 'Industrial Pro',
      rating: 4.9,
      image: 'https://readdy.ai/api/search-image?query=Industrial%20CNC%20machine%2C%20professional%20manufacturing%20equipment%2C%20high-tech%20machinery%2C%20commercial%20photography%2C%20clean%20white%20background%2C%20centered%20composition%2C%20detailed%20view%2C%20premium%20industrial%20equipment%2C%20sharp%20focus&width=200&height=200&seq=machine1&orientation=squarish'
    }
  ];

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="font-pacifico text-xl text-blue-600">
              Mireb Commercial
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/auth/login" className="text-sm text-gray-600">
                Connexion
              </Link>
              <Link href="/auth/register" className="bg-blue-600 text-white px-4 py-2 !rounded-button text-sm">
                S'inscrire
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="font-pacifico text-xl text-blue-600" suppressHydrationWarning={true}>
            Mireb Commercial
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/auth/login" className="text-sm text-gray-600">
              Connexion
            </Link>
            <Link href="/auth/register" className="bg-blue-600 text-white px-4 py-2 !rounded-button text-sm">
              S'inscrire
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-16 pb-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">
              Plateforme B2B Leader
            </h1>
            <p className="text-blue-100 mb-6">
              Connectez-vous avec des millions de fournisseurs
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Rechercher des produits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-4 pr-12 !rounded-button text-gray-900 border-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                <i className="ri-search-line text-gray-500"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="px-4 py-8">
          <h2 className="text-lg font-semibold mb-4">Catégories Populaires</h2>
          <div className="grid grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/categories/${category.slug}`}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 mx-auto mb-3 overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xs font-medium text-gray-900 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500">{category.products}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="px-4 py-4">
          <h2 className="text-lg font-semibold mb-4">Produits Recommandés</h2>
          <div className="space-y-4">
            {featuredProducts.map((product) => (
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

        {/* Services Banner */}
        <div className="mx-4 my-6 bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <h3 className="font-semibold text-lg mb-2">Services Pro</h3>
          <p className="text-green-100 text-sm mb-4">
            Vérification fournisseurs, logistique intégrée
          </p>
          <button className="bg-white text-green-600 px-4 py-2 !rounded-button text-sm font-medium">
            En savoir plus
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-0 py-0">
        <div className="grid grid-cols-4 h-16">
          <Link href="/" className="flex flex-col items-center justify-center space-y-1 bg-blue-50">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-home-fill text-blue-600"></i>
            </div>
            <span className="text-xs text-blue-600 font-medium">Accueil</span>
          </Link>

          <Link href="/categories" className="flex flex-col items-center justify-center space-y-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-grid-line text-gray-600"></i>
            </div>
            <span className="text-xs text-gray-600">Catégories</span>
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
