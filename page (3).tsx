
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'buyer',
    city: '',
    rccm: '',
    idNumber: '',
    status: 'pending'
  });

  const users = [
    {
      id: 'usr_001',
      name: 'SODIMICO SARL',
      email: 'contact@sodimico-rdc.cd',
      phone: '+243 99 000 0001',
      type: 'buyer',
      status: 'verified',
      city: 'Kinshasa',
      joinDate: '2024-01-15',
      orders: 156,
      totalSpent: '2.4M FC',
      rccm: 'CD/KIN/RCCM/24-A-00001',
      idNumber: 'NI-123456789-001'
    },
    {
      id: 'usr_002',
      name: 'KAMB Industries',
      email: 'info@kamb.cd',
      phone: '+243 99 000 0002',
      type: 'seller',
      status: 'pending',
      city: 'Lubumbashi',
      joinDate: '2024-03-10',
      products: 234,
      totalSales: '890K FC',
      rccm: 'CD/LBM/RCCM/24-B-00002',
      idNumber: 'NI-123456789-002'
    },
    {
      id: 'usr_003',
      name: 'METALKAM SARL',
      email: 'admin@metalkam.cd',
      phone: '+243 99 000 0003',
      type: 'seller',
      status: 'verified',
      city: 'Kinshasa',
      joinDate: '2024-02-20',
      products: 89,
      totalSales: '1.2M FC',
      rccm: 'CD/KIN/RCCM/24-C-00003',
      idNumber: 'NI-123456789-003'
    },
    {
      id: 'usr_004',
      name: 'GECAMINES',
      email: 'commercial@gecamines.cd',
      phone: '+243 99 000 0004',
      type: 'buyer',
      status: 'verified',
      city: 'Kolwezi',
      joinDate: '2024-01-05',
      orders: 67,
      totalSpent: '5.6M FC',
      rccm: 'CD/KOL/RCCM/24-D-00004',
      idNumber: 'NI-123456789-004'
    },
    {
      id: 'usr_005',
      name: 'CONSTRUCTION PLUS',
      email: 'contact@constructionplus.cd',
      phone: '+243 99 000 0005',
      type: 'buyer',
      status: 'suspended',
      city: 'Goma',
      joinDate: '2024-02-28',
      orders: 23,
      totalSpent: '450K FC',
      rccm: 'CD/GOM/RCCM/24-E-00005',
      idNumber: 'NI-123456789-005'
    }
  ];

  const rdcCities = [
    'Kinshasa', 'Lubumbashi', 'Goma', 'Kolwezi', 'Bukavu', 'Mbuji-Mayi', 
    'Kisangani', 'Matadi', 'Kananga', 'Tshikapa'
  ];

  const generateUserId = () => {
    return 'usr_' + Math.random().toString(36).substr(2, 9);
  };

  const generateRCCM = (city: string) => {
    const cityCode = city === 'Kinshasa' ? 'KIN' : 
                     city === 'Lubumbashi' ? 'LBM' : 
                     city === 'Goma' ? 'GOM' : 
                     city === 'Kolwezi' ? 'KOL' : 'OTH';
    const number = Math.floor(Math.random() * 99999) + 1;
    return `CD/${cityCode}/RCCM/24-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}-${number.toString().padStart(5, '0')}`;
  };

  const generateIdNumber = () => {
    const number = Math.floor(Math.random() * 999999999) + 100000000;
    const suffix = Math.floor(Math.random() * 999) + 1;
    return `NI-${number}-${suffix.toString().padStart(3, '0')}`;
  };

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.phone || !newUser.city) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const userId = generateUserId();
    const rccm = generateRCCM(newUser.city);
    const idNumber = generateIdNumber();

    const userToAdd = {
      id: userId,
      ...newUser,
      rccm,
      idNumber,
      joinDate: new Date().toISOString().split('T')[0],
      orders: 0,
      totalSpent: '0 FC',
      products: 0,
      totalSales: '0 FC'
    };

    console.log('Nouvel utilisateur ajouté:', userToAdd);
    alert(`Utilisateur ${newUser.name} ajouté avec succès!\nID: ${userId}\nRCCM: ${rccm}\nID Unique: ${idNumber}`);
    
    // Reset form
    setNewUser({
      name: '',
      email: '',
      phone: '',
      type: 'buyer',
      city: '',
      rccm: '',
      idNumber: '',
      status: 'pending'
    });
    setShowAddUserModal(false);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || user.type === filterType;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleBulkAction = (action: string) => {
    alert(`Action ${action} appliquée à ${selectedUsers.length} utilisateur(s)`);
    setSelectedUsers([]);
  };

  const handleUserAction = (userId: string, action: string) => {
    const user = users.find(u => u.id === userId);
    alert(`Action ${action} appliquée à ${user?.name}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-600';
      case 'pending': return 'bg-orange-100 text-orange-600';
      case 'suspended': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'verified': return 'Vérifié';
      case 'pending': return 'En attente';
      case 'suspended': return 'Suspendu';
      default: return 'Inactif';
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
              <h1 className="font-semibold text-gray-900">Gestion des utilisateurs</h1>
              <p className="text-xs text-gray-500">{filteredUsers.length} utilisateur(s)</p>
            </div>
          </div>
          <button 
            onClick={() => setShowAddUserModal(true)}
            className="w-8 h-8 flex items-center justify-center"
          >
            <i className="ri-add-line text-blue-600"></i>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="px-4 pb-4 space-y-3">
          <div className="relative">
            <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Rechercher par nom ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 !rounded-button"
            />
          </div>

          <div className="flex space-x-2">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="flex-1 py-2 px-3 bg-white border border-gray-200 !rounded-button text-sm"
            >
              <option value="all">Tous les types</option>
              <option value="buyer">Acheteurs</option>
              <option value="seller">Vendeurs</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="flex-1 py-2 px-3 bg-white border border-gray-200 !rounded-button text-sm"
            >
              <option value="all">Tous les statuts</option>
              <option value="verified">Vérifiés</option>
              <option value="pending">En attente</option>
              <option value="suspended">Suspendus</option>
            </select>
          </div>

          {/* Bulk Actions */}
          {selectedUsers.length > 0 && (
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm text-blue-700">
                {selectedUsers.length} utilisateur(s) sélectionné(s)
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleBulkAction('verify')}
                  className="px-3 py-1 bg-green-100 text-green-600 rounded-lg text-sm"
                >
                  Vérifier
                </button>
                <button
                  onClick={() => handleBulkAction('suspend')}
                  className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm"
                >
                  Suspendre
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="pt-48 px-4 pb-6">
        <div className="space-y-3">
          {filteredUsers.map(user => (
            <div key={user.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => toggleUserSelection(user.id)}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-building-line text-blue-600 text-lg"></i>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-gray-900 truncate">{user.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(user.status)}`}>
                      {getStatusText(user.status)}
                    </span>
                  </div>

                  <div className="space-y-1 text-sm text-gray-600">
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <div className="flex items-center space-x-4">
                      <span className="capitalize">{user.type === 'buyer' ? 'Acheteur' : 'Vendeur'}</span>
                      <span>•</span>
                      <span>{user.city}</span>
                      <span>•</span>
                      <span>Depuis {new Date(user.joinDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <div className="text-sm">
                      <strong className="text-gray-900">
                        {user.type === 'buyer' 
                          ? `${user.orders} commandes • ${user.totalSpent}`
                          : `${user.products} produits • ${user.totalSales}`
                        }
                      </strong>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleUserAction(user.id, 'view')}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
                      >
                        <i className="ri-eye-line text-gray-600"></i>
                      </button>
                      <button
                        onClick={() => handleUserAction(user.id, 'edit')}
                        className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full"
                      >
                        <i className="ri-edit-line text-blue-600"></i>
                      </button>
                      <button
                        onClick={() => handleUserAction(user.id, 'more')}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
                      >
                        <i className="ri-more-2-line text-gray-600"></i>
                      </button>
                    </div>
                  </div>

                  {/* Legal Info */}
                  <div className="mt-2 p-2 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-500 space-y-1">
                      <p><strong>RCCM:</strong> {user.rccm}</p>
                      <p><strong>ID Unique:</strong> {user.idNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-user-line text-4xl text-gray-300 mb-4"></i>
            <p className="text-gray-500">Aucun utilisateur trouvé</p>
          </div>
        )}
      </div>

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Ajouter un utilisateur</h3>
              <button onClick={() => setShowAddUserModal(false)}>
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de l'entreprise *
                </label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  placeholder="ENTREPRISE SARL"
                  className="w-full p-3 border border-gray-200 !rounded-button"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email professionnel *
                </label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  placeholder="contact@entreprise.cd"
                  className="w-full p-3 border border-gray-200 !rounded-button"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  value={newUser.phone}
                  onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
                  placeholder="+243 99 000 0000"
                  className="w-full p-3 border border-gray-200 !rounded-button"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type d'utilisateur
                </label>
                <select
                  value={newUser.type}
                  onChange={(e) => setNewUser({...newUser, type: e.target.value})}
                  className="w-full p-3 border border-gray-200 !rounded-button"
                >
                  <option value="buyer">Acheteur</option>
                  <option value="seller">Vendeur</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ville RDC *
                </label>
                <select
                  value={newUser.city}
                  onChange={(e) => setNewUser({...newUser, city: e.target.value})}
                  className="w-full p-3 border border-gray-200 !rounded-button"
                  required
                >
                  <option value="">Sélectionner une ville</option>
                  {rdcCities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Statut initial
                </label>
                <select
                  value={newUser.status}
                  onChange={(e) => setNewUser({...newUser, status: e.target.value})}
                  className="w-full p-3 border border-gray-200 !rounded-button"
                >
                  <option value="pending">En attente de vérification</option>
                  <option value="verified">Vérifié</option>
                  <option value="suspended">Suspendu</option>
                </select>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <i className="ri-information-line text-blue-600 mt-1"></i>
                  <div>
                    <h4 className="font-medium text-blue-800 mb-1">Génération automatique</h4>
                    <p className="text-blue-700 text-sm">
                      Le RCCM et l'ID unique seront générés automatiquement selon les standards RDC
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowAddUserModal(false)}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 !rounded-button font-medium"
                >
                  Annuler
                </button>
                <button
                  onClick={handleAddUser}
                  className="flex-1 py-3 bg-blue-600 text-white !rounded-button font-medium"
                >
                  Ajouter l'utilisateur
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}