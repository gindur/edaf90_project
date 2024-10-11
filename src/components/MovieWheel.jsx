import React from 'react';
import { SpinWheel } from 'spin-wheel-game';

// const segments = [
//   { segmentText: 'Wild strawberries', segColor: '#A72608' },
//   { segmentText: '12 angry men', segColor: '#4ECDC4' },
//   { segmentText: 'Beautiful mind', segColor: '#FF6B6B' },
//   { segmentText: 'The Godfather', segColor: '#662E9B' },
//   { segmentText: 'Shawshank Redemption', segColor: '#077187' },
//   { segmentText: '2001: A Space Odyssey', segColor: '#F2542D' },
//   // Add more segments as needed
// ];

function MovieWheel({movieList, setSelectedMovie}) {


  const handleSpinFinish = (result) => {
    console.log(`Spun to: ${result}`);
    // Handle the result as needed
    setSelectedMovie(result);
  };

  const spinWheelProps = {
    segments: movieList,
    onFinished: handleSpinFinish,
    primaryColor: '#000000',
    contrastColor: 'white',
    buttonText: 'Spin',
    isOnlyOnce: false,
    size: 200,
    upDuration: 100,
    downDuration: 600,
    fontFamily: 'Arial',
    arrowLocation: 'top',
    showTextOnSpin: true,
    isSpinSound: true,
  };

  return (
    <div className="wheel-container">
      <SpinWheel key={JSON.stringify(movieList)} {...spinWheelProps} />
    </div>
  );
};

export default MovieWheel;