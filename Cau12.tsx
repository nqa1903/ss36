import React, { useEffect, useState } from 'react'

export default function Cau12() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };
  return (
    <div>
      Câu 12
      <button onClick={handleIncrement}>Click {count} lần</button>
    </div>
  )
}
