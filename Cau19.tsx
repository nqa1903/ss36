import React, { useEffect, useState } from 'react'

export default function Cau19() {
    const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const startTime = Date.now(); 
    const intervalId = setInterval(() => {
      const currentTime = Date.now(); 
      const elapsedTime = Math.floor((currentTime - startTime) / 1000); 

      setTimeElapsed(elapsedTime); 
    }, 1000); 

    return () => clearInterval(intervalId);
    }, []); 
  return (
    <div>
      Câu 19 
      <p>Thời gian đã trôi qua : {timeElapsed}</p>
    </div>
  )
}
