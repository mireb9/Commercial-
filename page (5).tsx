
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'buyer',
    country: '',
    acceptTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userTypeText = formData.userType === 'buyer' ? 'Acheteur' : 'Vendeur';
    alert(`✅ Inscription réussie !\n\nBienvenue sur Mireb Commercial B2B\nType: ${userTypeText}\nEntreprise: ${formData.companyName}\nEmail: ${formData.email}\nPays: ${formData.country}\n\nVérification par email envoyée !`);
  };

  const handleGoogleRegister = () => {
    const userTypeText = formData.userType === 'buyer' ? 'Acheteur' : 'Vendeur';
    alert(`Inscription Google en cours...\nType: ${userTypeText}\n\nRedirection vers Google OAuth...`);

    setTimeout(() => {
      const mockCompany = formData.userType === 'buyer' ? 'NOUVELLE ENTREPRISE SARL' : 'TECH SOLUTIONS RDC';
      alert(`✅ Inscription Google réussie!\n\nEntreprise: ${mockCompany}\nType: ${userTypeText}\nCompte automatiquement vérifié\n\nBienvenue sur Mireb Commercial !`);
    }, 1500);
  };

  const handleLinkedInRegister = () => {
    const userTypeText = formData.userType === 'buyer' ? 'Acheteur' : 'Vendeur';
    alert(`Inscription LinkedIn en cours...\nType: ${userTypeText}\n\nRécupération du profil professionnel...`);

    setTimeout(() => {
      const mockCompany = formData.userType === 'buyer' ? 'BUSINESS CORP RDC' : 'EXPORT PARTNERS SARL';
      alert(`✅ Inscription LinkedIn réussie!\n\nEntreprise: ${mockCompany}\nType: ${userTypeText}\nProfil professionnel importé\n\nCompte vérifié automatiquement !`);
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navigation Bar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        zIndex: 50,
        padding: '12px 16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" style={{
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            textDecoration: 'none'
          }}>
            ←
          </Link>
          <div style={{ fontFamily: 'Pacifico, serif', fontSize: '20px', color: '#2563eb' }}>
            Mireb Commercial
          </div>
        </div>
      </nav>

      {/* Content */}
      <div style={{ paddingTop: '64px', padding: '64px 16px 32px' }}>
        <div style={{ maxWidth: '448px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', paddingTop: '32px', paddingBottom: '24px' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
              Créer un compte
            </h1>
            <p style={{ color: '#6b7280' }}>
              Rejoignez des millions d'entreprises
            </p>
          </div>

          {/* User Type Selection */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', backgroundColor: '#f3f4f6', borderRadius: '9999px', padding: '4px' }}>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, userType: 'buyer' }))}
                style={{
                  flex: 1,
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: formData.userType === 'buyer' ? '#2563eb' : 'transparent',
                  color: formData.userType === 'buyer' ? 'white' : '#6b7280'
                }}
              >
                Acheteur
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, userType: 'seller' }))}
                style={{
                  flex: 1,
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: formData.userType === 'seller' ? '#2563eb' : 'transparent',
                  color: formData.userType === 'seller' ? 'white' : '#6b7280'
                }}
              >
                Vendeur
              </button>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Nom de l'entreprise
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Votre Entreprise SARL"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: 'white',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  color: '#111827',
                  outline: 'none',
                  fontSize: '16px'
                }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Email professionnel
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="contact@entreprise.com"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: 'white',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  color: '#111827',
                  outline: 'none',
                  fontSize: '16px'
                }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Pays
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: 'white',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  color: '#111827',
                  outline: 'none',
                  fontSize: '16px'
                }}
                required
              >
                <option value="">Sélectionner un pays</option>
                <option value="france">France</option>
                <option value="belgium">Belgique</option>
                <option value="switzerland">Suisse</option>
                <option value="canada">Canada</option>
                <option value="morocco">Maroc</option>
                <option value="tunisia">Tunisie</option>
                <option value="algeria">Algérie</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Mot de passe
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="8+ caractères"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    paddingRight: '48px',
                    backgroundColor: 'white',
                    border: '1px solid #d1d5db',
                    borderRadius: '12px',
                    color: '#111827',
                    outline: 'none',
                    fontSize: '16px'
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '18px'
                  }}
                >
                  {showPassword ? '👁️' : '👁️\u200d🗨️'}
                </button>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Répéter le mot de passe"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: 'white',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  color: '#111827',
                  outline: 'none',
                  fontSize: '16px'
                }}
                required
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                style={{ width: '16px', height: '16px', marginTop: '2px' }}
                required
              />
              <label style={{ fontSize: '14px', color: '#6b7280' }}>
                J'accepte les
                <Link href="/terms" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                  conditions d'utilisation
                </Link>
                et la
                <Link href="/privacy" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                  politique de confidentialité
                </Link>
              </label>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '12px',
                borderRadius: '12px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                marginTop: '8px'
              }}
            >
              Créer mon compte
            </button>
          </form>

          {/* Divider */}
          <div style={{ margin: '32px 0' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '100%', borderTop: '1px solid #e5e7eb' }}></div>
              </div>
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', fontSize: '14px' }}>
                <span style={{ backgroundColor: '#f9fafb', padding: '0 16px', color: '#6b7280' }}>ou</span>
              </div>
            </div>
          </div>

          {/* Social Registration */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              type="button"
              onClick={handleGoogleRegister}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 16px',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                backgroundColor: 'white',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              <span style={{ color: '#dc2626', marginRight: '12px', fontSize: '18px' }}>🔗</span>
              <span style={{ color: '#374151' }}>S'inscrire avec Google</span>
            </button>

            <button
              type="button"
              onClick={handleLinkedInRegister}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 16px',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                backgroundColor: 'white',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              <span style={{ color: '#1d4ed8', marginRight: '12px', fontSize: '18px' }}>💼</span>
              <span style={{ color: '#374151' }}>S'inscrire avec LinkedIn</span>
            </button>
          </div>

          {/* Sign In Link */}
          <div style={{ textAlign: 'center', marginTop: '32px', paddingBottom: '32px' }}>
            <p style={{ color: '#6b7280' }}>
              Déjà un compte ?
              <Link href="/auth/login" style={{ color: '#2563eb', fontWeight: '500', textDecoration: 'none' }}>
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
