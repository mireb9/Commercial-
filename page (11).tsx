'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalOrders: 127,
    totalSpent: 89650,
    activeQuotes: 12,
    favoriteSuppliers: 28,
    monthlyGrowth: 15.3
  };

  const recentOrders = [
    { 
      id: 'CMD-2024-001', 
      product: 'MacBook Pro 16"',
      amount: 4999.98, 
      status: 'En cours', 
      date: '2024-01-15',
      paymentMethod: 'FlexPaie',
      paymentStatus: 'Payé'
    },
    { 
      id: 'CMD-2024-002', 
      product: 'iPhone 15 Pro Max',
      amount: 1399.99, 
      status: 'Livré', 
      date: '2024-01-10',
      paymentMethod: 'Virement',
      paymentStatus: 'Payé'
    },
    { 
      id: 'CMD-2024-003', 
      product: 'Dell XPS 13',
      amount: 1299.00, 
      status: 'Expédié', 
      date: '2024-01-08',
      paymentMethod: 'FlexPaie',
      paymentStatus: 'Payé'
    }
  ];

  const topSuppliers = [
    {
      name: 'TechGlobal Manufacturing',
      orders: 45,
      amount: 156700,
      rating: 4.9,
      category: 'Électronique'
    },
    {
      name: 'Fashion Europe SARL',
      orders: 32,
      amount: 89200,
      rating: 4.7,
      category: 'Mode & Textile'
    },
    {
      name: 'Industrial Pro Ltd.',
      orders: 18,
      amount: 234500,
      rating: 4.8,
      category: 'Industrie'
    }
  ];

  const chartData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
    values: [15000, 28000, 35000, 42000, 38000, 51000]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="font-pacifico text-xl text-blue-600">
            Tableau de bord
          </div>
          <div className="flex items-center space-x-3">
            <button className="w-8 h-8 flex items-center justify-center">
              <i className="ri-notification-line text-gray-600"></i>
            </button>
            <Link href="/profile" className="w-8 h-8 flex items-center justify-center">
              <i className="ri-user-line text-gray-600"></i>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-16 pb-20">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-8">
          <h1 className="text-xl font-bold mb-2">
            Bonjour, Entreprise Solutions ! 
          </h1>
          <p className="text-blue-100 text-sm">
            Voici un aperçu de votre activité commerciale
          </p>
        </div>

        {/* Stats Cards */}
        <div className="px-4 py-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-xs">Commandes totales</p>
                  <p className="text-xl font-bold text-gray-900">{stats.totalOrders}</p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-shopping-bag-line text-blue-600"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-xs">Dépenses totales</p>
                  <p className="text-xl font-bold text-gray-900">€{stats.totalSpent.toLocaleString()}</p>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="ri-money-euro-circle-line text-green-600"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-xs">Devis actifs</p>
                  <p className="text-xl font-bold text-gray-900">{stats.activeQuotes}</p>
                </div>
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i className="ri-file-text-line text-orange-600"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-xs">Fournisseurs</p>
                  <p className="text-xl font-bold text-gray-900">{stats.favoriteSuppliers}</p>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="ri-store-line text-purple-600"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Card */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Croissance ce mois</p>
                <p className="text-2xl font-bold">+{stats.monthlyGrowth}%</p>
                <p className="text-green-100 text-xs">par rapport au mois dernier</p>
              </div>
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                <i className="ri-arrow-up-line text-white text-xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="px-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Évolution des achats</h3>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Simple%20clean%20business%20chart%20showing%20growth%20trend%2C%20line%20graph%20with%20blue%20gradient%2C%20professional%20business%20analytics%20visualization%2C%20clean%20white%20background%2C%20minimal%20design%2C%20data%20visualization%2C%20business%20statistics%2C%20smooth%20curved%20line%20chart%20showing%20upward%20trend&width=300&height=150&seq=chart1&orientation=landscape"
                alt="Graphique des achats"
                className="w-full h-32 object-cover object-top rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
              <div className="text-center">
                <p className="text-xs text-gray-500">Ce mois</p>
                <p className="font-semibold text-gray-900">€51,000</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Moyenne</p>
                <p className="font-semibold text-gray-900">€34,800</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Objectif</p>
                <p className="font-semibold text-gray-900">€60,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="px-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Commandes récentes</h3>
              <Link href="/orders" className="text-blue-600 text-sm">
                Voir tout
              </Link>
            </div>
            
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-gray-900 text-sm">#{order.id}</span>
                      <span className={`px-2 py-1 rounded-md text-xs ${
                        order.status === 'Livré' ? 'bg-green-100 text-green-800' :
                        order.status === 'Expédié' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs">{order.product}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-gray-500 text-xs">{order.date}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-xs">{order.paymentMethod}</span>
                      <span className={`px-1 py-0.5 rounded text-xs ${
                        order.paymentStatus === 'Payé' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {order.paymentStatus}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 text-sm">
                      {order.amount.toFixed(2)} €
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Suppliers */}
        <div className="px-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Fournisseurs principaux</h3>
              <Link href="/suppliers" className="text-blue-600 text-sm">
                Voir tout
              </Link>
            </div>
            <div className="divide-y divide-gray-100">
              {topSuppliers.map((supplier, index) => (
                <div key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{supplier.name}</h4>
                      <p className="text-gray-600 text-xs">{supplier.category}</p>
                      <div className="flex items-center mt-1">
                        <i className="ri-star-fill text-yellow-400 text-xs"></i>
                        <span className="text-gray-600 text-xs ml-1">{supplier.rating}</span>
                        <span className="text-gray-400 text-xs ml-2">•</span>
                        <span className="text-gray-600 text-xs ml-2">{supplier.orders} commandes</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 text-sm">
                        €{supplier.amount.toLocaleString()}
                      </p>
                      <p className="text-gray-500 text-xs">Total achats</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4">
          <h3 className="font-semibold text-gray-900 mb-4">Actions rapides</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/search"
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <i className="ri-search-line text-blue-600 text-xl"></i>
              </div>
              <p className="font-medium text-gray-900 text-sm">Rechercher produits</p>
            </Link>

            <Link
              href="/quotes/new"
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <i className="ri-file-add-line text-green-600 text-xl"></i>
              </div>
              <p className="font-medium text-gray-900 text-sm">Demander devis</p>
            </Link>

            <Link
              href="/messages"
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <i className="ri-message-3-line text-orange-600 text-xl"></i>
              </div>
              <p className="font-medium text-gray-900 text-sm">Messages</p>
            </Link>

            <Link
              href="/favorites"
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <i className="ri-heart-line text-red-600 text-xl"></i>
              </div>
              <p className="font-medium text-gray-900 text-sm">Favoris</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-0 py-0">
        <div className="grid grid-cols-5 h-16">
          <Link href="/" className="flex flex-col items-center justify-center space-y-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-home-line text-gray-600"></i>
            </div>
            <span className="text-xs text-gray-600">Accueil</span>
          </Link>
          
          <Link href="/categories" className="flex flex-col items-center justify-center space-y-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-grid-line text-gray-600"></i>
            </div>
            <span className="text-xs text-gray-600">Catégories</span>
          </Link>

          <Link href="/dashboard" className="flex flex-col items-center justify-center space-y-1 bg-blue-50">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-dashboard-fill text-blue-600"></i>
            </div>
            <span className="text-xs text-blue-600 font-medium">Tableau</span>
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
