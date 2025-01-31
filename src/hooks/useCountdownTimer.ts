import { useCallback, useEffect, useRef, useState } from "react";

export const useCountdownTimer = (seconds: number) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const startCountdown = useCallback(() => {
    console.log("starting countdown ...");

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, [setTimeLeft]);

  const resetCountdown = useCallback(() => {
    console.log("resetting countdown ...");
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current as NodeJS.Timeout);

    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (!timeLeft && intervalRef.current) {
      console.log("clearing countdown ...");
      clearInterval(intervalRef.current as NodeJS.Timeout);
    }
  }, [timeLeft, intervalRef]);
  return {
    timeLeft,
    startCountdown,
    resetCountdown,
    setTimeLeft,
  };
};
