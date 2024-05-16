import React from 'react'

export default function Cau18() {
    const currentMonth = new Date().getMonth() + 1;

  let season;
  if (currentMonth >= 1 && currentMonth <= 3) {
    season = 'Xuân';
  } else if (currentMonth >= 4 && currentMonth <= 6) {
    season = 'Hạ';
  } else if (currentMonth >= 7 && currentMonth <= 9) {
    season = 'Thu';
  } else {
    season = 'Đông';
  }

  return (
    <div>
      Câu 18
      <p>Mùa hiện tại : {season}</p>
    </div>
  )
}
