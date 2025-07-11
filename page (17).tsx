
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PaymentPage() {
  const [orderData, setOrderData] = useState({
    productName: 'MacBook Pro 16" - Intel i9',
    quantity: 2,
    unitPrice: 2499.99,
    totalPrice: 4999.98,
    supplier: 'TechPro Solutions',
    orderId: 'CMD-' + Date.now()
  });

  const [paymentMethod, setPaymentMethod] = useState('flexpaie');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFlexPaiePayment = () => {
    setIsProcessing(true);

    const flexpaieConfig = {
      merchant_id: 'TUFSQ09fU0VSVklDRQ==',
      amount: Math.round(orderData.totalPrice * 100), 
      currency: 'EUR',
      order_id: orderData.orderId,
      customer_email: 'client@example.com',
      customer_name: 'Client Mireb Commercial',
      return_url: typeof window !== 'undefined' ? window.location.origin + '/payment/success' : '/payment/success',
      cancel_url: typeof window !== 'undefined' ? window.location.origin + '/payment/cancel' : '/payment/cancel',
      callback_url: typeof window !== 'undefined' ? window.location.origin + '/api/payment/callback' : '/api/payment/callback',
      description: `Commande ${orderData.orderId} - ${orderData.productName}`
    };

    if (typeof window !== 'undefined') {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://vpos.flexpaie.com/pay/TUFSQ09fU0VSVklDRQ==';
      form.target = '_self';

      Object.keys(flexpaieConfig).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = flexpaieConfig[key as keyof typeof flexpaieConfig].toString();
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    }
  };

  const handleBankTransfer = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/payment/bank-transfer';
    }
  };

  const handlePayPal = () => {
    if (typeof window !== 'undefined') {
      const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=mireb-commercial@example.com&item_name=${encodeURIComponent(orderData.productName)}&amount=${orderData.totalPrice}&currency_code=EUR&return=${encodeURIComponent(window.location.origin + '/payment/success')}&cancel_return=${encodeURIComponent(window.location.origin + '/payment/cancel')}`;
      window.location.href = paypalUrl;
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl p-8 text-center max-w-md w-full shadow-lg">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <i className="ri-check-line text-green-600 text-2xl"></i>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Paiement réussi !
          </h2>
          <p className="text-gray-600 mb-6">
            Votre commande #{orderData.orderId} a été confirmée
          </p>
          <div className="space-y-3">
            <Link 
              href="/dashboard"
              className="block w-full bg-blue-600 text-white py-3 !rounded-button font-medium"
            >
              Voir ma commande
            </Link>
            <Link 
              href="/"
              className="block w-full border border-gray-300 text-gray-700 py-3 !rounded-button font-medium"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center">
          <Link href="/products/1" className="w-6 h-6 flex items-center justify-center mr-3">
            <i className="ri-arrow-left-line text-gray-700"></i>
          </Link>
          <div className="font-semibold text-gray-900">
            Paiement sécurisé
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-16 pb-20 px-4">
        {/* Order Summary */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Récapitulatif de commande</h3>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Produit</span>
              <span className="font-medium text-gray-900">{orderData.productName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Quantité</span>
              <span className="font-medium text-gray-900">{orderData.quantity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Prix unitaire</span>
              <span className="font-medium text-gray-900">{orderData.unitPrice.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Fournisseur</span>
              <span className="font-medium text-gray-900">{orderData.supplier}</span>
            </div>
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="font-bold text-blue-600 text-lg">{orderData.totalPrice.toFixed(2)} €</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Moyens de paiement</h3>

          <div className="space-y-3">
            {/* FlexPaie */}
            <div 
              onClick={() => setPaymentMethod('flexpaie')}
              className={`flex items-center p-4 border-2 !rounded-button cursor-pointer transition-colors ${
                paymentMethod === 'flexpaie' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <i className="ri-secure-payment-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">FlexPaie</h4>
                <p className="text-gray-600 text-sm">Paiement sécurisé instantané</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 ${
                paymentMethod === 'flexpaie' ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
              }`}>
                {paymentMethod === 'flexpaie' && (
                  <div className="w-full h-full rounded-full bg-white scale-50"></div>
                )}
              </div>
            </div>

            {/* Virement bancaire */}
            <div 
              onClick={() => setPaymentMethod('bank')}
              className={`flex items-center p-4 border-2 !rounded-button cursor-pointer transition-colors ${
                paymentMethod === 'bank' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <i className="ri-bank-line text-gray-600 text-xl"></i>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Virement bancaire</h4>
                <p className="text-gray-600 text-sm">Paiement par virement SEPA</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 ${
                paymentMethod === 'bank' ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
              }`}>
                {paymentMethod === 'bank' && (
                  <div className="w-full h-full rounded-full bg-white scale-50"></div>
                )}
              </div>
            </div>

            {/* PayPal */}
            <div 
              onClick={() => setPaymentMethod('paypal')}
              className={`flex items-center p-4 border-2 !rounded-button cursor-pointer transition-colors ${
                paymentMethod === 'paypal' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <i className="ri-paypal-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">PayPal</h4>
                <p className="text-gray-600 text-sm">Paiement via PayPal</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 ${
                paymentMethod === 'paypal' ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
              }`}>
                {paymentMethod === 'paypal' && (
                  <div className="w-full h-full rounded-full bg-white scale-50"></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Security Info */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-shield-check-line text-green-600"></i>
            </div>
            <div>
              <h4 className="font-medium text-green-800 mb-1">Paiement sécurisé</h4>
              <p className="text-green-700 text-sm">
                Vos données de paiement sont cryptées et sécurisées selon les standards PCI DSS
              </p>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <button
          onClick={() => {
            if (paymentMethod === 'flexpaie') {
              handleFlexPaiePayment();
            } else if (paymentMethod === 'bank') {
              handleBankTransfer();
            } else if (paymentMethod === 'paypal') {
              handlePayPal();
            }
          }}
          disabled={isProcessing}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '18px',
            backgroundColor: isProcessing ? '#9CA3AF' : '#2563EB',
            color: 'white',
            border: 'none',
            cursor: isProcessing ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          {isProcessing ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '20px',
                height: '20px',
                border: '2px solid white',
                borderTop: '2px solid transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                marginRight: '8px'
              }}></div>
              Redirection vers le paiement...
            </div>
          ) : (
            `Payer ${orderData.totalPrice.toFixed(2)} €`
          )}
        </button>

        {/* Payment Details for FlexPaie */}
        {paymentMethod === 'flexpaie' && (
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-information-line text-blue-600"></i>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 mb-1">À propos de FlexPaie</h4>
                <p className="text-blue-700 text-sm">
                  FlexPaie est notre solution de paiement partenaire sécurisée. 
                  Vous serez redirigé vers leur plateforme pour finaliser votre achat.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Order ID */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            N° de commande: {orderData.orderId}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
