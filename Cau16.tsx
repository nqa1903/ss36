import React, { useEffect } from 'react'

export default function Cau16() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            document.title = `Vị trí cuộn : ${scrollPosition}`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit molestias atque. Mollitia ipsa laudantium amet quos voluptatum itaque explicabo ducimus reiciendis quo, quaerat iure cum aspernatur dicta, quam exercitationem.</p>
    </div>
  )
}
