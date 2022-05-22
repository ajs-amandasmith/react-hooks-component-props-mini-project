import React from 'react';

function Images({minutes}) {
  let divByFive = minutes / 5;
  let coffee = "";
  let count = 0;
  let divByTen = minutes / 10;
  let bento = "";
  
  if (minutes <= 30) {
    if (minutes % 5 === 0) {
      while (count < divByFive) {
        coffee += "☕️" 
        count++;
      }
      return coffee;
    } else {
      divByFive = Math.floor(divByFive) + 1;
      while(count < divByFive) {
        coffee += "☕️";
        count++; 
      }
      return coffee;
    }
  } else {
    if (minutes % 10 === 0) {
      while (count < divByTen) {
        bento += "🍱";
        count++;
      }
      return bento;
    } else {
      divByTen = Math.floor(divByTen) + 1;
      while (count < divByTen) {
        bento += "🍱";
        count++;
      }
      return bento;
    }
  }
}

function Minutes({minutes}) {
  return (
    <div><Images minutes={minutes}/> {minutes} minutes to read</div>
  )
}

export default Minutes;