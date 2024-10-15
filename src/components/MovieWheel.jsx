import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

function MovieWheel({movieList, handleSpinFinish}) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const dummyData = Array.from({ length: 9 }, () => ({ option: '' }));

  const handleSpinClick = () => {
    setIsButtonVisible(false);
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * movieList.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  const handleSpinFinishLocal = (result) => {
    setIsButtonVisible(true);
    handleSpinFinish(result);
  }

  return (
    <>
    {movieList.length > 0 &&
      <>
        <div className="wheel-container">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={movieList}
            backgroundColors={["#F5C519", "#000", "#E83435"]}
            textColors={["black"]}
            outerBorderColor={"black"}
            outerBorderWidth={1}
            radiusLineWidth={1}
            innerBorderColor="white"

            onStopSpinning={() => {
                handleSpinFinishLocal(movieList[prizeNumber].option);
            }}
          />
          {isButtonVisible &&
              <button className="movie-button spin-the-wheel-button" onClick={handleSpinClick}>SPIN THE WHEEL</button>
          }
        </div>
      </>
    }
    {movieList.length === 0 &&
      <div className="wheel-container">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={dummyData}
            backgroundColors={["#F5C519", "#000", "#E83435"]}
            textColors={["black"]}
            outerBorderColor={"black"}
            outerBorderWidth={1}
            radiusLineWidth={1}
            innerBorderColor="white"
          />
        <span className="wheel-no-results-text">No results, please update your movie preferences.</span>
      </div>
    }
    </>
  )
}

export default MovieWheel;