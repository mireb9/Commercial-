
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [adminAuth, setAdminAuth] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingPage, setEditingPage] = useState(null as any);
  const [editingProduct, setEditingProduct] = useState(null as any);
  const [editContent, setEditContent] = useState('');
  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    category: '',
    supplier: '',
    minPrice: '',
    maxPrice: '',
    minOrder: '',
    stock: '',
    active: true,
    featured: false
  });
  const [stats, setStats] = useState({
    totalUsers: 2847,
    buyers: 2156,
    sellers: 691,
    activeOrders: 342,
    totalRevenue: '156.2M FC',
    pendingVerifications: 23,
    totalMessages: 1876,
    unreadMessages: 43,
    reportedConversations: 7,
    totalPayments: 1234,
    successfulPayments: 1156,
    failedPayments: 78,
    pendingPayments: 45,
    totalPaymentAmount: '89.4M FC',
    bankTransfers: 234,
    mobilePayments: 567,
    refundsRequested: 12,
  });
  const [pageContents, setPageContents] = useState([
    {
      id: 'home',
      name: 'Accueil',
      elements: 15,
      status: 'Actif',
      content: {
        title: 'Bienvenue sur Mireb - Plateforme B2B RDC',
        subtitle: 'Connectez votre entreprise avec les fournisseurs et acheteurs de la République Démocratique du Congo',
        description: 'La première plateforme digitale pour le commerce B2B au Congo-Kinshasa',
        ctaButton: 'Rejoindre Mireb maintenant',
      },
    },
    {
      id: 'categories',
      name: 'Catégories',
      elements: 8,
      status: 'Actif',
      content: {
        title: 'Nos catégories de produits',
        subtitle: 'Découvrez notre large gamme de produits industriels et commerciaux',
        categories: ['Matériaux BTP', 'Équipements industriels', 'Outils professionnels', 'Électricité', 'Plomberie', 'Sécurité', 'Agriculture', 'Transport'],
      },
    },
    {
      id: 'products',
      name: 'Produits',
      elements: 23,
      status: 'Actif',
      content: {
        title: 'Catalogue produits Mireb',
        subtitle: 'Plus de 10,000 produits disponibles',
        description: 'Trouvez tous les produits dont votre entreprise a besoin',
        filters: 'Prix, Localisation, Disponibilité, Marque',
      },
    },
    {
      id: 'profile',
      name: 'Profil',
      elements: 12,
      status: 'Actif',
      content: {
        title: 'Mon profil entreprise',
        subtitle: 'Gérez votre compte et vos informations',
        sections: ['Informations générales', 'Documents légaux', 'Historique des commandes', 'Paramètres de sécurité'],
      },
    },
  ]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('adminAuth');
      const storedEmail = localStorage.getItem('adminEmail');
      if (stored === 'true' && storedEmail === 'mirebshop@gmail.com') {
        setAdminAuth(true);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'mirebshop@gmail.com' && password === 'Fiacre-19') {
      setAdminAuth(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('adminAuth', 'true');
        localStorage.setItem('adminEmail', email);
      }
    } else {
      alert('Identifiants administrateur incorrects');
    }
  };

  const handleLogout = () => {
    setAdminAuth(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adminAuth');
      localStorage.removeItem('adminEmail');
    }
  };

  const handleDeleteDemo = async (type: string) => {
    const confirmMessage = `⚠️ ATTENTION - SUPPRESSION DÉFINITIVE ⚠️\n\nVous êtes sur le point de supprimer DÉFINITIVEMENT toutes les données "${type}".\n\nCette action est IRRÉVERSIBLE et ne peut pas être annulée.\n\nTapez "SUPPRIMER" pour confirmer :`;
    const userConfirmation = prompt(confirmMessage);

    if (userConfirmation === "SUPPRIMER") {
      const finalConfirm = confirm(`DERNIÈRE CONFIRMATION\n\nSuppression définitive de "${type}" en cours...\n\nCette action détruira définitivement toutes les données.\n\nConfirmez-vous cette suppression irréversible ?`);
      if (finalConfirm) {
        // Simulation de suppression définitive
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mise à jour des statistiques pour refléter la suppression
        if (type === 'Utilisateurs démo') {
          setStats(prev => ({ ...prev, totalUsers: prev.totalUsers - 45 }));
        }

        alert(`✅ SUPPRESSION TERMINÉE\n\n"${type}" ont été définitivement supprimés du système.\n\nCes données ne peuvent plus être récupérées.`);
      }
    } else if (userConfirmation !== null) {
      alert('❌ Suppression annulée - Vous devez taper exactement "SUPPRIMER" pour confirmer.');
    }
  };

  const handleDeleteAllDemo = async () => {
    const confirmMessage = `🚨 SUPPRESSION MASSIVE DÉFINITIVE 🚨\n\nVous allez supprimer TOUTES les données de démonstration :\n• Tous les utilisateurs démo\n• Toutes les commandes test\n• Tous les produits fictifs\n• Tous les messages démo\n• Tous les médias temporaires\n\nCette action est IRRÉVERSIBLE et vide complètement la base de données de démonstration.\n\nTapez "TOUT SUPPRIMER" pour confirmer :`;
    const userConfirmation = prompt(confirmMessage);

    if (userConfirmation === "TOUT SUPPRIMER") {
      const finalConfirm = confirm(`⚠️ CONFIRMATION FINALE ⚠️\n\nSuppression complète de TOUTES les données démo.\n\nCette action :\n• Supprime définitivement 558 éléments\n• Vide la base de données de démonstration\n• Ne peut pas être annulée\n\nConfirmez-vous cette suppression massive ?`);
      if (finalConfirm) {
        // Simulation de suppression massive
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Réinitialisation des statistiques
        setStats(prev => ({
          ...prev,
          totalUsers: prev.totalUsers - 45,
        }));

        alert(`✅ SUPPRESSION MASSIVE TERMINÉE\n\nToutes les données de démonstration ont été définitivement supprimées :\n• 45 utilisateurs démo\n• 123 commandes test\n• 89 produits fictifs\n• 234 messages démo\n• 67 médias temporaires\n\nTotal : 558 éléments supprimés définitivement`);
      }
    } else if (userConfirmation !== null) {
      alert('❌ Suppression annulée - Vous doivent taper exactement "TOUT SUPPRIMER" pour confirmer.');
    }
  };

  const handleBulkAction = async (action: string) => {
    if (confirm(`Êtes-vous sûr de vouloir ${action} tous les éléments sélectionnés ?`)) {
      alert(`Action ${action} exécutée avec succès`);
    }
  };

  const handleEditPage = (page: any) => {
    setEditingPage(page);
    setEditContent(JSON.stringify(page.content, null, 2));
    setShowEditModal(true);
  };

  const handleDeletePage = (pageName: string) => {
    if (confirm(`Êtes-vous sûr de vouloir supprimer la page "${pageName}" ?`)) {
      alert(`Page "${pageName}" supprimée avec succès !`);
    }
  };

  const handleSaveContent = () => {
    if (!editingPage) return;

    try {
      const parsedContent = JSON.parse(editContent);
      alert(`Contenu de la page "${editingPage.name}" mis à jour avec succès !`);
      setShowEditModal(false);
      setEditingPage(null);
      setEditContent('');
    } catch (error) {
      alert('Format JSON invalide. Veuillez vérifier votre saisie.');
    }
  };

  const handleEditProduct = (product: any) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      description: product.description || '',
      category: product.category.toLowerCase().replace(' & ', '-').replace(' ', '-'),
      supplier: product.supplier.toLowerCase().replace(' ', '-'),
      minPrice: product.price.split('-')[0].replace('€', ''),
      maxPrice: product.price.split('-')[1].replace('€', ''),
      minOrder: '100',
      stock: product.stock.includes('stock') ? product.stock.match(/\d+/)?.[0] || '0' : '0',
      active: product.status === 'active',
      featured: false
    });
    setShowProductModal(true);
  };

  const handleDuplicateProduct = (product: any) => {
    setEditingProduct(null);
    setProductForm({
      name: `${product.name} - Copie`,
      description: product.description || '',
      category: product.category.toLowerCase().replace(' & ', '-').replace(' ', '-'),
      supplier: product.supplier.toLowerCase().replace(' ', '-'),
      minPrice: product.price.split('-')[0].replace('€', ''),
      maxPrice: product.price.split('-')[1].replace('€', ''),
      minOrder: '100',
      stock: '0',
      active: false,
      featured: false
    });
    setShowProductModal(true);
  };

  const handleDeleteProduct = (productId: string, productName: string) => {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le produit "${productName}" ?`)) {
      alert(`Produit "${productName}" supprimé avec succès !`);
    }
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();

    if (!productForm.name || !productForm.category || !productForm.supplier || !productForm.minPrice || !productForm.maxPrice) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    if (parseFloat(productForm.minPrice) >= parseFloat(productForm.maxPrice)) {
      alert('Le prix maximum doit être supérieur au prix minimum.');
      return;
    }

    const action = editingProduct ? 'modifié' : 'créé';
    alert(`Produit "${productForm.name}" ${action} avec succès !`);

    // Reset form
    setProductForm({
      name: '',
      description: '',
      category: '',
      supplier: '',
      minPrice: '',
      maxPrice: '',
      minOrder: '',
      stock: '',
      active: true,
      featured: false
    });
    setEditingProduct(null);
    setShowProductModal(false);
  };

  if (!adminAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-4">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="ri-shield-user-line text-blue-600 text-2xl"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Administration Mireb
            </h1>
            <p className="text-gray-600">
              Contrôle total de la plateforme RDC
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email administrateur
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mirebshop@gmail.com"
                className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 !rounded-button font-medium"
            >
              Accès administrateur complet
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              Support: WhatsApp +243 842 267 252
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="ri-shield-user-fill text-blue-600"></i>
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">Admin Mireb - Contrôle Total</h1>
              <p className="text-xs text-gray-500">République Démocratique du Congo</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-8 h-8 flex items-center justify-center"
          >
            <i className="ri-logout-box-line text-gray-600"></i>
          </button>
        </div>

        {/* Admin Tabs */}
        <div className="flex overflow-x-auto px-4 pb-2">
          {[
            { id: 'dashboard', label: 'Tableau de bord', icon: 'ri-dashboard-line' },
            { id: 'users', label: 'Utilisateurs', icon: 'ri-user-line' },
            { id: 'content', label: 'Contenu', icon: 'ri-file-text-line' },
            { id: 'orders', label: 'Commandes', icon: 'ri-shopping-bag-line' },
            { id: 'products', label: 'Produits', icon: 'ri-box-line' },
            { id: 'messages', label: 'Messages', icon: 'ri-message-3-line' },
            { id: 'payments', label: 'Paiements', icon: 'ri-bank-card-line' },
            { id: 'cleanup', label: 'Nettoyage', icon: 'ri-delete-bin-line' },
            { id: 'calls', label: 'Appels', icon: 'ri-phone-line' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap mr-2 ${
                activeTab === tab.id
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600'
              }`}
            >
              <i className={tab.icon}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="pt-32 px-4 pb-6">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Control Panel */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Contrôles Administrateur</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/admin/users" className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <i className="ri-user-settings-line text-blue-600"></i>
                  <span className="text-sm font-medium text-blue-700">Gérer Utilisateurs</span>
                </Link>

                <button
                  onClick={() => setActiveTab('content')}
                  className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg"
                >
                  <i className="ri-edit-box-line text-green-600"></i>
                  <span className="text-sm font-medium text-green-700">Éditer Contenu</span>
                </button>

                <button
                  onClick={() => setActiveTab('cleanup')}
                  className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg"
                >
                  <i className="ri-delete-bin-line text-red-600"></i>
                  <span className="text-sm font-medium text-red-700">Supprimer Démos</span>
                </button>

                <Link href="/admin/analytics" className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <i className="ri-line-chart-line text-purple-600"></i>
                  <span className="text-sm font-medium text-purple-700">Analyses</span>
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-user-line text-blue-600"></i>
                  </div>
                  <span className="text-xs text-green-600">+12%</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</div>
                <div className="text-xs text-gray-600">Utilisateurs totaux</div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-shopping-bag-line text-green-600"></i>
                  </div>
                  <span className="text-xs text-green-600">+8%</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stats.activeOrders}</div>
                <div className="text-xs text-gray-600">Commandes actives</div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <i className="ri-money-dollar-circle-line text-yellow-600"></i>
                  </div>
                  <span className="text-xs text-green-600">+23%</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stats.totalRevenue}</div>
                <div className="text-xs text-gray-600">Chiffre d'affaires</div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="ri-message-3-line text-purple-600"></i>
                  </div>
                  <span className="text-xs text-red-600">Urgent</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stats.unreadMessages}</div>
                <div className="text-xs text-gray-600">Messages non lus</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Gestion du contenu</h2>
              <button className="px-4 py-2 bg-blue-600 text-white !rounded-button text-sm font-medium">
                <i className="ri-add-line mr-2"></i>
                Nouvelle page
              </button>
            </div>

            <div className="space-y-3">
              {pageContents.map((page, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{page.name}</h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        page.status === 'Actif'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {page.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600">{page.elements} éléments</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditPage(page)}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium"
                      >
                        <i className="ri-edit-line mr-1"></i>
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDeletePage(page.name)}
                        className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm font-medium"
                      >
                        <i className="ri-delete-bin-line mr-1"></i>
                        Supprimer
                      </button>
                    </div>
                  </div>

                  {/* Content Preview */}
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Aperçu du contenu :</div>
                    <div className="text-sm text-gray-700">
                      {typeof page.content === 'object' && page.content.title ? (
                        <div>
                          <div className="font-medium">{page.content.title}</div>
                          {page.content.subtitle && (
                            <div className="text-xs text-gray-600 mt-1">{page.content.subtitle}</div>
                          )}
                        </div>
                      ) : (
                        'Contenu personnalisé disponible'
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <i className="ri-information-line text-blue-600"></i>
                <span className="font-medium text-blue-800">Actions globales</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => alert('Sauvegarde complète effectuée !')}
                  className="py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium"
                >
                  <i className="ri-save-line mr-1"></i>
                  Sauvegarder tout
                </button>
                <button
                  onClick={() => alert('Contenu restauré depuis la dernière sauvegarde !')}
                  className="py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium"
                >
                  <i className="ri-history-line mr-1"></i>
                  Restaurer
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cleanup' && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Nettoyage des données</h2>

            <div className="bg-red-50 p-4 rounded-xl border border-red-200">
              <div className="flex items-center space-x-2 mb-2">
                <i className="ri-alert-line text-red-600"></i>
                <span className="font-medium text-red-800">Zone de suppression définitive</span>
              </div>
              <p className="text-sm text-red-700 mb-4">
                ⚠️ Ces actions suppriment définitivement les données. Aucune récupération possible.
              </p>
              <div className="bg-red-100 p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <i className="ri-error-warning-line text-red-600"></i>
                  <span className="text-xs font-medium text-red-800">
                    IRRÉVERSIBLE - Les données supprimées ne peuvent plus être récupérées
                  </span>
                </div>
              </div>
            </div>

            {/* Suppression individuelle */}
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Suppression par catégorie</h3>
              {[
                { type: 'Utilisateurs démo', count: 45, action: 'users', icon: 'ri-user-line' },
                { type: 'Commandes test', count: 123, action: 'orders', icon: 'ri-shopping-bag-line' },
                { type: 'Produits fictifs', count: 89, action: 'products', icon: 'ri-box-line' },
                { type: 'Messages démo', count: 234, action: 'messages', icon: 'ri-message-line' },
                { type: 'Médias temporaires', count: 67, action: 'media', icon: 'ri-image-line' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-red-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                        <i className={`${item.icon} text-red-600`}></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{item.type}</h4>
                        <p className="text-sm text-gray-600">{item.count} éléments à supprimer</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteDemo(item.type)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                    >
                      <i className="ri-delete-bin-line mr-1"></i>
                      Supprimer définitivement
                    </button>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-xs text-red-600">
                      <i className="ri-alert-line"></i>
                      <span>Suppression irréversible - Aucune récupération possible</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Suppression massive */}
            <div className="bg-red-600 p-4 rounded-xl">
              <div className="flex items-center space-x-2 mb-3">
                <i className="ri-delete-bin-fill text-white text-lg"></i>
                <span className="font-bold text-white">Suppression massive</span>
              </div>
              <p className="text-red-100 text-sm mb-4">
                Supprimer TOUTES les données de démonstration en une seule action
              </p>
              <div className="bg-red-700 p-3 rounded-lg mb-4">
                <div className="text-white text-xs space-y-1">
                  <div>• 558 éléments au total seront supprimés</div>
                  <div>• Action irréversible et définitive</div>
                  <div>• Nettoyage complet de la base de données de démonstration</div>
                </div>
              </div>
              <button
                onClick={handleDeleteAllDemo}
                className="w-full py-3 bg-white text-red-600 rounded-lg font-bold hover:bg-red-50 transition-colors"
              >
                <i className="ri-delete-bin-fill mr-2"></i>
                SUPPRIMER TOUTES LES DONNÉES DÉMO
              </button>
            </div>

            {/* Statistiques de suppression */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <h4 className="font-medium text-gray-900 mb-3">Historique des suppressions</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Dernière suppression :</span>
                  <span>Jamais</span>
                </div>
                <div className="flex justify-between">
                  <span>Éléments supprimés aujourd'hui :</span>
                  <span>0</span>
                </div>
                <div className="flex justify-between">
                  <span>Total supprimé ce mois :</span>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'calls' && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Gestion des appels</h2>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-phone-line text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">WhatsApp Business</h3>
                  <p className="text-sm text-gray-600">+243 842 267 252</p>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-green-700">Appels en attente</span>
                  <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">7</span>
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium text-blue-700">Messages non lus</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">23</span>
                </button>

                <button className="w-full flex items-center justify-center p-3 bg-green-600 text-white rounded-lg">
                  <i className="ri-phone-line mr-2"></i>
                  <span className="font-medium">Ouvrir WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Contacts récents</h3>
              {[
                { name: 'SODIMICO SARL', phone: '+243 99 000 0001', status: 'Manqué', time: '2h' },
                { name: 'KAMB Industries', phone: '+243 99 000 0002', status: 'Répondu', time: '5h' },
                { name: 'GECAMINES', phone: '+243 99 000 0004', status: 'En cours', time: '1j' },
              ].map((contact, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="ri-building-line text-blue-600"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{contact.name}</h4>
                        <p className="text-sm text-gray-600">{contact.phone}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          contact.status === 'Manqué'
                            ? 'bg-red-100 text-red-600'
                            : contact.status === 'Répondu'
                              ? 'bg-green-100 text-green-600'
                              : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {contact.status === 'Manqué' ? 'Manqué' : contact.status === 'Répondu' ? 'Répondu' : 'En cours'}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{contact.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Gestion des messages</h2>
              <button className="px-4 py-2 bg-blue-600 text-white !rounded-button text-sm font-medium">
                <i className="ri-settings-line mr-2"></i>
                Paramètres
              </button>
            </div>

            {/* Message Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-message-3-line text-blue-600"></i>
                  </div>
                  <span className="text-xs text-green-600">+15%</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stats.totalMessages.toLocaleString()}</div>
                <div className="text-xs text-gray-600">Total messages</div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <i className="ri-notification-badge-line text-orange-600"></i>
                  </div>
                  <span className="text-xs text-red-600">Urgent</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stats.unreadMessages}</div>
                <div className="text-xs text-gray-600">Non lus</div>
              </div>
            </div>

            {/* Recent Conversations */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Conversations récentes</h3>
              </div>
              <div className="space-y-0">
                {[
                  {
                    id: 1,
                    participants: 'SODIMICO SARL ↔ TechGlobal Ltd.',
                    lastMessage: 'Confirmation de commande pour 500 unités',
                    time: '14:32',
                    status: 'active',
                    priority: 'normal',
                  },
                  {
                    id: 2,
                    participants: 'KAMB Industries ↔ Fashion Europe',
                    lastMessage: 'Problème avec la livraison',
                    time: '12:45',
                    status: 'reported',
                    priority: 'high',
                  },
                  {
                    id: 3,
                    participants: 'METALKAM SARL ↔ Industrial Pro',
                    lastMessage: 'Demande de devis personnalisé',
                    time: 'Hier',
                    status: 'active',
                    priority: 'normal',
                  },
                  {
                    id: 4,
                    participants: 'GECAMINES ↔ GreenTech Solutions',
                    lastMessage: 'Spam détecté automatiquement',
                    time: 'Hier',
                    status: 'flagged',
                    priority: 'high',
                  },
                ].map((conv) => (
                  <div key={conv.id} className="p-4 border-b border-gray-50 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-gray-900 text-sm">{conv.participants}</h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            conv.status === 'reported'
                              ? 'bg-red-100 text-red-600'
                              : conv.status === 'flagged'
                                ? 'bg-orange-100 text-orange-600'
                                : 'bg-green-100 text-green-600'
                          }`}
                        >
                          {conv.status === 'reported' ? 'Signalé' : conv.status === 'flagged' ? 'Suspect' : 'Actif'}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{conv.lastMessage}</p>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm">
                        <i className="ri-eye-line mr-1"></i>
                        Voir
                      </button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm">
                        <i className="ri-edit-line mr-1"></i>
                        Modérer
                      </button>
                      {conv.status !== 'active' && (
                        <button className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm">
                          <i className="ri-delete-bin-line mr-1"></i>
                          Supprimer
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Controls */}
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Contrôles de modération</h3>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <i className="ri-error-warning-line text-red-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Signalements</h4>
                      <p className="text-sm text-gray-600">{stats.reportedConversations} conversations signalées</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium">
                    <i className="ri-shield-check-line mr-1"></i>
                    Examiner
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <i className="ri-spam-line text-orange-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Détection automatique</h4>
                      <p className="text-sm text-gray-600">Spam et contenu inapproprié</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium">
                    <i className="ri-settings-line mr-1"></i>
                    Configurer
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-notification-line text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Notifications push</h4>
                      <p className="text-sm text-gray-600">Alertes administrateur</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                    <i className="ri-notification-badge-line mr-1"></i>
                    Gérer
                  </button>
                </div>
              </div>
            </div>

            {/* Bulk Actions */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <h4 className="font-medium text-gray-900 mb-3">Actions groupées</h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => alert('Suppression des messages spam en cours...')}
                  className="py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium"
                >
                  <i className="ri-delete-bin-line mr-1"></i>
                  Supprimer spam
                </button>
                <button
                  onClick={() => alert('Archivage des anciennes conversations...')}
                  className="py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium"
                >
                  <i className="ri-archive-line mr-1"></i>
                  Archiver anciennes
                </button>
                <button
                  onClick={() => alert('Sauvegarde des conversations importantes...')}
                  className="py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium"
                >
                  <i className="ri-save-line mr-1"></i>
                  Sauvegarder
                </button>
                <button
                  onClick={() => alert('Génération du rapport mensuel...')}
                  className="py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium"
                >
                  <i className="ri-file-chart-line mr-1"></i>
                  Rapport
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Gestion des produits</h2>
              <button
                onClick={() => setShowProductModal(true)}
                className="px-4 py-2 bg-blue-600 text-white !rounded-button text-sm font-medium"
              >
                <i className="ri-add-line mr-2"></i>
                Nouveau produit
              </button>
            </div>

            {/* Product Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-box-line text-blue-600"></i>
                  </div>
                  <span className="text-xs text-green-600">+18%</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">2,847</div>
                <div className="text-xs text-gray-600">Produits totaux</div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-eye-line text-green-600"></i>
                  </div>
                  <span className="text-xs text-green-600">+25%</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">156K</div>
                <div className="text-xs text-gray-600">Vues produits</div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <i className="ri-alert-line text-orange-600"></i>
                  </div>
                  <span className="text-xs text-orange-600">Attention</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">23</div>
                <div className="text-xs text-gray-600">Stock faible</div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="ri-pause-line text-red-600"></i>
                  </div>
                  <span className="text-xs text-red-600">Inactif</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">67</div>
                <div className="text-xs text-gray-600">Produits désactivés</div>
              </div>
            </div>

            {/* Product List */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Produits récents</h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm">
                      <i className="ri-filter-line mr-1"></i>
                      Filtrer
                    </button>
                    <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm">
                      <i className="ri-download-line mr-1"></i>
                      Exporter
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-0">
                {[
                  {
                    id: 'PRD_001',
                    name: 'Smartphone Premium Pro Max 256GB',
                    category: 'Électronique',
                    price: '€299-€899',
                    stock: 'En stock (2,456)',
                    status: 'active',
                    views: '1,234',
                    orders: '89',
                    supplier: 'TechGlobal Ltd.',
                    image: 'https://readdy.ai/api/search-image?query=Premium%20smartphone%20product%20photography%2C%20sleek%20modern%20design%20mobile%20phone%2C%20high-quality%20commercial%20photography%2C%20clean%20white%20background%2C%20professional%20lighting%2C%20detailed%20view%2C%20realistic%20rendering%2C%20premium%20quality%2C%20sharp%20focus%2C%20product%20catalog%20style&width=60&height=60&seq=prod-1&orientation=squarish',
                  },
                  {
                    id: 'PRD_002',
                    name: 'Machine CNC Industrielle Pro 5000',
                    category: 'Industrie',
                    price: '€15,000-€45,000',
                    stock: 'Stock faible (3)',
                    status: 'active',
                    views: '567',
                    orders: '12',
                    supplier: 'Industrial Pro',
                    image: 'https://readdy.ai/api/search-image?query=Industrial%20CNC%20machine%2C%20modern%20manufacturing%20equipment%2C%20professional%20industrial%20photography%2C%20clean%20background%2C%20high-quality%20metalworking%20machinery%2C%20precision%20engineering%2C%20commercial%20product%20shot&width=60&height=60&seq=prod-2&orientation=squarish',
                  },
                  {
                    id: 'PRD_003',
                    name: 'Veste Business Homme Premium',
                    category: 'Mode & Textile',
                    price: '€45-€120',
                    stock: 'En stock (847)',
                    status: 'active',
                    views: '892',
                    orders: '34',
                    supplier: 'Fashion Europe',
                    image: 'https://readdy.ai/api/search-image?query=Premium%20business%20suit%20jacket%2C%20professional%20menswear%2C%20elegant%20formal%20clothing%2C%20commercial%20fashion%20photography%2C%20clean%20white%20background%2C%20high-quality%20textile%2C%20modern%20business%20attire&width=60&height=60&seq=prod-3&orientation=squarish',
                  },
                  {
                    id: 'PRD_004',
                    name: 'Ordinateur Portable Gaming RGB',
                    category: 'Électronique',
                    price: '€899-€1,499',
                    stock: 'Rupture de stock',
                    status: 'inactive',
                    views: '2,103',
                    orders: '156',
                    supplier: 'Gaming Tech Co.',
                    image: 'https://readdy.ai/api/search-image?query=Gaming%20laptop%20computer%2C%20RGB%20lighting%2C%20modern%20gaming%20hardware%2C%20professional%20product%20photography%2C%20clean%20background%2C%20high-tech%20gaming%20equipment%2C%20premium%20quality&width=60&height=60&seq=prod-4&orientation=squarish',
                  },
                ].map((product) => (
                  <div key={product.id} className="p-4 border-b border-gray-50 last:border-b-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-900 text-sm">{product.name}</h4>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              product.status === 'active'
                                ? 'bg-green-100 text-green-600'
                                : 'bg-red-100 text-red-600'
                            }`}
                          >
                            {product.status === 'active' ? 'Actif' : 'Inactif'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-gray-600">
                          <span>{product.category}</span>
                          <span>•</span>
                          <span>{product.supplier}</span>
                          <span>•</span>
                          <span>{product.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-3 text-xs">
                      <div className="text-center">
                        <div className="text-gray-500">Stock</div>
                        <div
                          className={`font-medium ${
                            product.stock.includes('faible') ? 'text-orange-600' :
                              product.stock.includes('Rupture') ? 'text-red-600' : 'text-green-600'
                          }`}
                        >
                          {product.stock}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-500">Vues</div>
                        <div className="font-medium text-gray-900">{product.views}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-500">Commandes</div>
                        <div className="font-medium text-gray-900">{product.orders}</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm"
                      >
                        <i className="ri-edit-line mr-1"></i>
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDuplicateProduct(product)}
                        className="px-3 py-1 bg-green-100 text-green-600 rounded-lg text-sm"
                      >
                        <i className="ri-file-copy-line mr-1"></i>
                        Dupliquer
                      </button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm">
                        <i className="ri-eye-line mr-1"></i>
                        Voir
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id, product.name)}
                        className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm"
                      >
                        <i className="ri-delete-bin-line mr-1"></i>
                        Supprimer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bulk Actions */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <h4 className="font-medium text-gray-900 mb-3">Actions groupées</h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => alert('Activation des produits sélectionnés...')}
                  className="py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium"
                >
                  <i className="ri-play-line mr-1"></i>
                  Activer sélection
                </button>
                <button
                  onClick={() => alert('Désactivation des produits sélectionnés...')}
                  className="py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium"
                >
                  <i className="ri-pause-line mr-1"></i>
                  Désactiver sélection
                </button>
                <button
                  onClick={() => alert('Export des produits en cours...')}
                  className="py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium"
                >
                  <i className="ri-download-line mr-1"></i>
                  Exporter CSV
                </button>
                <button
                  onClick={() => alert('Mise à jour des prix en cours...')}
                  className="py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium"
                >
                  <i className="ri-price-tag-line mr-1"></i>
                  Modifier prix
                </button>
              </div>
            </div>

            {/* Product Categories Management */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Gestion des catégories</h3>
              <div className="space-y-3">
                {[
                  'Électronique',
                  'Mode & Textile',
                  'Industrie',
                  'Automobile',
                  'Maison & Jardin',
                ].map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="ri-folder-line text-blue-600"></i>
                      </div>
                      <span className="font-medium text-gray-900">{category}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm">
                        Modifier
                      </button>
                      <button className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm">
                        Supprimer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg">
                <i className="ri-add-line mr-2"></i>
                Ajouter nouvelle catégorie
              </button>
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Gestion des paiements</h2>
              <button className="px-4 py-2 bg-blue-600 text-white !rounded-button text-sm font-medium">
                <i className="ri-file-download-line mr-2"></i>
                Export
              </button>
            </div>

            {/* Payment Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span className="text-xs text-green-600">93.7%</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stats.successfulPayments.toLocaleString()}</div>
                <div className="text-xs text-gray-600">Paiements réussis</div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="ri-close-line text-red-600"></i>
                  </div>
                  <span className="text-xs text-red-600">6.3%</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stats.failedPayments}</div>
                <div className="text-xs text-gray-600">Paiements échoués</div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <i className="ri-time-line text-orange-600"></i>
                  </div>
                  <span className="text-xs text-orange-600">Urgent</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stats.pendingPayments}</div>
                <div className="text-xs text-gray-600">En attente</div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="ri-refund-line text-purple-600"></i>
                  </div>
                  <span className="text-xs text-purple-600">Nouveau</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stats.refundsRequested}</div>
                <div className="text-xs text-gray-600">Demandes remboursement</div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Méthodes de paiement</h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-bank-line text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Virement bancaire</h4>
                      <p className="text-sm text-gray-600">{stats.bankTransfers} transactions</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">43.2M FC</div>
                    <div className="text-xs text-gray-500">48.3% du total</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-smartphone-line text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Mobile Money</h4>
                      <p className="text-sm text-gray-600">{stats.mobilePayments} transactions</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">46.2M FC</div>
                    <div className="text-xs text-gray-500">51.7% du total</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Transactions récentes</h3>
              </div>
              <div className="space-y-0">
                {[
                  {
                    id: 'PAY_001',
                    user: 'SODIMICO SARL',
                    amount: '2.4M FC',
                    method: 'Virement bancaire',
                    status: 'success',
                    time: '14:32',
                    orderId: 'CMD_78901',
                  },
                  {
                    id: 'PAY_002',
                    user: 'KAMB Industries',
                    amount: '890K FC',
                    method: 'Mobile Money',
                    status: 'pending',
                    time: '12:45',
                    orderId: 'CMD_78902',
                  },
                  {
                    id: 'PAY_003',
                    user: 'GECAMINES',
                    amount: '5.6M FC',
                    method: 'Virement bancaire',
                    status: 'failed',
                    time: '11:20',
                    orderId: 'CMD_78903',
                  },
                  {
                    id: 'PAY_004',
                    user: 'METALKAM SARL',
                    amount: '1.2M FC',
                    method: 'Mobile Money',
                    status: 'success',
                    time: 'Hier',
                    orderId: 'CMD_78904',
                  },
                ].map((transaction) => (
                  <div key={transaction.id} className="p-4 border-b border-gray-50 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-gray-900 text-sm">{transaction.user}</h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            transaction.status === 'success'
                              ? 'bg-green-100 text-green-600'
                              : transaction.status === 'pending'
                                ? 'bg-orange-100 text-orange-600'
                                : 'bg-red-100 text-red-600'
                          }`}
                        >
                          {transaction.status === 'success' ? 'Réussi' : transaction.status === 'pending' ? 'En attente' : 'Échoué'}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{transaction.time}</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-gray-600">
                        <p>{transaction.method} • {transaction.orderId}</p>
                      </div>
                      <div className="text-lg font-semibold text-gray-900">{transaction.amount}</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm">
                        <i className="ri-eye-line mr-1"></i>
                        Détails
                      </button>
                      {transaction.status === 'pending' && (
                        <button className="px-3 py-1 bg-green-100 text-green-600 rounded-lg text-sm">
                          <i className="ri-check-line mr-1"></i>
                          Valider
                        </button>
                      )}
                      {transaction.status === 'failed' && (
                        <button className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-sm">
                          <i className="ri-refresh-line mr-1"></i>
                          Relancer
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Controls */}
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Contrôles de paiement</h3>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <i className="ri-alert-line text-orange-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Paiements en attente</h4>
                      <p className="text-sm text-gray-600">{stats.pendingPayments} transactions nécessitent validation</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium">
                    <i className="ri-check-double-line mr-1"></i>
                    Traiter
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <i className="ri-error-warning-line text-red-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Paiements échoués</h4>
                      <p className="text-sm text-gray-600">Analyse des causes d'échec</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium">
                    <i className="ri-file-chart-line mr-1"></i>
                    Analyser
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <i className="ri-refund-line text-purple-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Demandes de remboursement</h4>
                      <p className="text-sm text-gray-600">{stats.refundsRequested} demandes en cours</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium">
                    <i className="ri-hand-coin-line mr-1"></i>
                    Gérer
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-settings-3-line text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Configuration paiements</h4>
                      <p className="text-sm text-gray-600">Paramètres des méthodes de paiement</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                    <i className="ri-settings-line mr-1"></i>
                    Configurer
                  </button>
                </div>
              </div>
            </div>

            {/* Bulk Actions */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <h4 className="font-medium text-gray-900 mb-3">Actions groupées</h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => alert('Validation des paiements en attente...')}
                  className="py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium"
                >
                  <i className="ri-check-double-line mr-1"></i>
                  Valider en attente
                </button>
                <button
                  onClick={() => alert('Export des transactions...')}
                  className="py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium"
                >
                  <i className="ri-file-download-line mr-1"></i>
                  Export Excel
                </button>
                <button
                  onClick={() => alert('Génération du rapport mensuel...')}
                  className="py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium"
                >
                  <i className="ri-file-chart-line mr-1"></i>
                  Rapport mensuel
                </button>
                <button
                  onClick={() => alert('Nettoyage des transactions anciennes...')}
                  className="py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium"
                >
                  <i className="ri-delete-bin-line mr-1"></i>
                  Nettoyer anciennes
                </button>
              </div>
            </div>

            {/* Payment Configuration */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Configuration des paiements RDC</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <i className="ri-bank-line text-blue-600"></i>
                    <div>
                      <h4 className="font-medium text-blue-800">Banques partenaires</h4>
                      <p className="text-xs text-blue-600">BCDC, TMB, Equity Bank, Rawbank</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
                    Gérer
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <i className="ri-smartphone-line text-green-600"></i>
                    <div>
                      <h4 className="font-medium text-green-800">Mobile Money</h4>
                      <p className="text-xs text-green-600">Orange Money, Airtel Money, M-Pesa</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm">
                    Gérer
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <i className="ri-percent-line text-orange-600"></i>
                    <div>
                      <h4 className="font-medium text-orange-800">Frais de transaction</h4>
                      <p className="text-xs text-orange-600">Commission Mireb : 2.5%</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-orange-600 text-white rounded-lg text-sm">
                    Modifier
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Edit Content Modal */}
      {showEditModal && editingPage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Modifier : {editingPage.name}
              </h3>
              <button onClick={() => setShowEditModal(false)}>
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contenu de la page (Format JSON)
                </label>
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full p-3 border border-gray-200 !rounded-button resize-none text-sm font-mono"
                  rows={12}
                  placeholder="Éditez le contenu JSON de la page..."
                />
              </div>

              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-start space-x-2">
                  <i className="ri-information-line text-blue-600 mt-1"></i>
                  <div>
                    <h4 className="font-medium text-blue-800 text-sm">Information</h4>
                    <p className="text-blue-700 text-xs">
                      Modifiez le contenu au format JSON. Chaque modification sera appliquée immédiatement sur la page.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 !rounded-button font-medium"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSaveContent}
                  className="flex-1 py-3 bg-blue-600 text-white !rounded-button font-medium"
                >
                  <i className="ri-save-line mr-2"></i>
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Product Modal */}
      {showProductModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingProduct ? 'Modifier le produit' : 'Nouveau produit'}
              </h3>
              <button onClick={() => setShowProductModal(false)}>
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4">
              {/* Product Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Images du produit
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <i className="ri-image-add-line text-gray-400 text-3xl mb-2"></i>
                  <p className="text-gray-600 text-sm mb-2">
                    Glissez vos images ici ou cliquez pour sélectionner
                  </p>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
                  >
                    Choisir les images
                  </button>
                </div>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom du produit *
                  </label>
                  <input
                    type="text"
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    placeholder="Ex: Smartphone Premium Pro Max"
                    className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={productForm.description}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    placeholder="Description détaillée du produit..."
                    className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900 resize-none"
                    rows="4"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Catégorie *
                    </label>
                    <select
                      value={productForm.category}
                      onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                      className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900"
                      required
                    >
                      <option value="">Sélectionner...</option>
                      <option value="electronique">Électronique</option>
                      <option value="mode-textile">Mode & Textile</option>
                      <option value="industrie">Industrie</option>
                      <option value="automobile">Automobile</option>
                      <option value="maison-jardin">Maison & Jardin</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fournisseur *
                    </label>
                    <select
                      value={productForm.supplier}
                      onChange={(e) => setProductForm({ ...productForm, supplier: e.target.value })}
                      className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900"
                      required
                    >
                      <option value="">Sélectionner...</option>
                      <option value="techglobal">TechGlobal Ltd.</option>
                      <option value="fashion-europe">Fashion Europe</option>
                      <option value="industrial-pro">Industrial Pro</option>
                      <option value="gaming-tech">Gaming Tech Co.</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 mb-3">Tarification</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prix minimum (€) *
                    </label>
                    <input
                      type="number"
                      value={productForm.minPrice}
                      onChange={(e) => setProductForm({ ...productForm, minPrice: e.target.value })}
                      placeholder="299"
                      className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prix maximum (€) *
                    </label>
                    <input
                      type="number"
                      value={productForm.maxPrice}
                      onChange={(e) => setProductForm({ ...productForm, maxPrice: e.target.value })}
                      placeholder="899"
                      className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Commande minimum
                    </label>
                    <input
                      type="number"
                      value={productForm.minOrder}
                      onChange={(e) => setProductForm({ ...productForm, minOrder: e.target.value })}
                      placeholder="100"
                      className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stock disponible
                    </label>
                    <input
                      type="number"
                      value={productForm.stock}
                      onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })}
                      placeholder="2456"
                      className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900"
                    />
                  </div>
                </div>
              </div>

              {/* SEO & Visibility */}
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 mb-3">Visibilité</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="active"
                      checked={productForm.active}
                      onChange={(e) => setProductForm({ ...productForm, active: e.target.checked })}
                      className="w-4 h-4 text-blue-600"
                    />
                    <label htmlFor="active" className="text-sm text-gray-700">
                      Produit actif et visible
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={productForm.featured}
                      onChange={(e) => setProductForm({ ...productForm, featured: e.target.checked })}
                      className="w-4 h-4 text-blue-600"
                    />
                    <label htmlFor="featured" className="text-sm text-gray-700">
                      Produit recommandé
                    </label>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowProductModal(false)}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 !rounded-button font-medium"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-blue-600 text-white !rounded-button font-medium"
                >
                  <i className="ri-save-line mr-2"></i>
                  {editingProduct ? 'Mettre à jour' : 'Créer le produit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
