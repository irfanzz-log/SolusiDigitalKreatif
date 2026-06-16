'use client'
import { useState, useEffect } from "react"

export default function CountAnimation({target}) {
    const [count,setCount] = useState(0);

   useEffect(() => {
  let startTime;
  const duration = 1500;

  const easeOut = (t) => {
    return 1 - Math.pow(1 - t, 4);
  };

  const animation = (time) => {
    if (!startTime) startTime = time;

    const progres = time - startTime;

    const percent = Math.min(progres / duration, 1);

    const eased = easeOut(percent);

    const value = Math.floor(eased * target);

    setCount(value);

    if (percent < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
}, []);
    
    return (
        <span>{count}</span>
    )
}