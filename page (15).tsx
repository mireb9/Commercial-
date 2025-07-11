
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BankTransferPage() {
  const [orderData] = useState({
    orderId: 'CMD-' + Date.now(),
    amount: 4999.98,
    productName: 'MacBook Pro 16" - Intel i9'
  });

  const bankDetails = {
    bankName: 'BNP Paribas',
    iban: 'FR76 3000 4000 0100 0000 0012 345',
    bic: 'BNPAFRPPXXX',
    accountHolder: 'Mireb Commercial SARL',
    reference: orderData.orderId
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Ici vous pourriez ajouter une notification de succès
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB' }}>
      {/* Navigation Bar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        zIndex: 50,
        padding: '12px 16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/payment" style={{
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            textDecoration: 'none'
          }}>
            <i className="ri-arrow-left-line" style={{ color: '#374151' }}></i>
          </Link>
          <div style={{ fontWeight: '600', color: '#111827' }}>
            Virement bancaire
          </div>
        </div>
      </nav>

      {/* Content */}
      <div style={{ paddingTop: '64px', paddingBottom: '80px', padding: '64px 16px 80px' }}>
        {/* Order Summary */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '24px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #E5E7EB'
        }}>
          <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
            Détails de la commande
          </h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: '#6B7280' }}>N° Commande:</span>
            <span style={{ fontWeight: '500', color: '#111827' }}>{orderData.orderId}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: '#6B7280' }}>Produit:</span>
            <span style={{ fontWeight: '500', color: '#111827' }}>{orderData.productName}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid #E5E7EB',
            paddingTop: '12px',
            marginTop: '12px'
          }}>
            <span style={{ fontWeight: '600', color: '#111827' }}>Montant à virer:</span>
            <span style={{ fontWeight: 'bold', color: '#2563EB', fontSize: '18px' }}>
              {orderData.amount.toFixed(2)} €
            </span>
          </div>
        </div>

        {/* Bank Details */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '24px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #E5E7EB'
        }}>
          <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
            Coordonnées bancaires
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '14px', color: '#6B7280' }}>Banque</div>
                <div style={{ fontWeight: '500', color: '#111827' }}>{bankDetails.bankName}</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', color: '#6B7280' }}>IBAN</div>
                <div style={{ fontWeight: '500', color: '#111827', fontFamily: 'monospace' }}>
                  {bankDetails.iban}
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.iban)}
                style={{
                  padding: '8px',
                  backgroundColor: '#EBF8FF',
                  border: '1px solid #BFDBFE',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                <i className="ri-file-copy-line" style={{ color: '#2563EB' }}></i>
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', color: '#6B7280' }}>BIC/SWIFT</div>
                <div style={{ fontWeight: '500', color: '#111827', fontFamily: 'monospace' }}>
                  {bankDetails.bic}
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.bic)}
                style={{
                  padding: '8px',
                  backgroundColor: '#EBF8FF',
                  border: '1px solid #BFDBFE',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                <i className="ri-file-copy-line" style={{ color: '#2563EB' }}></i>
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '14px', color: '#6B7280' }}>Bénéficiaire</div>
                <div style={{ fontWeight: '500', color: '#111827' }}>{bankDetails.accountHolder}</div>
              </div>
            </div>

            <div style={{
              backgroundColor: '#FEF3C7',
              border: '1px solid #F59E0B',
              borderRadius: '8px',
              padding: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <i className="ri-information-line" style={{ color: '#D97706', marginTop: '2px' }}></i>
                <div>
                  <div style={{ fontWeight: '500', color: '#92400E', fontSize: '14px' }}>
                    Référence obligatoire
                  </div>
                  <div style={{ color: '#B45309', fontSize: '12px', marginTop: '4px' }}>
                    Indiquez impérativement cette référence : <strong>{bankDetails.reference}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '24px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #E5E7EB'
        }}>
          <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
            Instructions de paiement
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#DBEAFE',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ color: '#2563EB', fontSize: '12px', fontWeight: 'bold' }}>1</span>
              </div>
              <div>
                <div style={{ fontWeight: '500', color: '#111827', fontSize: '14px' }}>
                  Effectuez le virement
                </div>
                <div style={{ color: '#6B7280', fontSize: '12px' }}>
                  Utilisez les coordonnées bancaires ci-dessus
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#DBEAFE',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ color: '#2563EB', fontSize: '12px', fontWeight: 'bold' }}>2</span>
              </div>
              <div>
                <div style={{ fontWeight: '500', color: '#111827', fontSize: '14px' }}>
                  Indiquez la référence
                </div>
                <div style={{ color: '#6B7280', fontSize: '12px' }}>
                  N'oubliez pas d'inclure : {bankDetails.reference}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#DBEAFE',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ color: '#2563EB', fontSize: '12px', fontWeight: 'bold' }}>3</span>
              </div>
              <div>
                <div style={{ fontWeight: '500', color: '#111827', fontSize: '14px' }}>
                  Confirmation automatique
                </div>
                <div style={{ color: '#6B7280', fontSize: '12px' }}>
                  Vous recevrez un email de confirmation sous 24-48h
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link
            href="/dashboard"
            style={{
              display: 'block',
              width: '100%',
              backgroundColor: '#2563EB',
              color: 'white',
              padding: '16px',
              borderRadius: '8px',
              fontWeight: '600',
              textAlign: 'center',
              textDecoration: 'none'
            }}
          >
            Suivre ma commande
          </Link>
          
          <Link
            href="/"
            style={{
              display: 'block',
              width: '100%',
              border: '1px solid #D1D5DB',
              color: '#374151',
              padding: '16px',
              borderRadius: '8px',
              fontWeight: '500',
              textAlign: 'center',
              textDecoration: 'none'
            }}
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
