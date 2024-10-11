import React from 'react';
import { useEffect, useRef, useLayoutEffect } from 'react';
import { SpinWheel } from 'spin-wheel-game';

function MovieWheel({movieList, handleSpinFinish}) {

  const randomDownDuration = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;

  const spinWheelProps = {
    segments: movieList,
    onFinished: handleSpinFinish,
    primaryColor: '#000000',
    contrastColor: 'white',
    buttonText: 'Spin',
    isOnlyOnce: false,
    size: 200,
    upDuration: 100,
    downDuration: randomDownDuration,
    fontFamily: 'Arial',
    arrowLocation: 'top',
    showTextOnSpin: false,
    isSpinSound: true,
  };

  return (
    <div className="wheel-container">
      <SpinWheel key={JSON.stringify(movieList)} {...spinWheelProps} />
    </div>
  );
};

export default MovieWheel;