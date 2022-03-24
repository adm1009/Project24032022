import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }:any) => {
  return (
    <>
      <div >
        <h2>our tours</h2>
        <div ></div>
      </div>
      <div>
        {tours.map((tour:any) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </>
  );
};

export default Tours;