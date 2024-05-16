import React, { useEffect, useState } from 'react';

export default function Cau11() {
    const [title, setTitle] = useState(''); 

    useEffect(() => {
      document.title = title;
    }, [title]); 

    const handleChange = (event:any) => {
        setTitle(event.target.value); 
    };

    return (
        <div>
            Câu 11
            <input
                type="text"
                value={title}
                onChange={handleChange}
                placeholder="Nhập tiêu đề"
            />
        </div>
    );
}
