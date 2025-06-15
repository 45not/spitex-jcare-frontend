import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    privacy: false,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch('https://website-jcare.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
          privacy: false,
        });
      } else {
        const data = await response.json();
        setErrorMsg(data.message || 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.');
        setStatus('error');
      }
    } catch (error) {
      setErrorMsg('Verbindungsfehler. Bitte versuchen Sie es erneut.');
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefon"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          required
        />
        <textarea
          name="message"
          placeholder="Nachricht (optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          rows={4}
        />
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          name="privacy"
          id="privacy"
          checked={formData.privacy}
          onChange={handleChange}
          className="mt-1"
          required
        />
        <label htmlFor="privacy" className="text-sm text-gray-600">
          Ich akzeptiere die <a href="#" className="text-red-500 hover:underline">Datenschutzbestimmungen</a>
        </label>
      </div>

      <button
        type="submit"
        className="w-full btn-primary"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Senden...' : 'Absenden'}
      </button>

      {status === 'success' && (
        <div className="text-green-600 text-center font-medium">
          Vielen Dank! Ihre Nachricht wurde gesendet.
        </div>
      )}
      {status === 'error' && (
        <div className="text-red-600 text-center font-medium">
          {errorMsg}
        </div>
      )}

      <div className="text-center space-y-4">
        <p className="text-xl font-semibold">Wir freuen uns auf Ihren Anruf</p>
        <a
          href="tel:+41800247247"
          className="block text-2xl font-bold text-red-500 hover:text-red-600"
        >
          +41 800 247 247
        </a>
        <p className="text-sm text-gray-600">zwischen 8:00 - 17:00 Uhr CET</p>
      </div>
    </form>
  );
};

export default ContactForm;
