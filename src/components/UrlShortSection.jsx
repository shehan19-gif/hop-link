import { useState } from 'react';
import './UrlShortSection.css';
import axios from 'axios';

const UrlShortSection = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/shorten', { originalUrl });
      setShortUrl(`http://localhost:5000/${res.data.shortCode}`);
      setError('');
    } catch(err) {
      setError(err.response?.data || 'Error shortening URL');
    }
  }

  return (
    <div id="shorten-sec">
      <form onSubmit={handleSubmit}>
        <input type="url" value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} placeholder="Enter URL to shorten" required/>
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div className="result">
          <p>Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default UrlShortSection;