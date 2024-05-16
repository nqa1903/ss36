import React, { useEffect, useState } from 'react'

export default function Cau15() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
  return (
    <div>
      Câu 15
      <p>Thời gian hiện tại {time.toLocaleTimeString()}</p>
    </div>
  )
}
