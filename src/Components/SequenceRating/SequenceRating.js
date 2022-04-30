import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";

let RatingStars;

const SequenceRating = (props) => {

/*     Rating     */
useEffect(() => {
   let currentRating = rateSequence();
   if (currentRating == 0) {
      RatingStars = 
      <div>
        <FaStar className='starOff' />
        <FaStar className='starOff' />
        <FaStar className='starOff' /> 
      </div>
      }
    else if(currentRating == 1) {
      RatingStars = 
      <div>
        <FaStar className='starOn' />
        <FaStar className='starOff' />
        <FaStar className='starOff' /> 
      </div>
      }
    else if(currentRating == 2) {
      RatingStars = 
      <div>
        <FaStar className='starOn' />
        <FaStar className='starOn' />
        <FaStar className='starOff' /> 
      </div>
      }
    else if(currentRating == 3) {
      RatingStars = 
      <div>
        <FaStar />
        <FaStar />
        <FaStar /> 
      </div>
      }
    props.setSequenceRating(rateSequence()); // will help for partyRating
  }, [props.sequence, props.bpm, props.mood])

  /*     Rate sequence     */
const rateSequence = () => {
    let rate = 0;
    if(props.mood == "tekno") {
      if(props.bpm <= 220 && props.bpm >= 100 && props.sequence[0][0] + props.sequence[0][4] + props.sequence[0][8] + props.sequence[0][12]  == 4 || props.sequence[4][0] + props.sequence[4][4] + props.sequence[4][8] + props.sequence[4][12]  == 4) {
        rate = 1;
      }
      if(rate == 1 && props.sequence[5][0] + props.sequence[5][4] + props.sequence[5][8] + props.sequence[5][12]  == 4 || props.sequence[6][0] + props.sequence[6][4] + props.sequence[6][8] + props.sequence[6][12]  == 4) {
        rate = 2;
      }
      if(rate > 0 && props.sequence[7][4] + props.sequence[7][12] == 2) {
        rate += 1;
      }
    } // if tekno
    if(props.mood == "dub") {
      if(props.bpm <= 160 && props.bpm >= 90 && props.sequence[0][0] == 1) {
        rate = 1;
      }
      if(rate == 1 && props.sequence[4][8]  == 1) {
        rate = 2;
      }
      if(rate > 0 && sumArray(props.sequence[6]) > 3) {
        rate += 1;
      }
    } // if dub
    if(props.mood == "jungle") {
      if(props.bpm <= 200 && props.bpm >= 160 && props.sequence[0][0] + props.sequence[0][10] == 2 && props.sequence[2][4] + props.sequence[2][12] + props.sequence[6][4] + props.sequence[6][12] > 1) {
        rate = 1;
      }
      if(rate == 1 && sumArray(props.sequence[4]) + sumArray(props.sequence[5]) > 1) {
        rate = 2;
      }
      if(sumArray(props.sequence[0]) + sumArray(props.sequence[1]) + sumArray(props.sequence[2]) + sumArray(props.sequence[3]) + sumArray(props.sequence[4]) + sumArray(props.sequence[5]) + sumArray(props.sequence[6]) + sumArray(props.sequence[7]) == 8 && props.sequence[0][0] + props.sequence[1][2] + props.sequence[2][4] + props.sequence[3][6] + props.sequence[4][8] + props.sequence[5][10] + props.sequence[6][12] + props.sequence[7][14] == 8) {
        rate = 3;
      }
    } // if jungle
    // props.setSequenceRating(rate);
    return rate;
  
  };
  
  /*     sum Array, used for rating     */
  const sumArray = (array) => {
    let sum = 0;
    for(let i = 0; i<array.length; i++) {
      sum += array[i];
    }
    return sum;
  }

  return (
    <div>
    {RatingStars}
   </div>
  );

  } // SequenceRating

 export default SequenceRating;