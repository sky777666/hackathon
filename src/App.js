import React, { useState } from 'react';
import './App.css';
// import Header from './components/Header';
import Picture from './components/Picture';
import StarRating from './components/starRating'

import data from './data.json';

const App = () => {
  const [picture, setPicture] = useState(data);
  const [likedPictures, setLikedUsers] = useState([]);
  const [dislikedPictures, setDislikedPictures] = useState([]);
  const activePicture = 0;

  const removedPersonFromDataSrc = (pictureSource, userId) =>
    pictureSource.filter(user => user.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPicture = [...picture];
    const newLikedPictures = [...likedPictures];
    
    const newDislikedPictures = [...dislikedPictures];

    switch (action) {
      case 'ADD_TO_LIKED_PICTURES':
        if (!picture[activePicture].likedUsers.includes(userId)) {
          newPicture[activePicture].likedUsers.push(userId);
          newLikedPictures.push(data[userId]);

          setLikedUsers(newLikedPictures);
          setPicture(removedPersonFromDataSrc(picture, userId));
        }
        break;
      case 'ADD_TO_DISLIKED_PICTURE':
        if (!picture[activePicture].dislikedPictures.includes(userId)) {
          newPicture[activePicture].dislikedPictures.push(userId);
          newDislikedPictures.push(data[userId]);

          setDislikedPictures(newLikedPictures);
          setPicture(removedPersonFromDataSrc(picture, userId));
        }
        break;
      
      default:
        return picture;
    }
  };

  return (
    <div className="app">
      {/* <Header /> */}
      {picture[1] ? (
        <Picture
          key={picture[1].id}
          picture={picture[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedPicture={likedPictures}
        />
      ) : (
        <> </>
      )}
    </div>
  );
};

export default App;


