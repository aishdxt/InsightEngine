import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const CallbackPage = () => {
  const SynclinerLogo = require('../assets/Syncliner_logo.png');
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('Processing installation...');
  const [error, setError] = useState('');

  useEffect(() => {
    const installationId = searchParams.get('installation_id');

    if (!installationId) {
      setStatus('Installation failed.');
      setError('Could not find installation_id in the callback URL.');
      return;
    }

    // Send the installation ID to our backend API
    const registerInstallation = async () => {
      try {
        const response = await fetch('/api/register-installation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ installation_id: installationId }),
        });

        if (!response.ok) {
          throw new Error('Failed to register installation with the backend.');
        }

        setStatus('Installation Successful! 🎉');
        setError('');
      } catch (err: any) {
        setStatus('Installation failed.');
        setError(err.message);
      }
    };

    registerInstallation();
  }, [searchParams]);

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-lg w-full">
      <img src={SynclinerLogo} alt="Syncliner Logo" className="mx-auto mb-6 h-24" />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{status}</h1>
      {error ? (
        <p className="text-red-600 font-semibold">Error: {error}</p>
      ) : (
        <p className="text-lg text-gray-600">
          You can now close this window and return to our application.
        </p>
      )}
    </div>
  );
};

export default CallbackPage;