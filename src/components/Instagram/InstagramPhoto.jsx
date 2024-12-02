import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const InstagramFeed = ({ instaID, accessToken }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/${instaID}/media?fields=id,caption,media_url&limit=10&access_token=${accessToken}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPhotos(data.data);
      } catch (error) {
        console.error('Error fetching Instagram photos:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [instaID, accessToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error if there's an issue
  }

  return (
    <div className="instagram-feed w-full">
      {photos.map(photo => (
        <div key={photo.id} className="instagram-photo">
          <img src={photo.media_url} alt={photo.caption || 'Instagram photo'} />
          <p>{photo.caption || 'No caption'}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;