'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState('30d');

  const analytics = {
    users: {
      total: 2847,
      growth: 12.5,
      new: 234,
      active: 1876,
      byType: {
        buyers: 2156,
        sellers: 691
      },
      byCity: [
        { name: 'Kinshasa', count: 1456, percentage: 51.2 },
        { name: 'Lubumbashi', count: 678, percentage: 23.8 },
        { name: 'Goma', count: 342, percentage: 12.0 },
        { name: 'Kolwezi', count: 234, percentage: 8.2 },
        { name: 'Autres', count: 137, percentage: 4.8 }
      ]
    },
    revenue: {
      total: '156.2M FC',
      growth: 23.1,
      avgOrder: '456K FC',
      topCategories: [
        { name: 'Matériaux BTP', revenue: '89.2M FC', percentage: 57.1 },
        { name: 'Équipements', revenue: '34.7M FC', percentage: 22.2 },
        { name: 'Outils', revenue: '19.8M FC', percentage: 12.7 },
        { name: 'Électricité', revenue: '12.5M FC', percentage: 8.0 }
      ]
    },
    orders: {
      total: 3456,
      pending: 234,
      completed: 2987,
      cancelled: 235,
      avgProcessingTime: '2.3 jours'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <Link href="/admin" className="w-8 h-8 flex items-center justify-center">
              <i className="ri-arrow-left-line text-gray-600"></i>
            </Link>
            <div>
              <h1 className="font-semibold text-gray-900">Analyses et statistiques</h1>
              <p className="text-xs text-gray-500">République Démocratique du Congo</p>
            </div>
          </div>
          
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-1 bg-gray-100 border border-gray-200 !rounded-button text-sm"
          >
            <option value="7d">7 jours</option>
            <option value="30d">30 jours</option>
            <option value="90d">3 mois</option>
            <option value="1y">1 an</option>
          </select>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 px-4 pb-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-blue-600"></i>
              </div>
              <span className="text-xs text-green-600">+{analytics.users.growth}%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{analytics.users.total.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Utilisateurs totaux</div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-money-dollar-circle-line text-green-600"></i>
              </div>
              <span className="text-xs text-green-600">+{analytics.revenue.growth}%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{analytics.revenue.total}</div>
            <div className="text-xs text-gray-600">Chiffre d'affaires</div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="ri-shopping-bag-line text-purple-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{analytics.orders.total.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Commandes totales</div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="ri-time-line text-orange-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{analytics.orders.avgProcessingTime}</div>
            <div className="text-xs text-gray-600">Temps moyen traitement</div>
          </div>
        </div>

        {/* User Demographics */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Répartition des utilisateurs</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-xl font-bold text-blue-600">{analytics.users.byType.buyers.toLocaleString()}</div>
              <div className="text-sm text-blue-700">Acheteurs</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-xl font-bold text-green-600">{analytics.users.byType.sellers.toLocaleString()}</div>
              <div className="text-sm text-green-700">Vendeurs</div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">Par ville</h4>
            {analytics.users.byCity.map((city, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">{city.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">{city.count}</span>
                  <span className="text-xs text-gray-500">({city.percentage}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Revenus par catégorie</h3>
          
          <div className="space-y-3">
            {analytics.revenue.topCategories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{category.name}</span>
                  <span className="text-sm font-medium text-gray-900">{category.revenue}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 text-right">{category.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Status */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Statut des commandes</h3>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-600">{analytics.orders.completed.toLocaleString()}</div>
              <div className="text-xs text-green-700">Complétées</div>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg">
              <div className="text-lg font-bold text-orange-600">{analytics.orders.pending.toLocaleString()}</div>
              <div className="text-xs text-orange-700">En attente</div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-red-50 rounded-lg text-center">
            <div className="text-lg font-bold text-red-600">{analytics.orders.cancelled.toLocaleString()}</div>
            <div className="text-xs text-red-700">Annulées</div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Insights de performance</h3>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <i className="ri-arrow-up-circle-line text-green-600"></i>
              <div>
                <div className="text-sm font-medium text-green-700">Croissance utilisateurs</div>
                <div className="text-xs text-green-600">+12.5% ce mois vs mois précédent</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <i className="ri-money-dollar-circle-line text-blue-600"></i>
              <div>
                <div className="text-sm font-medium text-blue-700">Panier moyen en hausse</div>
                <div className="text-xs text-blue-600">456K FC (+18% vs mois précédent)</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
              <i className="ri-map-pin-line text-purple-600"></i>
              <div>
                <div className="text-sm font-medium text-purple-700">Expansion géographique</div>
                <div className="text-xs text-purple-600">Kinshasa et Lubumbashi dominent (75%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}