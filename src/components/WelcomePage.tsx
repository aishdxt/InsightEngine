import React from 'react';

const WelcomePage = () => {
  const SynclinerLogo = require('../assets/Syncliner_logo.png');
  // Reads the app name from your environment variables
  const GITHUB_APP_NAME = process.env.REACT_APP_GITHUB_APP_NAME || 'your-github-app-name';
  const installUrl = `https://github.com/apps/${GITHUB_APP_NAME}/installations/new`;

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-lg w-full">
      <img src={SynclinerLogo} alt="Syncliner Logo" className="mx-auto mb-6 h-24" />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome!</h1>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        To get started, please install our GitHub App.
      </p>
      <a href={installUrl} className="inline-block">
        <button
          className="bg-white text-black font-bold py-3 px-6 rounded-lg border border-black shadow-md transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Install GitHub App
        </button>
      </a>
    </div>
  );
};

export default WelcomePage;