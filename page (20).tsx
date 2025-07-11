
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [isLoggedIn] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const userProfile = {
    name: 'SODIMICO SARL',
    email: 'contact@sodimico-rdc.cd',
    userType: 'Acheteur Entreprise',
    memberSince: 'Membre depuis Janvier 2024',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20African%20business%20company%20avatar%2C%20modern%20corporate%20identity%2C%20blue%20and%20gold%20professional%20branding%2C%20DRC%20business%20professional%20appearance%2C%20high%20quality%2C%20centered%20composition%2C%20isolated%20on%20white%20background&width=80&height=80&seq=profile-avatar-rdc&orientation=squarish',
    stats: {
      orders: 156,
      suppliers: 47,
      reviews: 89
    }
  };

  const menuItems = [
    {
      icon: 'ri-shopping-bag-line',
      title: 'Mes commandes',
      subtitle: '156 commandes • 2.4M FC',
      href: '/orders',
      color: 'text-blue-600'
    },
    {
      icon: 'ri-heart-line',
      title: 'Favoris',
      subtitle: '234 produits • Matériaux BTP',
      href: '/favorites',
      color: 'text-red-500'
    },
    {
      icon: 'ri-store-line',
      title: 'Mes fournisseurs',
      subtitle: '47 fournisseurs • Kinshasa, Lubumbashi',
      href: '/suppliers',
      color: 'text-green-600'
    },
    {
      icon: 'ri-star-line',
      title: 'Avis et notes',
      subtitle: '89 avis donnés • 4.7/5 moyenne',
      href: '/reviews',
      color: 'text-yellow-500'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Devis demandés',
      subtitle: '23 devis • 8 en attente réponse',
      href: '/quotes',
      color: 'text-purple-600'
    },
    {
      icon: 'ri-truck-line',
      title: 'Suivi livraisons',
      subtitle: '12 en cours • Kinshasa-Matadi',
      href: '/shipping',
      color: 'text-orange-600'
    }
  ];

  const settingsItems = [
    {
      icon: 'ri-user-settings-line',
      title: 'Paramètres du compte',
      subtitle: 'Infos entreprise, RCCM, numéro impôt',
      href: '/settings/account'
    },
    {
      icon: 'ri-notification-line',
      title: 'Notifications',
      subtitle: 'SMS, emails, alertes commandes',
      href: '/settings/notifications'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Sécurité et vérification',
      subtitle: 'Authentification, documents légaux',
      href: '/settings/security'
    },
    {
      icon: 'ri-bank-card-line',
      title: 'Moyens de paiement',
      subtitle: 'Mobile Money, virement bancaire',
      href: '/settings/payment'
    },
    {
      icon: 'ri-headphone-line',
      title: 'Service client',
      subtitle: 'WhatsApp +243 842 267 252',
      href: 'https://wa.me/243842267252'
    },
    {
      icon: 'ri-information-line',
      title: 'À propos de Mireb',
      subtitle: 'Version 2.1.0 • Conditions générales',
      href: '/about'
    }
  ];

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    console.log('User logged out');
    setShowLogoutModal(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
            <i className="ri-user-line text-blue-600 text-2xl"></i>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Connectez-vous pour accéder à votre profil
          </h2>
          <p className="text-gray-600 mb-6">
            Gérez vos commandes, favoris et paramètres
          </p>
          <div className="space-y-3">
            <Link href="/auth/login" className="block w-full bg-blue-600 text-white py-3 !rounded-button font-medium">
              Se connecter
            </Link>
            <Link href="/auth/register" className="block w-full border border-gray-300 text-gray-700 py-3 !rounded-button font-medium">
              Créer un compte
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="font-pacifico text-xl text-blue-600">
            Profil
          </div>
          <button
            onClick={handleLogout}
            className="w-8 h-8 flex items-center justify-center"
          >
            <i className="ri-logout-box-line text-gray-600"></i>
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-16 pb-20">
        {/* Profile Header */}
        <div className="bg-white px-4 py-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={userProfile.avatar}
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-gray-900 text-lg truncate">
                {userProfile.name}
              </h2>
              <p className="text-gray-600 text-sm truncate">
                {userProfile.email}
              </p>
              <div className="flex items-center mt-1">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md">
                  {userProfile.userType}
                </span>
                <span className="text-gray-500 text-xs ml-2">
                  {userProfile.memberSince}
                </span>
              </div>
            </div>
            <Link href="/profile/edit" className="w-8 h-8 flex items-center justify-center">
              <i className="ri-edit-line text-gray-600"></i>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-100">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">{userProfile.stats.orders}</div>
              <div className="text-xs text-gray-600">Commandes</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">{userProfile.stats.suppliers}</div>
              <div className="text-xs text-gray-600">Fournisseurs</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">{userProfile.stats.reviews}</div>
              <div className="text-xs text-gray-600">Avis</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-6">
          <h3 className="font-semibold text-gray-900 mb-4">Activités commerciales</h3>
          <div className="space-y-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 block"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center ${item.color}`}>
                    <i className={`${item.icon} text-lg`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-arrow-right-s-line text-gray-400"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="px-4 py-2">
          <h3 className="font-semibold text-gray-900 mb-4">Paramètres et support</h3>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {settingsItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`block px-4 py-4 ${index !== settingsItems.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className={`${item.icon} text-gray-600`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-gray-900 text-sm font-medium">{item.title}</div>
                    <div className="text-gray-500 text-xs mt-1">{item.subtitle}</div>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-arrow-right-s-line text-gray-400"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Admin Access - Only for admin email */}
        <div className="px-4 py-2">
          <Link
            href="/admin"
            className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <i className="ri-shield-user-line text-white text-lg"></i>
              </div>
              <div className="flex-1">
                <div className="font-semibold">Administration Mireb</div>
                <div className="text-white text-opacity-80 text-sm">
                  Gérer toute la plateforme RDC
                </div>
              </div>
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-arrow-right-s-line text-white"></i>
              </div>
            </div>
          </Link>
        </div>

        {/* Logout Button */}
        <div className="px-4 py-6">
          <button
            onClick={handleLogout}
            className="w-full bg-red-50 text-red-600 py-3 !rounded-button font-medium border border-red-200"
          >
            <i className="ri-logout-box-line mr-2"></i>
            Se déconnecter
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <i className="ri-logout-box-line text-red-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Se déconnecter
              </h3>
              <p className="text-gray-600 mb-6">
                Êtes-vous sûr de vouloir vous déconnecter ?
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 !rounded-button font-medium"
                >
                  Annuler
                </button>
                <button
                  onClick={confirmLogout}
                  className="flex-1 bg-red-600 text-white py-2 !rounded-button font-medium"
                >
                  Déconnecter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-0 py-0">
        <div className="grid grid-cols-4 h-16">
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

          <Link href="/messages" className="flex flex-col items-center justify-center space-y-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-message-3-line text-gray-600"></i>
            </div>
            <span className="text-xs text-gray-600">Messages</span>
          </Link>

          <Link href="/profile" className="flex flex-col items-center justify-center space-y-1 bg-blue-50">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-user-fill text-blue-600"></i>
            </div>
            <span className="text-xs text-blue-600 font-medium">Profil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
