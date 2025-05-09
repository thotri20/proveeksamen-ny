"use client";

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Cookie Consent</h2>
        <p className="mb-4">This website uses cookies to ensure you get the best experience.</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleAccept}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
