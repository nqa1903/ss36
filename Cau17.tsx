import React, { useRef, useState } from 'react'

export default function Cau17() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(0);

    const handleIncrement = () => {
        prevCountRef.current = count;
        setCount(prevCount => prevCount + 1);
    }
  return (
    <div>
      Câu 17
      <p>Giá trị trước {prevCountRef.current}</p>
      <p>Giá trị hiện tại {count}</p>
      <button onClick={handleIncrement}>Tăng</button>
    </div>
  )
}
