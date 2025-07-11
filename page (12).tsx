
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const mediaFiles = [
    { 
      id: 1, 
      name: 'banner-accueil.jpg', 
      type: 'image', 
      size: '1.2 MB', 
      date: '2024-01-15',
      url: 'https://readdy.ai/api/search-image?query=modern%20business%20banner%20with%20blue%20gradient%20background%2C%20professional%20corporate%20design%2C%20clean%20layout&width=800&height=400&seq=banner1&orientation=landscape'
    },
    { 
      id: 2, 
      name: 'logo-mireb.png', 
      type: 'image', 
      size: '250 KB', 
      date: '2024-01-10',
      url: 'https://readdy.ai/api/search-image?query=professional%20business%20logo%2C%20modern%20design%2C%20blue%20and%20white%20colors%2C%20corporate%20identity&width=200&height=200&seq=logo1&orientation=squarish'
    },
    { 
      id: 3, 
      name: 'produits-catalogue.pdf', 
      type: 'document', 
      size: '5.8 MB', 
      date: '2024-01-12',
      url: null
    },
    { 
      id: 4, 
      name: 'video-presentation.mp4', 
      type: 'video', 
      size: '15.3 MB', 
      date: '2024-01-08',
      url: null
    },
    { 
      id: 5, 
      name: 'categories-icons.zip', 
      type: 'archive', 
      size: '3.1 MB', 
      date: '2024-01-14',
      url: null
    },
    { 
      id: 6, 
      name: 'equipe-photo.jpg', 
      type: 'image', 
      size: '2.1 MB', 
      date: '2024-01-11',
      url: 'https://readdy.ai/api/search-image?query=professional%20business%20team%20photo%2C%20diverse%20group%20of%20people%20in%20modern%20office%2C%20corporate%20photography%2C%20happy%20colleagues&width=600&height=400&seq=team1&orientation=landscape'
    }
  ];

  const storageInfo = {
    used: 127.3,
    total: 200,
    percentage: 64
  };

  const filterFiles = (type) => {
    if (type === 'all') return mediaFiles;
    return mediaFiles.filter(file => file.type === type);
  };

  const handleUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          alert('Fichier uploadé avec succès !');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const getFileIcon = (type) => {
    switch(type) {
      case 'image': return 'ri-image-line';
      case 'video': return 'ri-video-line';
      case 'document': return 'ri-file-text-line';
      case 'archive': return 'ri-file-zip-line';
      default: return 'ri-file-line';
    }
  };

  const getFileColor = (type) => {
    switch(type) {
      case 'image': return 'text-green-600 bg-green-100';
      case 'video': return 'text-red-600 bg-red-100';
      case 'document': return 'text-blue-600 bg-blue-100';
      case 'archive': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Navigation Bar */}
      <div className="fixed top-0 w-full bg-white shadow-sm z-10">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="text-blue-600">
            <i className="ri-arrow-left-line text-xl"></i>
          </Link>
          <h1 className="text-lg font-semibold">Gestionnaire Média</h1>
          <button 
            onClick={handleUpload}
            className="text-blue-600"
            disabled={isUploading}
          >
            <i className="ri-upload-line text-xl"></i>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 px-4">
        {/* Storage Info */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Espace de stockage</span>
            <span className="text-sm text-gray-600">
              {storageInfo.used} GB / {storageInfo.total} GB
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${storageInfo.percentage}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {storageInfo.total - storageInfo.used} GB disponible
          </div>
        </div>

        {/* Upload Progress */}
        {isUploading && (
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex items-center space-x-3 mb-2">
              <i className="ri-upload-line text-blue-600"></i>
              <span className="text-sm font-medium">Upload en cours...</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">{uploadProgress}%</div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'all', name: 'Tous', count: mediaFiles.length },
            { id: 'image', name: 'Images', count: mediaFiles.filter(f => f.type === 'image').length },
            { id: 'video', name: 'Vidéos', count: mediaFiles.filter(f => f.type === 'video').length },
            { id: 'document', name: 'Docs', count: mediaFiles.filter(f => f.type === 'document').length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              {tab.name} ({tab.count})
            </button>
          ))}
        </div>

        {/* Files Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {filterFiles(activeTab).map(file => (
            <div key={file.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {file.url && file.type === 'image' ? (
                <img 
                  src={file.url} 
                  alt={file.name}
                  className="w-full h-24 object-cover object-top"
                />
              ) : (
                <div className="w-full h-24 bg-gray-100 flex items-center justify-center">
                  <i className={`${getFileIcon(file.type)} text-2xl ${getFileColor(file.type).split(' ')[0]}`}></i>
                </div>
              )}
              
              <div className="p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${getFileColor(file.type)}`}>
                    <i className={`${getFileIcon(file.type)} text-xs`}></i>
                  </div>
                  <span className="text-xs font-medium truncate flex-1">{file.name}</span>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>{file.size}</div>
                  <div>{file.date}</div>
                </div>
                <div className="flex space-x-2 mt-2">
                  <button className="text-blue-600 text-xs">
                    <i className="ri-eye-line"></i>
                  </button>
                  <button className="text-green-600 text-xs">
                    <i className="ri-download-line"></i>
                  </button>
                  <button className="text-red-600 text-xs">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Drive Connection */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-google-fill text-blue-600"></i>
              </div>
              <div>
                <div className="font-medium text-sm">Google Drive</div>
                <div className="text-xs text-gray-500">mirebshop@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-600 font-medium">Connecté</span>
            </div>
          </div>
          <div className="mt-3 text-xs text-gray-600">
            Dernière synchronisation: il y a 5 minutes
          </div>
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
        <Link href="/media" className="flex flex-col items-center justify-center text-blue-600">
          <i className="ri-folder-line text-lg"></i>
          <span className="text-xs mt-1">Média</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center justify-center text-gray-400">
          <i className="ri-user-line text-lg"></i>
          <span className="text-xs mt-1">Profil</span>
        </Link>
      </div>
    </div>
  );
}
