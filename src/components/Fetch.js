import React, { useEffect, useState } from 'react';

export default function Fetch() {
  const [hits, setHits] = useState([]);
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    let API = `https://pixabay.com/api/?key=17241914-90da7b93c0ccceb734849dcd1&q=${message}&image_type=photo`;

    const fetchApiData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setHits(data.hits);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApiData();
  }, [message]);

  const handleDownload = async (url, fileName) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <div>
      <div className='m-4'>
        <input
          className="form-control"
          type="text"
          placeholder="Default input"
          aria-label="default input example"
          onChange={handleChange}
        />
      </div>

      <div className='container  p-5' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center" }}>
        {hits.length === 0 ? (
          <h2 className='bg-primary rounded text-light'>No Preview Available</h2>
        ) : (
          hits.map((hit) => (
            <div className="card m-2" style={{ width: '18rem' }} key={hit.id}>
              <img
                src={hit.largeImageURL}
                className="card-img-top"
                alt={hit.tags}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{hit.tags}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDownload(hit.largeImageURL, `${hit.id}_${hit.tags}.jpg`)}
                >
                  Download
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
