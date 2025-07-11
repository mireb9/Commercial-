
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [showNewConversationModal, setShowNewConversationModal] = useState(false);
  const [searchContacts, setSearchContacts] = useState('');
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [showCallModal, setShowCallModal] = useState(false);
  const [callContact, setCallContact] = useState<any>(null);

  const conversations = [
    {
      id: 1,
      name: 'TechGlobal Ltd.',
      lastMessage: 'Pouvez-vous confirmer les prix pour 500 unités ?',
      time: '14:32',
      unread: 2,
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20business%20avatar%2C%20corporate%20logo%2C%20modern%20company%20branding%2C%20clean%20simple%20design%2C%20blue%20and%20white%20colors%2C%20minimalist%20style%2C%20professional%20appearance%2C%20business%20identity%2C%20centered%20composition%2C%20isolated%20on%20white%20background&width=50&height=50&seq=avatar1&orientation=squarish',
      status: 'online',
      phone: '+86 138 0013 8000'
    },
    {
      id: 2,
      name: 'Fashion Europe',
      lastMessage: 'Nous avons de nouveaux modèles disponibles',
      time: '12:45',
      unread: 0,
      avatar: 'https://readdy.ai/api/search-image?query=Fashion%20brand%20logo%2C%20elegant%20design%2C%20stylish%20branding%2C%20premium%20fashion%20company%2C%20sophisticated%20appearance%2C%20pink%20and%20gold%20colors%2C%20luxury%20aesthetic%2C%20professional%20identity%2C%20centered%20composition%2C%20isolated%20on%20white%20background&width=50&height=50&seq=avatar2&orientation=squarish',
      status: 'offline',
      phone: '+33 1 42 86 83 00'
    },
    {
      id: 3,
      name: 'Industrial Pro',
      lastMessage: 'Documentation technique envoyée',
      time: 'Hier',
      unread: 1,
      avatar: 'https://readdy.ai/api/search-image?query=Industrial%20company%20logo%2C%20mechanical%20branding%2C%20engineering%20design%2C%20professional%20manufacturing%20company%2C%20strong%20industrial%20appearance%2C%20orange%20and%20black%20colors%2C%20technical%20aesthetic%2C%20business%20identity%2C%20centered%20composition%2C%20isolated%20on%20white%20background&width=50&height=50&seq=avatar3&orientation=squarish',
      status: 'online',
      phone: '+49 30 12345678'
    },
    {
      id: 4,
      name: 'GreenTech Solutions',
      lastMessage: 'Merci pour votre commande !',
      time: 'Hier',
      unread: 0,
      avatar: 'https://readdy.ai/api/search-image?query=Green%20technology%20logo%2C%20eco-friendly%20branding%2C%20sustainable%20company%20design%2C%20environmental%20business%20identity%2C%20green%20and%20blue%20colors%2C%20modern%20clean%20appearance%2C%20professional%20eco%20branding%2C%20centered%20composition%2C%20isolated%20on%20white%20background&width=50&height=50&seq=avatar4&orientation=squarish',
      status: 'offline',
      phone: '+1 555 123 4567'
    }
  ];

  const availableContacts = [
    {
      id: 5,
      name: 'Electro Plus SARL',
      category: 'Électronique',
      location: 'Kinshasa, RDC',
      avatar: 'https://readdy.ai/api/search-image?query=Electronics%20company%20logo%2C%20modern%20tech%20branding%2C%20electrical%20components%20company%2C%20professional%20corporate%20design%2C%20blue%20and%20yellow%20colors%2C%20technical%20appearance%2C%20business%20identity%2C%20centered%20composition%2C%20isolated%20on%20white%20background&width=50&height=50&seq=contact1&orientation=squarish',
      status: 'online',
      phone: '+243 812 345 678',
      whatsapp: '+243 812 345 678',
      email: 'contact@electroplus-rdc.cd'
    },
    {
      id: 6,
      name: 'Materials Construction',
      category: 'BTP & Construction',
      location: 'Lubumbashi, RDC',
      avatar: 'https://readdy.ai/api/search-image?query=Construction%20company%20logo%2C%20building%20materials%20branding%2C%20industrial%20construction%20company%2C%20professional%20corporate%20design%2C%20orange%20and%20gray%20colors%2C%20construction%20appearance%2C%20business%20identity%2C%20centered%20composition%2C%20isolated%20on%20white%20background&width=50&height=50&seq=contact2&orientation=squarish',
      status: 'offline',
      phone: '+243 823 456 789',
      whatsapp: '+243 823 456 789',
      email: 'info@materials-construction.cd'
    },
    {
      id: 7,
      name: 'Textile Congo',
      category: 'Mode & Textile',
      location: 'Goma, RDC',
      avatar: 'https://readdy.ai/api/search-image?query=Textile%20company%20logo%2C%20fashion%20branding%2C%20fabric%20and%20clothing%20company%2C%20professional%20corporate%20design%2C%20purple%20and%20pink%20colors%2C%20fashion%20appearance%2C%20business%20identity%2C%20centered%20composition%2C%20isolated%20on%20white%20background&width=50&height=50&seq=contact3&orientation=squarish',
      status: 'online',
      phone: '+243 834 567 890',
      whatsapp: '+243 834 567 890',
      email: 'commercial@textile-congo.cd'
    },
    {
      id: 8,
      name: 'Auto Parts RDC',
      category: 'Automobile',
      location: 'Kolwezi, RDC',
      avatar: 'https://readdy.ai/api/search-image?query=Automotive%20parts%20logo%2C%20car%20repair%20branding%2C%20automotive%20company%2C%20professional%20corporate%20design%2C%20red%20and%20black%20colors%2C%20automotive%20appearance%2C%20business%20identity%2C%20centered%20composition%2C%20isolated%20on%20white%20background&width=50&height=50&seq=contact4&orientation=squarish',
      status: 'offline',
      phone: '+243 845 678 901',
      whatsapp: '+243 845 678 901',
      email: 'ventes@autoparts-rdc.cd'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'TechGlobal Ltd.',
      content: 'Bonjour, nous sommes intéressés par vos smartphones',
      time: '14:30',
      isOwn: false
    },
    {
      id: 2,
      sender: 'Vous',
      content: 'Parfait ! Combien d\'unités souhaitez-vous ?',
      time: '14:31',
      isOwn: true
    },
    {
      id: 3,
      sender: 'TechGlobal Ltd.',
      content: 'Pouvez-vous confirmer les prix pour 500 unités ?',
      time: '14:32',
      isOwn: false
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const handleNewConversation = () => {
    setShowNewConversationModal(true);
  };

  const handleStartConversation = (contact: any) => {
    setSelectedContact(contact);
    setShowNewConversationModal(false);
    alert(`Nouvelle conversation démarrée avec ${contact.name}`);
  };

  const handleDirectCall = (contact: any) => {
    setCallContact(contact);
    setShowCallModal(true);
  };

  const handlePhoneCall = (phoneNumber: string, contactName: string) => {
    try {
      // Lancer l'appel téléphonique
      if (typeof window !== 'undefined') {
        window.location.href = `tel:${phoneNumber}`;
      }

      // Enregistrer l'historique d'appel
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        const callHistory = JSON.parse(localStorage.getItem('mireb_call_history') || '[]');
        const newCall = {
          id: Date.now(),
          contact: contactName,
          phone: phoneNumber,
          date: new Date().toISOString(),
          type: 'outgoing'
        };
        callHistory.unshift(newCall);
        localStorage.setItem('mireb_call_history', JSON.stringify(callHistory.slice(0, 50)));
      }

      setShowCallModal(false);

      // Confirmation visuelle
      setTimeout(() => {
        alert(` Appel lancé vers ${contactName}\n${phoneNumber}\n\nL'appel a été ajouté à votre historique.`);
      }, 500);
    } catch (error) {
      alert(' Impossible de lancer l\'appel. Vérifiez que votre appareil supporte les appels téléphoniques.');
    }
  };

  const handleWhatsAppCall = (whatsappNumber: string, contactName: string) => {
    try {
      // Lancer WhatsApp
      const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Bonjour, je vous contacte depuis Mireb Commercial concernant vos produits.`;
      if (typeof window !== 'undefined') {
        window.open(whatsappUrl, '_blank');
      }

      setShowCallModal(false);

      setTimeout(() => {
        alert(` WhatsApp ouvert pour ${contactName}\n\nVous pouvez maintenant lancer un appel vocal ou vidéo directement dans WhatsApp.`);
      }, 500);
    } catch (error) {
      alert(' Impossible d\'ouvrir WhatsApp. Vérifiez que l\'application est installée.');
    }
  };

  const handleEmailContact = (email: string, contactName: string) => {
    try {
      const subject = encodeURIComponent(`Contact commercial depuis Mireb - ${contactName}`);
      const body = encodeURIComponent(`Bonjour,\n\nJe vous contacte depuis la plateforme Mireb Commercial concernant vos produits et services.\n\nPourriez-vous me recontacter pour discuter d'une éventuelle collaboration commerciale ?\n\nCordialement,\nÉquipe Mireb Commercial`);

      const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
      if (typeof window !== 'undefined') {
        window.location.href = mailtoUrl;
      }

      setShowCallModal(false);

      setTimeout(() => {
        alert(` Email préparé pour ${contactName}\n${email}\n\nVotre client email va s'ouvrir avec un message pré-rédigé.`);
      }, 500);
    } catch (error) {
      alert(' Impossible d\'ouvrir le client email.');
    }
  };

  const filteredContacts = availableContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchContacts.toLowerCase()) ||
    contact.category.toLowerCase().includes(searchContacts.toLowerCase()) ||
    contact.location.toLowerCase().includes(searchContacts.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="font-pacifico text-xl text-blue-600">
            Messages
          </div>
          <div className="flex items-center space-x-3">
            <button className="w-8 h-8 flex items-center justify-center">
              <i className="ri-search-line text-gray-600"></i>
            </button>
            <button className="w-8 h-8 flex items-center justify-center">
              <i className="ri-more-line text-gray-600"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-16 pb-20">
        {!activeChat ? (
          /* Conversations List */
          <div className="px-4 py-4">
            <div className="space-y-3">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setActiveChat(conv.id)}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                        <img
                          src={conv.avatar}
                          alt={conv.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      {conv.status === 'online' && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">
                          {conv.name}
                        </h3>
                        <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                          {conv.time}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-600 text-sm truncate">
                          {conv.lastMessage}
                        </p>
                        {conv.unread > 0 && (
                          <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 ml-2">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* New Conversation Button */}
            <div className="mt-8 text-center">
              <button
                onClick={handleNewConversation}
                className="bg-blue-600 text-white px-6 py-3 !rounded-button font-medium"
              >
                <i className="ri-add-line mr-2"></i>
                Nouvelle conversation
              </button>
            </div>
          </div>
        ) : (
          /* Chat View */
          <div className="flex flex-col h-screen">
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setActiveChat(null)}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <i className="ri-arrow-left-line text-gray-600"></i>
                </button>
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                  <img
                    src={conversations.find(c => c.id === activeChat)?.avatar}
                    alt="Avatar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {conversations.find(c => c.id === activeChat)?.name}
                  </h3>
                  <p className="text-xs text-green-500">En ligne</p>
                </div>
                <button
                  onClick={() => handleDirectCall(conversations.find(c => c.id === activeChat))}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <i className="ri-phone-line text-gray-600"></i>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-4 space-y-4 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.isOwn
                        ? 'bg-blue-600 text-white'
                        : 'bg-white border border-gray-200 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.isOwn ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 px-4 py-3 pb-20">
              <div className="flex items-center space-x-3">
                <button className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-attachment-line text-gray-600"></i>
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Tapez votre message..."
                    className="w-full py-2 px-4 bg-gray-100 !rounded-button border-none text-gray-900 text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  className="w-8 h-8 flex items-center justify-center bg-blue-600 !rounded-button"
                >
                  <i className="ri-send-plane-fill text-white"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation - Only show when not in chat */}
      {!activeChat && (
        <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-0 py-0">
          <div className="grid grid-cols-4 h-16">
            <Link href="/" className="flex flex-col items-center justify-center space-y-1">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-home-line text-gray-600"></i>
              </div>
              <span className="text-xs text-gray-600">Accueil</span>
            </Link>

            <Link href="/categories" className="flex flex-col items-center justify-center space-y-1">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-grid-line text-gray-600"></i>
              </div>
              <span className="text-xs text-gray-600">Catégories</span>
            </Link>

            <Link href="/messages" className="flex flex-col items-center justify-center space-y-1 bg-blue-50">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-message-3-fill text-blue-600"></i>
              </div>
              <span className="text-xs text-blue-600 font-medium">Messages</span>
            </Link>

            <Link href="/profile" className="flex flex-col items-center justify-center space-y-1">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-user-line text-gray-600"></i>
              </div>
              <span className="text-xs text-gray-600">Profil</span>
            </Link>
          </div>
        </nav>
      )}

      {/* New Conversation Modal */}
      {showNewConversationModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Nouvelle conversation
              </h3>
              <button
                onClick={() => setShowNewConversationModal(false)}
                className="w-8 h-8 flex items-center justify-center"
              >
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un fournisseur..."
                  value={searchContacts}
                  onChange={(e) => setSearchContacts(e.target.value)}
                  className="w-full py-3 px-4 pr-10 bg-gray-50 border-none !rounded-button text-gray-900"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                  <i className="ri-search-line text-gray-400"></i>
                </div>
              </div>
            </div>

            {/* Contacts List */}
            <div className="max-h-96 overflow-y-auto">
              {filteredContacts.length === 0 ? (
                <div className="text-center py-8">
                  <i className="ri-user-search-line text-4xl text-gray-300 mb-2"></i>
                  <p className="text-gray-500 text-sm">Aucun fournisseur trouvé</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {filteredContacts.map((contact) => (
                    <div
                      key={contact.id}
                      onClick={() => handleStartConversation(contact)}
                      className="p-4 hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative flex-shrink-0">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                            <img
                              src={contact.avatar}
                              alt={contact.name}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          {contact.status === 'online' && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm truncate">
                            {contact.name}
                          </h4>
                          <p className="text-gray-600 text-xs truncate">
                            {contact.category}
                          </p>
                          <div className="flex items-center mt-1">
                            <i className="ri-map-pin-line text-gray-400 text-xs mr-1"></i>
                            <span className="text-gray-500 text-xs">
                              {contact.location}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <i className="ri-arrow-right-s-line text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="text-xs text-gray-600 mb-3">Actions rapides</div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    if (filteredContacts.length > 0) {
                      handleDirectCall(filteredContacts[0]);
                    } else {
                      alert('Sélectionnez d\'abord un fournisseur pour l\'appeler.');
                    }
                  }}
                  className="flex items-center justify-center space-x-2 py-2 bg-white border border-gray-200 !rounded-button text-sm hover:bg-green-50 hover:border-green-200 transition-colors"
                >
                  <i className="ri-phone-line text-green-600"></i>
                  <span className="text-gray-700">Appel direct</span>
                </button>
                <button
                  onClick={() => {
                    if (filteredContacts.length > 0) {
                      handleEmailContact(filteredContacts[0].email, filteredContacts[0].name);
                    } else {
                      alert('Sélectionnez d\'abord un fournisseur pour l\'email.');
                    }
                  }}
                  className="flex items-center justify-center space-x-2 py-2 bg-white border border-gray-200 !rounded-button text-sm hover:bg-blue-50 hover:border-blue-200 transition-colors"
                >
                  <i className="ri-mail-line text-blue-600"></i>
                  <span className="text-gray-700">Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call Modal */}
      {showCallModal && callContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Contacter par téléphone
              </h3>
              <button
                onClick={() => setShowCallModal(false)}
                className="w-8 h-8 flex items-center justify-center"
              >
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>

            {/* Contact Info */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={callContact.avatar}
                    alt={callContact.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">
                    {callContact.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {callContact.category}
                  </p>
                  <div className="flex items-center mt-1">
                    <i className="ri-map-pin-line text-gray-400 text-xs mr-1"></i>
                    <span className="text-gray-500 text-xs">
                      {callContact.location}
                    </span>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${callContact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
              </div>
            </div>

            {/* Call Options */}
            <div className="p-4">
              <div className="space-y-3">
                {/* Phone Call */}
                <button
                  onClick={() => handlePhoneCall(callContact.phone, callContact.name)}
                  className="w-full flex items-center space-x-4 p-4 bg-green-50 border border-green-200 !rounded-button hover:bg-green-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-phone-fill text-green-600 text-xl"></i>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-gray-900">Appel téléphonique</div>
                    <div className="text-sm text-gray-600">{callContact.phone}</div>
                  </div>
                  <i className="ri-arrow-right-s-line text-gray-400"></i>
                </button>

                {/* WhatsApp Call */}
                <button
                  onClick={() => handleWhatsAppCall(callContact.whatsapp, callContact.name)}
                  className="w-full flex items-center space-x-4 p-4 bg-green-50 border border-green-200 !rounded-button hover:bg-green-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-whatsapp-fill text-green-600 text-xl"></i>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-gray-900">Appel WhatsApp</div>
                    <div className="text-sm text-gray-600">Vocal ou vidéo • {callContact.whatsapp}</div>
                  </div>
                  <i className="ri-arrow-right-s-line text-gray-400"></i>
                </button>

                {/* Email Alternative */}
                <button
                  onClick={() => handleEmailContact(callContact.email, callContact.name)}
                  className="w-full flex items-center space-x-4 p-4 bg-blue-50 border border-blue-200 !rounded-button hover:bg-blue-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-mail-fill text-blue-600 text-xl"></i>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-gray-900">Envoyer un email</div>
                    <div className="text-sm text-gray-600">{callContact.email}</div>
                  </div>
                  <i className="ri-arrow-right-s-line text-gray-400"></i>
                </button>
              </div>

              {/* Info */}
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <i className="ri-information-line text-blue-600 text-sm mt-0.5"></i>
                  <div>
                    <div className="text-xs font-medium text-gray-800">Conseil</div>
                    <div className="text-xs text-gray-600 mt-1">
                      Les appels sont gratuits entre utilisateurs WhatsApp. Coûts d'appel standard pour les numéros de téléphone.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cancel Button */}
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => setShowCallModal(false)}
                className="w-full py-3 text-gray-600 font-medium"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
