import React, { useEffect, useState, useRef } from 'react';

export default function Video1() {
  const [hits, setHits] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [message, setMessage] = useState('');

  const videoRef = useRef(null);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    let API = `https://pixabay.com/api/videos/?key=17241914-90da7b93c0ccceb734849dcd1&q=${message}`;

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

  useEffect(() => {
    // Play the next video when the current video ends
    const handleVideoEnded = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % hits.length);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnded);
    }

    return () => {
      // Clean up event listener
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnded);
      }
    };
  }, [hits]);

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

      <div className='container m-2' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {hits.length === 0 ? (
          <h2 className='bg-primary rounded text-light'>No Preview Available</h2>
        ) : (
          hits.map((hit, index) => (
            <div className="card m-2" style={{ width: '18rem' }} key={hit.id}>
              <video
                ref={videoRef}
                controls
                width="100%"
                height="auto"
                autoPlay={index === currentVideoIndex} // Auto-play the current video
              >
                <source src={hit.videos.large.url} type={`video/${hit.videos.large.url.split('.').pop()}`} />
                Your browser does not support the video tag.
              </video>
              <div className="card-body">
                <h5 className="card-title">{hit.tags}</h5>
                <p>Duration: {hit.duration} seconds</p>
                <p>Views: {hit.views}</p>
                <p>Likes: {hit.likes}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
