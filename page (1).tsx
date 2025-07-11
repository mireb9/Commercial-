'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminContentPage() {
  const [selectedPage, setSelectedPage] = useState('all');
  const [selectedElement, setSelectedElement] = useState(null);
  const [editContent, setEditContent] = useState('');

  const pages = [
    {
      id: 'home',
      name: 'Accueil',
      elements: [
        { id: 'hero-title', type: 'text', content: 'Bienvenue sur Mireb', editable: true },
        { id: 'hero-subtitle', type: 'text', content: 'Plateforme B2B pour la République Démocratique du Congo', editable: true },
        { id: 'hero-image', type: 'image', content: 'banner-accueil.jpg', editable: true },
        { id: 'cta-button', type: 'button', content: 'Commencer maintenant', editable: true }
      ]
    },
    {
      id: 'categories',
      name: 'Catégories',
      elements: [
        { id: 'cat-title', type: 'text', content: 'Nos catégories', editable: true },
        { id: 'cat-btp', type: 'text', content: 'Matériaux BTP', editable: true },
        { id: 'cat-equip', type: 'text', content: 'Équipements', editable: true },
        { id: 'cat-outils', type: 'text', content: 'Outils', editable: true }
      ]
    },
    {
      id: 'profile',
      name: 'Profil',
      elements: [
        { id: 'profile-welcome', type: 'text', content: 'Mon profil', editable: true },
        { id: 'profile-settings', type: 'text', content: 'Paramètres du compte', editable: true },
        { id: 'profile-support', type: 'text', content: 'Service client', editable: true }
      ]
    }
  ];

  const allElements = pages.flatMap(page => 
    page.elements.map(element => ({ ...element, page: page.name }))
  );

  const filteredElements = selectedPage === 'all' 
    ? allElements 
    : pages.find(p => p.id === selectedPage)?.elements.map(el => ({ ...el, page: pages.find(p => p.id === selectedPage)?.name })) || [];

  const handleEdit = (element) => {
    setSelectedElement(element);
    setEditContent(element.content);
  };

  const handleSave = () => {
    if (selectedElement) {
      // Simulation de sauvegarde
      alert(`Contenu "${selectedElement.id}" mis à jour avec succès !`);
      setSelectedElement(null);
      setEditContent('');
    }
  };

  const handleDelete = (elementId) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      alert(`Élément "${elementId}" supprimé avec succès !`);
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'text': return 'bg-blue-100 text-blue-600';
      case 'image': return 'bg-green-100 text-green-600';
      case 'button': return 'bg-orange-100 text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'text': return 'ri-text';
      case 'image': return 'ri-image-line';
      case 'button': return 'ri-cursor-line';
      default: return 'ri-file-line';
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
              <h1 className="font-semibold text-gray-900">Éditeur de contenu</h1>
              <p className="text-xs text-gray-500">{filteredElements.length} élément(s)</p>
            </div>
          </div>
          <button className="w-8 h-8 flex items-center justify-center">
            <i className="ri-add-line text-blue-600"></i>
          </button>
        </div>

        {/* Page Filter */}
        <div className="px-4 pb-4">
          <select
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
            className="w-full py-3 px-4 bg-gray-50 border border-gray-200 !rounded-button"
          >
            <option value="all">Toutes les pages ({allElements.length} éléments)</option>
            {pages.map(page => (
              <option key={page.id} value={page.id}>
                {page.name} ({page.elements.length} éléments)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Content */}
      <div className="pt-32 px-4 pb-6">
        <div className="space-y-3">
          {filteredElements.map(element => (
            <div key={element.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getTypeColor(element.type)}`}>
                    <i className={`${getTypeIcon(element.type)}`}></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{element.id}</h4>
                    <p className="text-xs text-gray-500">{element.page}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(element.type)}`}>
                  {element.type}
                </span>
              </div>

              <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-800">{element.content}</p>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(element)}
                  className="flex-1 py-2 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium"
                  disabled={!element.editable}
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(element.id)}
                  className="px-4 py-2 bg-red-100 text-red-600 rounded-lg text-sm font-medium"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredElements.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-file-text-line text-4xl text-gray-300 mb-4"></i>
            <p className="text-gray-500">Aucun élément trouvé</p>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {selectedElement && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Modifier l'élément</h3>
              <button onClick={() => setSelectedElement(null)}>
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ID: {selectedElement.id}
                </label>
                <div className="text-xs text-gray-500 mb-2">
                  Type: {selectedElement.type} • Page: {selectedElement.page}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contenu
                </label>
                {selectedElement.type === 'text' ? (
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full p-3 border border-gray-200 !rounded-button resize-none"
                    rows={4}
                  />
                ) : (
                  <input
                    type="text"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full p-3 border border-gray-200 !rounded-button"
                  />
                )}
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedElement(null)}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 !rounded-button font-medium"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 py-3 bg-blue-600 text-white !rounded-button font-medium"
                >
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}