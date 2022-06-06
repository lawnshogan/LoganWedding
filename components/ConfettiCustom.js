import React, { useState } from 'react'
import NoSsr from '@material-ui/core/NoSsr';
import Confetti from 'react-confetti'
import { useEffect } from 'react';

export const ConfettiCustom = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // some hacky shiiit from 'https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook'
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <NoSsr>
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={30}
        gravity={0.025}
        opacity={0.7}
        zindex={1}
      />
    </NoSsr>
  )
}
export default ConfettiCustom;