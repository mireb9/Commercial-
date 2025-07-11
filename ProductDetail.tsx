
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(100);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('');

  const product = {
    id: productId,
    name: 'Smartphone Premium Pro Max 256GB',
    price: { min: 299, max: 899 },
    minOrder: 100,
    supplier: {
      name: 'TechGlobal Manufacturing Ltd.',
      location: 'Shenzhen, Chine',
      rating: 4.8,
      years: 8,
      verified: true,
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20technology%20company%20logo%2C%20modern%20tech%20branding%2C%20electronic%20manufacturer%20identity%2C%20blue%20and%20silver%20colors%2C%20high-tech%20appearance%2C%20corporate%20professional%20design%2C%20centered%20composition%2C%20isolated%20on%20white%20background&width=60&height=60&seq=supplier1&orientation=squarish'
    },
    images: [
      'https://readdy.ai/api/search-image?query=Premium%20smartphone%20product%20photography%2C%20sleek%20modern%20design%20mobile%20phone%2C%20high-quality%20commercial%20photography%2C%20clean%20white%20background%2C%20professional%20lighting%2C%20detailed%20view%2C%20realistic%20rendering%2C%20premium%20quality%2C%20sharp%20focus%2C%20product%20catalog%20style&width=300&height=300&seq=phone-main&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Smartphone%20back%20view%20product%20photography%2C%20premium%20mobile%20device%20rear%20camera%2C%20sleek%20design%2C%20commercial%20photography%2C%20clean%20white%20background%2C%20professional%20lighting%2C%20detailed%20view%2C%20product%20catalog%20style&width=300&height=300&seq=phone-back&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Smartphone%20side%20profile%20view%2C%20premium%20mobile%20device%20edge%20design%2C%20thin%20profile%2C%20commercial%20photography%2C%20clean%20white%20background%2C%20professional%20lighting%2C%20product%20catalog%20style&width=300&height=300&seq=phone-side&orientation=squarish'
    ],
    description: 'Smartphone haut de gamme avec écran OLED 6.7", processeur dernière génération, triple caméra 108MP, batterie 5000mAh et charge rapide 65W. Design premium en aluminium et verre.',
    specifications: [
      { label: 'Écran', value: '6.7" OLED 120Hz' },
      { label: 'Processeur', value: 'Snapdragon 8 Gen 2' },
      { label: 'RAM', value: '8GB / 12GB' },
      { label: 'Stockage', value: '256GB / 512GB' },
      { label: 'Caméra', value: '108MP + 12MP + 12MP' },
      { label: 'Batterie', value: '5000mAh' },
      { label: 'OS', value: 'Android 13' },
      { label: 'Couleurs', value: 'Noir, Blanc, Bleu' }
    ],
    features: [
      'Écran OLED haute résolution',
      'Charge rapide 65W',
      'Résistant à l\'eau IP68',
      'Reconnaissance faciale et empreinte',
      'Double SIM',
      '5G compatible'
    ],
    pricing: [
      { quantity: '100-499 pcs', price: '€899' },
      { quantity: '500-999 pcs', price: '€799' },
      { quantity: '1000+ pcs', price: '€699' }
    ],
    shipping: {
      time: '7-15 jours',
      methods: ['DHL Express', 'FedEx', 'Transport maritime']
    }
  };

  const calculatePrice = (qty: number) => {
    if (qty >= 1000) return '€699';
    if (qty >= 500) return '€799';
    return '€899';
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', { productId, quantity, selectedVariant });
    setShowCartModal(true);
  };

  const handleBuyNow = () => {
    console.log('Buy now:', { productId, quantity, selectedVariant });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="w-8 h-8 flex items-center justify-center">
            <i className="ri-arrow-left-line text-gray-700"></i>
          </Link>
          <div className="flex items-center space-x-3">
            <button className="w-8 h-8 flex items-center justify-center">
              <i className="ri-share-line text-gray-600"></i>
            </button>
            <button className="w-8 h-8 flex items-center justify-center">
              <i className="ri-heart-line text-gray-600"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-16 pb-20">
        {/* Product Images */}
        <div className="bg-white">
          <div className="aspect-square relative">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Image Thumbnails */}
          <div className="flex space-x-2 p-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`Vue ${index + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="bg-white mt-2 px-4 py-6">
          <h1 className="text-xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>

          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-2xl font-bold text-blue-600">
                €{product.price.min}-€{product.price.max}
              </span>
              <span className="text-gray-500 text-sm ml-2">/ pièce</span>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Min. commande</div>
              <div className="font-semibold text-gray-900">{product.minOrder} pcs</div>
            </div>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Supplier Info */}
        <div className="bg-white mt-2 px-4 py-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={product.supplier.avatar}
                alt={product.supplier.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900 text-sm">
                  {product.supplier.name}
                </h3>
                {product.supplier.verified && (
                  <i className="ri-verified-badge-fill text-blue-600 text-sm"></i>
                )}
              </div>
              <p className="text-gray-600 text-xs">{product.supplier.location}</p>
              <div className="flex items-center space-x-3 mt-1">
                <div className="flex items-center">
                  <i className="ri-star-fill text-yellow-400 text-xs"></i>
                  <span className="text-gray-600 text-xs ml-1">{product.supplier.rating}</span>
                </div>
                <span className="text-gray-500 text-xs">
                  {product.supplier.years} ans d'expérience
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowContactModal(true)}
              className="bg-blue-600 text-white px-4 py-2 !rounded-button text-sm"
            >
              Contacter
            </button>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-white mt-2 px-4 py-6">
          <h3 className="font-semibold text-gray-900 mb-4">Tarifs dégressifs</h3>
          <div className="space-y-3">
            {product.pricing.map((tier, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <span className="text-gray-700 text-sm">{tier.quantity}</span>
                <span className="font-semibold text-gray-900">{tier.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quantity Calculator */}
        <div className="bg-white mt-2 px-4 py-6">
          <h3 className="font-semibold text-gray-900 mb-4">Calculateur de prix</h3>
          <div className="flex items-center space-x-4 mb-4">
            <label className="text-sm text-gray-700">Quantité:</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => quantity > 100 && setQuantity(quantity - 50)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <i className="ri-subtract-line text-gray-600"></i>
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(100, parseInt(e.target.value) || 100))}
                className="w-20 text-center py-2 border border-gray-300 !rounded-button text-sm"
                min="100"
              />
              <button
                onClick={() => setQuantity(quantity + 50)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <i className="ri-add-line text-gray-600"></i>
              </button>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Prix unitaire:</span>
              <span className="font-bold text-blue-600 text-lg">{calculatePrice(quantity)}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-700">Total estimé:</span>
              <span className="font-bold text-gray-900 text-xl">
                €{(quantity * parseInt(calculatePrice(quantity).replace('€', ''))).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 pb-6">
          <div className="flex space-x-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 border border-blue-600 text-blue-600 py-3 !rounded-button font-medium"
            >
              <i className="ri-shopping-cart-line mr-2"></i>
              Ajouter au panier
            </button>
            <Link
              href="/checkout"
              className="flex-1 bg-blue-600 text-white py-3 !rounded-button font-medium text-center"
            >
              Acheter maintenant
            </Link>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white mt-2 px-4 py-6">
          <h3 className="font-semibold text-gray-900 mb-4">Spécifications</h3>
          <div className="grid grid-cols-1 gap-3">
            {product.specifications.map((spec, index) => (
              <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                <span className="text-gray-600 text-sm">{spec.label}</span>
                <span className="text-gray-900 text-sm font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-white mt-2 px-4 py-6">
          <h3 className="font-semibold text-gray-900 mb-4">Caractéristiques</h3>
          <div className="grid grid-cols-1 gap-2">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <i className="ri-check-line text-green-600"></i>
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Info */}
        <div className="bg-white mt-2 px-4 py-6">
          <h3 className="font-semibold text-gray-900 mb-4">Livraison</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <i className="ri-time-line text-blue-600"></i>
              <div>
                <div className="text-sm font-medium text-gray-900">Délai de livraison</div>
                <div className="text-xs text-gray-600">{product.shipping.time}</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <i className="ri-truck-line text-blue-600 mt-1"></i>
              <div>
                <div className="text-sm font-medium text-gray-900">Méthodes d'expédition</div>
                <div className="text-xs text-gray-600">
                  {product.shipping.methods.join(', ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex space-x-3">
          <button className="flex-1 border border-blue-600 text-blue-600 py-3 !rounded-button font-medium">
            Demander un devis
          </button>
          <button
            onClick={() => setShowContactModal(true)}
            className="flex-1 bg-blue-600 text-white py-3 !rounded-button font-medium"
          >
            Contacter maintenant
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Contacter le fournisseur
              </h3>
              <p className="text-gray-600 text-sm">
                Choisissez votre méthode de contact préférée
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href="/messages"
                className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-200 !rounded-button"
              >
                <i className="ri-message-3-line text-blue-600"></i>
                <span className="text-gray-900">Envoyer un message</span>
              </Link>

              <button className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-200 !rounded-button">
                <i className="ri-phone-line text-green-600"></i>
                <span className="text-gray-900">Appeler directement</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-200 !rounded-button">
                <i className="ri-mail-line text-orange-600"></i>
                <span className="text-gray-900">Envoyer un email</span>
              </button>
            </div>

            <button
              onClick={() => setShowContactModal(false)}
              className="w-full mt-4 text-gray-600 py-2 text-sm"
            >
              Annuler
            </button>
          </div>
        </div>
      )}

      {/* Cart Success Modal */}
      {showCartModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <i className="ri-check-line text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Ajouté au panier !
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              {quantity} unités ont été ajoutées à votre panier
            </p>
            <div className="space-y-3">
              <Link
                href="/checkout"
                className="block w-full bg-blue-600 text-white py-3 !rounded-button font-medium"
              >
                Voir le panier
              </Link>
              <button
                onClick={() => setShowCartModal(false)}
                className="w-full border border-gray-300 text-gray-700 py-3 !rounded-button font-medium"
              >
                Continuer les achats
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
