
'use client';

import Link from 'next/link';

export default function PaymentCancelPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '32px',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          margin: '0 auto 16px',
          backgroundColor: '#FEF2F2',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <i className="ri-close-line" style={{ color: '#EF4444', fontSize: '32px' }}></i>
        </div>
        
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: '8px'
        }}>
          Paiement annulé
        </h1>
        
        <p style={{
          color: '#6B7280',
          marginBottom: '24px'
        }}>
          Votre paiement a été annulé. Vos articles sont toujours dans votre panier.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link 
            href="/checkout"
            style={{
              display: 'block',
              width: '100%',
              backgroundColor: '#2563EB',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              fontWeight: '500',
              textDecoration: 'none',
              textAlign: 'center'
            }}
          >
            Reprendre le paiement
          </Link>
          
          <Link 
            href="/"
            style={{
              display: 'block',
              width: '100%',
              border: '1px solid #D1D5DB',
              color: '#374151',
              padding: '12px',
              borderRadius: '8px',
              fontWeight: '500',
              textDecoration: 'none',
              textAlign: 'center'
            }}
          >
            Retour à l'accueil
          </Link>
        </div>

        {/* Message d'assistance */}
        <div style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#F0F9FF',
          borderRadius: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <i className="ri-customer-service-line" style={{ color: '#0369A1', marginTop: '2px' }}></i>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontWeight: '500', color: '#0C4A6E', marginBottom: '4px', fontSize: '14px' }}>
                Besoin d'aide ?
              </h4>
              <p style={{ color: '#075985', fontSize: '12px' }}>
                Contactez notre service client si vous rencontrez des difficultés avec le paiement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
