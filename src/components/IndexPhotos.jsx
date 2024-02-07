import React, { useState, useEffect } from "react";

function IndexPhotos() {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch("/photos");
      const data = await response.json();
      setPhotos(data.photos);
    } catch (error) {
      console.error("ng", error);
    }
  };
  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleDeletePhoto = async (id) => {
    try {
      const response = await fetch(`/photo/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      fetchPhotos();
    } catch (error) {
      console.error("Error deleting photo:", error);
    }
  };
  return (
    <div>
      <h2>写真一覧</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo._id}>
            <img src={photo.imageUrl} />
            <button onClick={() => handleDeletePhoto(photo._id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexPhotos;
