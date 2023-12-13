// App.js
import React, { useState } from 'react';
import './App.css'; // Make sure to have this file in your src folder for styling

function App() {
  const [apiKeys, setApiKeys] = useState({ replicateKey: '', livePeerKey: '' });
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  function handleInputChange(e) {
    const { name, value } = e.target;
    setApiKeys(prevState => ({ ...prevState, [name]: value }));
  }

  function handlePromptChange(e) {
    setPrompt(e.target.value);
  }

  async function handleGenerateClick() {
    setLoading(true);
    // Call your backend service here with apiKeys and prompt
    // e.g., const response = await generateVideo(apiKeys, prompt);
    // setVideoSrc(response.videoUrl);
    setLoading(false);
  }

  async function handleStoreOnLivePeerClick() {
    // Call your backend service to store the video on LivePeer
  }

  async function handleMintAsNFTClick() {
    // Call your backend service to mint the video as an NFT
  }

  return (
    <div className="app">
      <header className="header">
        <h1>LivePeer Generative AI Movie Builder</h1>
        <button onClick={() => {/* Connect Wallet Function */}}>Connect Wallet</button>
      </header>
      <div className="content">
        <div className="form">
          <input
            name="replicateKey"
            placeholder="Replicate API Key"
            value={apiKeys.replicateKey}
            onChange={handleInputChange}
          />
          <input
            name="livePeerKey"
            placeholder="LivePeer API Key"
            value={apiKeys.livePeerKey}
            onChange={handleInputChange}
          />
          <textarea
            placeholder="Prompt"
            value={prompt}
            onChange={handlePromptChange}
          />
          <button onClick={handleGenerateClick}>Generate</button>
        </div>
        <div className="video-container">
          {loading ? <p>Loading...</p> : (videoSrc && <video src={videoSrc} controls />)}
        </div>
      </div>
      <footer className="footer">
        <button onClick={handleStoreOnLivePeerClick}>Store on LivePeer</button>
        <button onClick={handleMintAsNFTClick}>Mint as NFT</button>
      </footer>
    </div>
  );
}

export default App;
