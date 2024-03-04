import { useState } from "react";

export const useCountdown = (maxCountdownTime = 15) => {
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [countDownTime, setCountDownTime] = useState(maxCountdownTime);

  const startCountDown = () => {
    setIsCountingDown(true);

    const interval = setInterval(() => {
      setCountDownTime((timeInSeconds) => {
        if (timeInSeconds > 0) {
          return timeInSeconds - 1;
        }

        setIsCountingDown(false);
        clearInterval(interval);
        return maxCountdownTime;
      });
    }, 1000); // 1s
  };

  return {
    isCountingDown,
    countDownTime,
    startCountDown,
  };
};
