
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  const [orderDetails, setOrderDetails] = useState({
    orderId: '',
    amount: '',
    paymentMethod: '',
    transactionId: ''
  });

  useEffect(() => {
    // Récupération des paramètres de retour de FlexPaie
    const urlParams = new URLSearchParams(window.location.search);
    setOrderDetails({
      orderId: urlParams.get('order_id') || 'CMD-' + Date.now(),
      amount: urlParams.get('amount') || '4999.98',
      paymentMethod: urlParams.get('payment_method') || 'FlexPaie',
      transactionId: urlParams.get('transaction_id') || 'TXN-' + Date.now()
    });

    // Notification au serveur de la réussite du paiement
    // fetch('/api/payment/confirm', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ orderId: orderDetails.orderId })
    // });
  }, []);

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
          backgroundColor: '#DEF7EC',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <i className="ri-check-line" style={{ color: '#10B981', fontSize: '32px' }}></i>
        </div>
        
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: '8px'
        }}>
          Paiement confirmé !
        </h1>
        
        <p style={{
          color: '#6B7280',
          marginBottom: '24px'
        }}>
          Votre commande a été traitée avec succès
        </p>

        {/* Détails de la transaction */}
        <div style={{
          backgroundColor: '#F3F4F6',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
          textAlign: 'left'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: '#6B7280', fontSize: '14px' }}>N° Commande:</span>
            <span style={{ fontWeight: '500', fontSize: '14px' }}>{orderDetails.orderId}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: '#6B7280', fontSize: '14px' }}>Montant:</span>
            <span style={{ fontWeight: '500', fontSize: '14px' }}>{parseFloat(orderDetails.amount).toFixed(2)} €</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: '#6B7280', fontSize: '14px' }}>Mode de paiement:</span>
            <span style={{ fontWeight: '500', fontSize: '14px' }}>{orderDetails.paymentMethod}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#6B7280', fontSize: '14px' }}>Transaction ID:</span>
            <span style={{ fontWeight: '500', fontSize: '14px' }}>{orderDetails.transactionId}</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link 
            href="/dashboard"
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
            Voir mes commandes
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

        {/* Informations supplémentaires */}
        <div style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#EBF8FF',
          borderRadius: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <i className="ri-information-line" style={{ color: '#2563EB', marginTop: '2px' }}></i>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontWeight: '500', color: '#1E40AF', marginBottom: '4px', fontSize: '14px' }}>
                Prochaines étapes
              </h4>
              <p style={{ color: '#1D4ED8', fontSize: '12px' }}>
                Vous recevrez un email de confirmation avec les détails de livraison. 
                Le fournisseur vous contactera sous 24h pour finaliser les détails.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
