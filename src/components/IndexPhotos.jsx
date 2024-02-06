import React, { useState, useEffect } from "react";

function IndexPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("/photos");
        const data = await response.json();
        setPhotos(data.photos);
      } catch (error) {
        console.error("ng", error);
      }
    };
    fetchPhotos();
  }, []);
  return (
    <div>
      <h2>写真一覧</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo._id}>
            <img src={photo.imageUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexPhotos;
