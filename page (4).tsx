
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('buyer');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Connexion réussie en tant que ${userType === 'buyer' ? 'Acheteur' : 'Vendeur'}!\nEmail: ${email}`);
  };

  const handleGoogleLogin = () => {
    const userTypeText = userType === 'buyer' ? 'Acheteur' : 'Vendeur';
    alert(`Connexion Google en cours...\nType: ${userTypeText}\n\nRedirection vers Google OAuth...`);
    
    // Simulation de la redirection Google OAuth
    setTimeout(() => {
      const mockUser = {
        name: userType === 'buyer' ? 'SODIMICO SARL' : 'METALKAM Industries',
        email: userType === 'buyer' ? 'admin@sodimico.cd' : 'contact@metalkam.cd',
        type: userType,
        verified: true
      };
      
      alert(` Connexion Google réussie!\n\nBienvenue ${mockUser.name}\nCompte ${userTypeText} vérifié\n\nRedirection vers le tableau de bord...`);
    }, 1500);
  };

  const handleLinkedInLogin = () => {
    const userTypeText = userType === 'buyer' ? 'Acheteur' : 'Vendeur';
    alert(`Connexion LinkedIn en cours...\nType: ${userTypeText}\n\nRedirection vers LinkedIn OAuth...`);
    
    // Simulation de la redirection LinkedIn OAuth
    setTimeout(() => {
      const mockUser = {
        name: userType === 'buyer' ? 'GECAMINES Corporation' : 'KAMB Industries',
        email: userType === 'buyer' ? 'procurement@gecamines.cd' : 'sales@kamb.cd',
        type: userType,
        verified: true,
        linkedinProfile: true
      };
      
      alert(` Connexion LinkedIn réussie!\n\nBienvenue ${mockUser.name}\nProfil professionnel ${userTypeText} vérifié\n\nRedirection vers le tableau de bord...`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center">
          <Link href="/" className="w-6 h-6 flex items-center justify-center mr-3">
            <i className="ri-arrow-left-line text-gray-700"></i>
          </Link>
          <div className="font-pacifico text-xl text-blue-600">
            Mireb Commercial
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-16 px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center pt-12 pb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Se connecter
            </h1>
            <p className="text-gray-600">
              Accédez à votre compte professionnel
            </p>
          </div>

          {/* User Type Selection */}
          <div className="mb-8">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                type="button"
                onClick={() => setUserType('buyer')}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  userType === 'buyer'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600'
                }`}
              >
                Acheteur
              </button>
              <button
                type="button"
                onClick={() => setUserType('seller')}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  userType === 'seller'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600'
                }`}
              >
                Vendeur
              </button>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email professionnel
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@entreprise.com"
                className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full py-3 px-4 pr-12 bg-white border border-gray-200 !rounded-button text-gray-900"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center"
                >
                  <i className={`${showPassword ? 'ri-eye-line' : 'ri-eye-off-line'} text-gray-400`}></i>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Se souvenir</span>
              </label>
              <Link href="/auth/forgot-password" className="text-sm text-blue-600">
                Mot de passe oublié ?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 !rounded-button font-medium"
            >
              Se connecter
            </button>
          </form>

          {/* Divider */}
          <div className="my-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-50 px-4 text-gray-500">ou</span>
              </div>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button 
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center py-3 px-4 border border-gray-200 !rounded-button bg-white hover:bg-gray-50 transition-colors"
            >
              <i className="ri-google-fill text-red-500 mr-3"></i>
              <span className="text-gray-700">Continuer avec Google</span>
            </button>
            
            <button 
              type="button"
              onClick={handleLinkedInLogin}
              className="w-full flex items-center justify-center py-3 px-4 border border-gray-200 !rounded-button bg-white hover:bg-gray-50 transition-colors"
            >
              <i className="ri-linkedin-fill text-blue-700 mr-3"></i>
              <span className="text-gray-700">Continuer avec LinkedIn</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-8 pb-8">
            <p className="text-gray-600">
              Pas encore de compte ?{' '}
              <Link href="/auth/register" className="text-blue-600 font-medium">
                S'inscrire gratuitement
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
