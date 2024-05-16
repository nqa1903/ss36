import React, { useEffect, useRef } from 'react'

export default function Cau14() {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
  return (
    <div>
        Câu 14
      <input ref={inputRef} type="text" placeholder="focus me..." />
    </div>
  )
}
