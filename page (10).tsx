'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    companyName: 'Entreprise Solutions SARL',
    contactName: 'Marie Dubois',
    email: 'marie.dubois@entreprise-solutions.fr',
    phone: '+33 1 23 45 67 89',
    address: '123 Avenue des Champs',
    city: 'Paris',
    postalCode: '75001',
    country: 'France',
    deliveryMethod: 'standard',
    notes: ''
  });

  const [cartItems] = useState([
    {
      id: 1,
      name: 'MacBook Pro 16" - Intel i9',
      price: 2499.99,
      quantity: 2,
      supplier: 'TechPro Solutions',
      image: 'https://readdy.ai/api/search-image?query=MacBook%20Pro%20laptop%20computer%2C%20modern%20apple%20laptop%2C%20silver%20aluminum%20design%2C%20high-tech%20professional%20computer%2C%20clean%20product%20photography%2C%20isolated%20on%20white%20background%2C%20centered%20composition&width=80&height=80&seq=macbook-product&orientation=squarish'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max 256GB',
      price: 1399.99,
      quantity: 1,
      supplier: 'Mobile Express',
      image: 'https://readdy.ai/api/search-image?query=iPhone%2015%20Pro%20Max%20smartphone%2C%20modern%20apple%20phone%2C%20titanium%20finish%2C%20premium%20mobile%20device%2C%20clean%20product%20photography%2C%20isolated%20on%20white%20background%2C%20centered%20composition&width=80&height=80&seq=iphone-product&orientation=squarish'
    }
  ]);

  const deliveryOptions = [
    { id: 'standard', name: 'Livraison standard', price: 25.00, duration: '5-7 jours' },
    { id: 'express', name: 'Livraison express', price: 49.00, duration: '2-3 jours' },
    { id: 'overnight', name: 'Livraison 24h', price: 89.00, duration: '24h' }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const selectedDelivery = deliveryOptions.find(option => option.id === formData.deliveryMethod);
  const deliveryFee = selectedDelivery?.price || 0;
  const total = subtotal + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order data:', { formData, cartItems, total });
    // Redirection vers la page de paiement
    window.location.href = '/payment';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center">
          <Link href="/products/1" className="w-6 h-6 flex items-center justify-center mr-3">
            <i className="ri-arrow-left-line text-gray-700"></i>
          </Link>
          <div className="font-semibold text-gray-900">
            Finaliser la commande
          </div>
        </div>
      </nav>

      {/* Content */}
      <form onSubmit={handleSubmit} className="pt-16 pb-20 px-4">
        {/* Cart Items */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Articles commandés</h3>
          
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={item.id} className={`flex items-center space-x-3 ${index !== cartItems.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}>
                <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm truncate">{item.name}</h4>
                  <p className="text-gray-600 text-xs">{item.supplier}</p>
                  <p className="text-gray-600 text-xs">Quantité: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900 text-sm">
                    {(item.price * item.quantity).toFixed(2)} €
                  </div>
                  <div className="text-gray-500 text-xs">
                    {item.price.toFixed(2)} € / unité
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Information */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Informations de livraison</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom de l'entreprise
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 bg-white border border-gray-200 !rounded-button text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 bg-white border border-gray-200 !rounded-button text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 bg-white border border-gray-200 !rounded-button text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 bg-white border border-gray-200 !rounded-button text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adresse
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full py-2 px-3 bg-white border border-gray-200 !rounded-button text-sm"
                required
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ville
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 bg-white border border-gray-200 !rounded-button text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Code postal
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 bg-white border border-gray-200 !rounded-button text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pays
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 bg-white border border-gray-200 !rounded-button text-sm appearance-none"
                  required
                >
                  <option value="France">France</option>
                  <option value="Belgique">Belgique</option>
                  <option value="Suisse">Suisse</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Mode de livraison</h3>
          
          <div className="space-y-3">
            {deliveryOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => setFormData(prev => ({ ...prev, deliveryMethod: option.id }))}
                className={`flex items-center justify-between p-3 border-2 !rounded-button cursor-pointer transition-colors ${
                  formData.deliveryMethod === option.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    formData.deliveryMethod === option.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                  }`}>
                    {formData.deliveryMethod === option.id && (
                      <div className="w-full h-full rounded-full bg-white scale-50"></div>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{option.name}</div>
                    <div className="text-gray-600 text-xs">{option.duration}</div>
                  </div>
                </div>
                <div className="font-semibold text-gray-900 text-sm">
                  {option.price.toFixed(2)} €
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Notes de commande</h3>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Instructions spéciales, étage, code d'accès..."
            className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-sm resize-none"
            rows={3}
          />
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Récapitulatif</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Sous-total</span>
              <span className="text-gray-900">{subtotal.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Livraison</span>
              <span className="text-gray-900">{deliveryFee.toFixed(2)} €</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="font-bold text-blue-600 text-lg">{total.toFixed(2)} €</span>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 !rounded-button font-semibold text-lg"
        >
          Procéder au paiement
        </button>
      </form>
    </div>
  );
}