
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: '',
    subcategories: '',
    productCount: '',
    description: ''
  });

  const [categories, setCategories] = useState([
    {
      id: 'cat_001',
      name: 'Électronique & Technologie',
      subcategories: ['Smartphones', 'Ordinateurs', 'Composants', 'Accessoires'],
      productCount: '2.3M+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20electronic%20devices%20smartphone%20laptop%20computer%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=electronics-cat&orientation=squarish'
    },
    {
      id: 'cat_002',
      name: 'Mode & Textile',
      subcategories: ['Vêtements', 'Chaussures', 'Accessoires', 'Tissus'],
      productCount: '1.8M+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20fashion%20clothing%20shirt%20dress%20shoes%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=fashion-cat&orientation=squarish'
    },
    {
      id: 'cat_003',
      name: 'Industrie & Machines',
      subcategories: ['Machines', 'Outils', 'Équipements', 'Pièces'],
      productCount: '950K+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20industrial%20machinery%20tools%20equipment%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=industry-cat&orientation=squarish'
    },
    {
      id: 'cat_004',
      name: 'Automobile & Transport',
      subcategories: ['Pièces auto', 'Accessoires', 'Véhicules', 'Outillage'],
      productCount: '680K+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20car%20automotive%20parts%20vehicle%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=auto-cat&orientation=squarish'
    },
    {
      id: 'cat_005',
      name: 'Maison & Décoration',
      subcategories: ['Meubles', 'Décoration', 'Électroménager', 'Jardinage'],
      productCount: '1.2M+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20home%20house%20furniture%20decoration%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=home-cat&orientation=squarish'
    },
    {
      id: 'cat_006',
      name: 'Beauté & Cosmétiques',
      subcategories: ['Maquillage', 'Soins', 'Parfums', 'Accessoires'],
      productCount: '520K+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20cosmetics%20beauty%20products%20lipstick%20makeup%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=beauty-cat&orientation=squarish'
    },
    {
      id: 'cat_007',
      name: 'Alimentation & Boissons',
      subcategories: ['Produits frais', 'Conserves', 'Boissons', 'Équipements'],
      productCount: '890K+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20food%20drink%20products%20fruits%20vegetables%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=food-cat&orientation=squarish'
    },
    {
      id: 'cat_008',
      name: 'Sports & Loisirs',
      subcategories: ['Équipements', 'Vêtements', 'Accessoires', 'Outdoor'],
      productCount: '435K+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20sports%20equipment%20ball%20fitness%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=sports-cat&orientation=squarish'
    }
  ]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCategories = localStorage.getItem('mireb_categories');
      if (savedCategories) {
        try {
          setCategories(JSON.parse(savedCategories));
        } catch (error) {
          console.error('Erreur lors du chargement des catégories:', error);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mireb_categories', JSON.stringify(categories));
    }
  }, [categories]);

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.subcategories.some(sub =>
      sub.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const toggleCategorySelection = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleBulkAction = (action: string) => {
    if (selectedCategories.length === 0) {
      alert('Veuillez sélectionner au moins une catégorie');
      return;
    }

    if (action === 'delete') {
      setShowDeleteModal(true);
    } else {
      alert(`Action "${action}" appliquée à ${selectedCategories.length} catégorie(s)`);
      setSelectedCategories([]);
    }
  };

  const handleDeleteCategories = () => {
    const confirmMessage = `⚠️ SUPPRESSION DÉFINITIVE ⚠️\n\nVous allez supprimer définitivement ${selectedCategories.length} catégorie(s).\n\nCette action est IRRÉVERSIBLE et supprimera :\n• Toutes les catégories sélectionnées\n• Tous les produits associés\n• Tous les liens de navigation\n\nTapez "SUPPRIMER" pour confirmer :`;

    const userConfirmation = prompt(confirmMessage);

    if (userConfirmation === "SUPPRIMER") {
      const finalConfirm = confirm(`DERNIÈRE CONFIRMATION\n\nSuppression définitive de ${selectedCategories.length} catégorie(s).\n\nCette action détruira définitivement toutes les données associées.\n\nConfirmez-vous cette suppression irréversible ?`);

      if (finalConfirm) {
        const newCategories = categories.filter(cat => !selectedCategories.includes(cat.id));
        setCategories(newCategories);
        setSelectedCategories([]);
        setShowDeleteModal(false);
        alert(`✅ SUPPRESSION TERMINÉE\n\n${selectedCategories.length} catégorie(s) supprimée(s) définitivement.\n\nCes données ne peuvent plus être récupérées.`);
      }
    } else if (userConfirmation !== null) {
      alert('❌ Suppression annulée - Vous devez taper exactement "SUPPRIMER" pour confirmer.');
    }
    setShowDeleteModal(false);
  };

  const handleAddCategory = () => {
    if (!newCategory.name || !newCategory.productCount) {
      alert('Veuillez remplir au moins le nom et le nombre de produits');
      return;
    }

    const categoryToAdd = {
      id: 'cat_' + Date.now(),
      name: newCategory.name,
      subcategories: newCategory.subcategories.split(',').map(s => s.trim()).filter(s => s),
      productCount: newCategory.productCount,
      image: `https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20${newCategory.name.toLowerCase()}%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=new-cat-${Date.now()}&orientation=squarish`
    };

    const newCategories = [...categories, categoryToAdd];
    setCategories(newCategories);
    setNewCategory({
      name: '',
      subcategories: '',
      productCount: '',
      description: ''
    });
    setShowAddModal(false);
    alert(`✅ Catégorie "${newCategory.name}" ajoutée avec succès et sauvegardée !`);
  };

  const handleEditCategory = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      const newName = prompt('Nouveau nom de catégorie:', category.name);
      if (newName && newName !== category.name) {
        const updatedCategories = categories.map(cat =>
          cat.id === categoryId ? { ...cat, name: newName } : cat
        );
        setCategories(updatedCategories);
        alert(`✅ Catégorie renommée en "${newName}" et sauvegardée !`);
      }
    }
  };

  const handleDeleteSingleCategory = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      const confirmMessage = `⚠️ SUPPRESSION DÉFINITIVE ⚠️\n\nVous allez supprimer définitivement la catégorie "${category.name}".\n\nCette action est IRRÉVERSIBLE et supprimera :\n• La catégorie "${category.name}"\n• Tous les produits associés\n• Tous les liens de navigation\n\nTapez "SUPPRIMER" pour confirmer :`;

      const userConfirmation = prompt(confirmMessage);

      if (userConfirmation === "SUPPRIMER") {
        const finalConfirm = confirm(`DERNIÈRE CONFIRMATION\n\nSuppression définitive de "${category.name}".\n\nCette action détruira définitivement toutes les données associées.\n\nConfirmez-vous cette suppression irréversible ?`);

        if (finalConfirm) {
          const newCategories = categories.filter(cat => cat.id !== categoryId);
          setCategories(newCategories);
          alert(`✅ SUPPRESSION TERMINÉE\n\nCatégorie "${category.name}" supprimée définitivement.\n\nCes données ne peuvent plus être récupérées.`);
        }
      } else if (userConfirmation !== null) {
        alert('❌ Suppression annulée - Vous devez taper exactement "SUPPRIMER" pour confirmer.');
      }
    }
  };

  const resetToDefault = () => {
    const confirmReset = confirm('⚠️ RÉINITIALISATION\nVoulez-vous restaurer les catégories par défaut ?\nCela supprimera toutes vos modifications personnalisées.');
    if (confirmReset) {
      const defaultCategories = [
        {
          id: 'cat_001',
          name: 'Électronique & Technologie',
          subcategories: ['Smartphones', 'Ordinateurs', 'Composants', 'Accessoires'],
          productCount: '2.3M+',
          image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20electronic%20devices%20smartphone%20laptop%20computer%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=electronics-cat&orientation=squarish'
        },
        {
          id: 'cat_002',
          name: 'Mode & Textile',
          subcategories: ['Vêtements', 'Chaussures', 'Accessoires', 'Tissus'],
          productCount: '1.8M+',
          image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20fashion%20clothing%20shirt%20dress%20shoes%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=fashion-cat&orientation=squarish'
        },
        {
          id: 'cat_003',
          name: 'Industrie & Machines',
          subcategories: ['Machines', 'Outils', 'Équipements', 'Pièces'],
          productCount: '950K+',
          image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20industrial%20machinery%20tools%20equipment%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=industry-cat&orientation=squarish'
        },
        {
          id: 'cat_004',
          name: 'Automobile & Transport',
          subcategories: ['Pièces auto', 'Accessoires', 'Véhicules', 'Outillage'],
          productCount: '680K+',
          image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20car%20automotive%20parts%20vehicle%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=auto-cat&orientation=squarish'
        },
        {
          id: 'cat_005',
          name: 'Maison & Décoration',
          subcategories: ['Meubles', 'Décoration', 'Électroménager', 'Jardinage'],
          productCount: '1.2M+',
          image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20home%20house%20furniture%20decoration%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=home-cat&orientation=squarish'
        },
        {
          id: 'cat_006',
          name: 'Beauté & Cosmétiques',
          subcategories: ['Maquillage', 'Soins', 'Parfums', 'Accessoires'],
          productCount: '520K+',
          image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20cosmetics%20beauty%20products%20lipstick%20makeup%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=beauty-cat&orientation=squarish'
        },
        {
          id: 'cat_007',
          name: 'Alimentation & Boissons',
          subcategories: ['Produits frais', 'Conserves', 'Boissons', 'Équipements'],
          productCount: '890K+',
          image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20food%20drink%20products%20fruits%20vegetables%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=food-cat&orientation=squarish'
        },
        {
          id: 'cat_008',
          name: 'Sports & Loisirs',
          subcategories: ['Équipements', 'Vêtements', 'Accessoires', 'Outdoor'],
          productCount: '435K+',
          image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20sports%20equipment%20ball%20fitness%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=sports-cat&orientation=squarish'
        }
      ];
      setCategories(defaultCategories);
      if (typeof window !== 'undefined') {
        localStorage.setItem('mireb_categories', JSON.stringify(defaultCategories));
      }
      alert('✅ Catégories restaurées aux valeurs par défaut !');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="font-pacifico text-xl text-blue-600">
            Catégories
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={resetToDefault}
              className="w-8 h-8 flex items-center justify-center"
              title="Réinitialiser aux catégories par défaut"
            >
              <i className="ri-refresh-line text-orange-600"></i>
            </button>
            <Link href="/search" className="w-8 h-8 flex items-center justify-center">
              <i className="ri-search-line text-gray-600"></i>
            </Link>
            <button
              onClick={() => setShowAddModal(true)}
              className="w-8 h-8 flex items-center justify-center"
            >
              <i className="ri-add-line text-blue-600"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-16 pb-20">
        {/* Search Bar */}
        <div className="px-4 py-4 bg-white border-b border-gray-100">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher une catégorie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-4 pr-12 bg-gray-50 border-none !rounded-button text-gray-900"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
              <i className="ri-search-line text-gray-400"></i>
            </div>
          </div>
        </div>

        {/* Persistence Status */}
        <div className="px-4 py-2 bg-green-50 border-b border-green-100">
          <div className="flex items-center justify-center space-x-2">
            <i className="ri-check-line text-green-600"></i>
            <span className="text-green-700 text-sm">
              Modifications automatiquement sauvegardées
            </span>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedCategories.length > 0 && (
          <div className="mx-4 mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-blue-800 font-medium">
                {selectedCategories.length} catégorie(s) sélectionnée(s)
              </span>
              <button
                onClick={() => setSelectedCategories([])}
                className="text-blue-600 text-sm"
              >
                Tout désélectionner
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleBulkAction('edit')}
                className="py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium"
              >
                <i className="ri-edit-line mr-1"></i>
                Modifier
              </button>
              <button
                onClick={() => handleBulkAction('duplicate')}
                className="py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium"
              >
                <i className="ri-file-copy-line mr-1"></i>
                Dupliquer
              </button>
              <button
                onClick={() => handleBulkAction('delete')}
                className="py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium"
              >
                <i className="ri-delete-bin-line mr-1"></i>
                Supprimer
              </button>
            </div>
          </div>
        )}

        {/* Categories Grid */}
        <div className="px-4 py-6">
          <div className="space-y-4">
            {filteredCategories.map((category, index) => (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => toggleCategorySelection(category.id)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                    />

                    <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-base mb-1">
                        {category.name}
                      </h3>
                      <p className="text-blue-600 text-sm font-medium mb-2">
                        {category.productCount} produits
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.slice(0, 3).map((sub, subIndex) => (
                          <span
                            key={subIndex}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                          >
                            {sub}
                          </span>
                        ))}
                        {category.subcategories.length > 3 && (
                          <span className="text-xs text-gray-400">
                            +{category.subcategories.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <button
                        onClick={() => handleEditCategory(category.id)}
                        className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full"
                      >
                        <i className="ri-edit-line text-blue-600"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteSingleCategory(category.id)}
                        className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-full"
                      >
                        <i className="ri-delete-bin-line text-red-600"></i>
                      </button>
                      <Link
                        href={`/categories/${category.name.toLowerCase().replace(/\\s+/g, '-').replace(/[^\w-]/gi, '')}`}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
                      >
                        <i className="ri-arrow-right-s-line text-gray-600"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Searches */}
        <div className="px-4 py-4">
          <h3 className="font-semibold text-gray-900 mb-4">Recherches populaires</h3>
          <div className="flex flex-wrap gap-2">
            {['iPhone', 'Textile', 'Machines CNC', 'Cosmétiques', 'Automobile', 'Électronique'].map((term, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(term)}
                className="px-4 py-2 bg-white border border-gray-200 !rounded-button text-sm text-gray-700"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="px-4 py-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white">
            <h3 className="font-semibold mb-2">Statistiques des catégories</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold">{categories.length}</div>
                <div className="text-blue-100 text-sm">Catégories totales</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {categories.reduce((sum, cat) => sum + cat.subcategories.length, 0)}
                </div>
                <div className="text-blue-100 text-sm">Sous-catégories</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Ajouter une catégorie
              </h3>
              <button onClick={() => setShowAddModal(false)}>
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de la catégorie *
                </label>
                <input
                  type="text"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  placeholder="Ex: Électronique & Technologie"
                  className="w-full p-3 border border-gray-200 !rounded-button"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sous-catégories (séparées par des virgules)
                </label>
                <input
                  type="text"
                  value={newCategory.subcategories}
                  onChange={(e) => setNewCategory({ ...newCategory, subcategories: e.target.value })}
                  placeholder="Ex: Smartphones, Ordinateurs, Tablettes"
                  className="w-full p-3 border border-gray-200 !rounded-button"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de produits *
                </label>
                <input
                  type="text"
                  value={newCategory.productCount}
                  onChange={(e) => setNewCategory({ ...newCategory, productCount: e.target.value })}
                  placeholder="Ex: 2.3M+"
                  className="w-full p-3 border border-gray-200 !rounded-button"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description (optionnelle)
                </label>
                <textarea
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                  placeholder="Description de la catégorie..."
                  className="w-full p-3 border border-gray-200 !rounded-button resize-none"
                  rows={3}
                />
              </div>

              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-start space-x-2">
                  <i className="ri-information-line text-blue-600 mt-1"></i>
                  <div>
                    <h4 className="font-medium text-blue-800 text-sm">Information</h4>
                    <p className="text-blue-700 text-xs">
                      L'image de la catégorie sera générée automatiquement selon le nom fourni.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 !rounded-button font-medium"
                >
                  Annuler
                </button>
                <button
                  onClick={handleAddCategory}
                  className="flex-1 py-3 bg-blue-600 text-white !rounded-button font-medium"
                >
                  <i className="ri-add-line mr-2"></i>
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <i className="ri-delete-bin-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Supprimer les catégories
              </h3>
              <p className="text-gray-600 mb-6">
                Vous allez supprimer définitivement {selectedCategories.length} catégorie(s). Cette action est irréversible.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 !rounded-button font-medium"
                >
                  Annuler
                </button>
                <button
                  onClick={handleDeleteCategories}
                  className="flex-1 bg-red-600 text-white py-3 !rounded-button font-medium"
                >
                  Supprimer définitivement
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

          <Link href="/categories" className="flex flex-col items-center justify-center space-y-1 bg-blue-50">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-grid-fill text-blue-600"></i>
            </div>
            <span className="text-xs text-blue-600 font-medium">Catégories</span>
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
